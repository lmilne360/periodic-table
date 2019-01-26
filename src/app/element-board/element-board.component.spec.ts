import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementBoardComponent } from './element-board.component';

describe('ElementBoardComponent', () => {
  let component: ElementBoardComponent;
  let fixture: ComponentFixture<ElementBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
