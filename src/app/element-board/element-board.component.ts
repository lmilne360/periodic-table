import { Component } from '@angular/core';
import data from '../../assets/PeriodicTableJSON.json';
import { Element } from '../element/model/element.model';

@Component({
  selector: 'app-element-board',
  templateUrl: './element-board.component.html',
  styleUrls: ['./element-board.component.scss']
})
export class ElementBoardComponent {
 elements: Element[] = data.elements;

}
