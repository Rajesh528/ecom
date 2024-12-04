import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PParentComponent } from './p-parent.component';

describe('PParentComponent', () => {
  let component: PParentComponent;
  let fixture: ComponentFixture<PParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
