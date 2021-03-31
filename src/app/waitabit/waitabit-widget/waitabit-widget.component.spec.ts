import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitabitWidgetComponent } from './waitabit-widget.component';

describe('WaitabitWidgetComponent', () => {
  let component: WaitabitWidgetComponent;
  let fixture: ComponentFixture<WaitabitWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaitabitWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitabitWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
