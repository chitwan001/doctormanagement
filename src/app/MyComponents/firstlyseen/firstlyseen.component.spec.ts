import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstlyseenComponent } from './firstlyseen.component';

describe('FirstlyseenComponent', () => {
  let component: FirstlyseenComponent;
  let fixture: ComponentFixture<FirstlyseenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstlyseenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstlyseenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
