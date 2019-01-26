import { Component, OnInit, Input } from '@angular/core';
import { Element } from './model/element.model';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})
export class ElementComponent implements OnInit {
  @Input()
  element: Element;
  elementClass: string[];
  constructor() {}

  ngOnInit() {
    this.elementClass = [
      'element',
      `element-${this.element.number}`,
      `${this.element.category}`
    ];
  }
}
