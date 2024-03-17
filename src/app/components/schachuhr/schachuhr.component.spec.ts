import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchachuhrComponent } from './schachuhr.component';

describe('SchachuhrComponent', () => {
  let component: SchachuhrComponent;
  let fixture: ComponentFixture<SchachuhrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchachuhrComponent]
    });
    fixture = TestBed.createComponent(SchachuhrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
