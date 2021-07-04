import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InConstructionPageComponent } from './in-construction-page.component';

describe('InConstructionPageComponent', () => {
  let component: InConstructionPageComponent;
  let fixture: ComponentFixture<InConstructionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InConstructionPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InConstructionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
