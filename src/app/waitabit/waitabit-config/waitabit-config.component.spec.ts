import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitabitConfigComponent } from './waitabit-config.component';

describe('WaitabitConfigComponent', () => {
  let component: WaitabitConfigComponent;
  let fixture: ComponentFixture<WaitabitConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaitabitConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitabitConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
