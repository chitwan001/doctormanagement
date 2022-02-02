import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaininteractionComponent } from './maininteraction.component';

describe('MaininteractionComponent', () => {
  let component: MaininteractionComponent;
  let fixture: ComponentFixture<MaininteractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaininteractionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaininteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
