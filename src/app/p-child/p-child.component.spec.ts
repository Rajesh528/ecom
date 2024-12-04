import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PChildComponent } from './p-child.component';

describe('PChildComponent', () => {
  let component: PChildComponent;
  let fixture: ComponentFixture<PChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
