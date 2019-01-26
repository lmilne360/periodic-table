import { Component } from '@angular/core';
import { Element } from './element/model/element.model';
import elements from '../assets/PeriodicTableJSON.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'periodic-table';
  elements: Element[] = elements.elements;
}
