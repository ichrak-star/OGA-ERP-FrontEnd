import { Component, OnInit } from '@angular/core';
import {  MatCalendarCellCssClasses } from '@angular/material/datepicker';

@Component({
  selector: 'app-e-calendrier',
  templateUrl: './e-calendrier.component.html',
  styleUrls: ['./e-calendrier.component.scss']
})
export class ECalendrierComponent implements OnInit {

  idEmployé;

  selectedDate= new Date() ;

  datesToBeHighlighted = []

  dateClass() {
    return (date: Date): MatCalendarCellCssClasses => {
      const highlightDate = this.datesToBeHighlighted.map(strDate => new Date(strDate))
        .some(d => d.getDate() === date.getDate() && d.getMonth() === date.getMonth() && d.getFullYear() === date.getFullYear());
      return highlightDate ? 'special-date' : '';
    };
  }

  constructor() { }

  ngOnInit(): void {
    this.idEmployé = localStorage.getItem('id');
  }

}
