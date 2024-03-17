import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerzuhrComponent } from './herzuhr.component';

describe('HerzuhrComponent', () => {
  let component: HerzuhrComponent;
  let fixture: ComponentFixture<HerzuhrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HerzuhrComponent]
    });
    fixture = TestBed.createComponent(HerzuhrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
