import { Component, OnInit } from '@angular/core';

import data from '../../assets/PeriodicTableJSON.json';
import { Element } from '../element/model/element.model';

@Component({
  selector: 'app-element-board',
  templateUrl: './element-board.component.html',
  styleUrls: ['./element-board.component.scss']
})
export class ElementBoardComponent implements OnInit {
 elements: Element[] = data.elements;
  constructor() { }

  ngOnInit() {
  }

}
