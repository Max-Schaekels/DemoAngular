import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddshoppingitemComponent } from './addshoppingitem.component';

describe('AddshoppingitemComponent', () => {
  let component: AddshoppingitemComponent;
  let fixture: ComponentFixture<AddshoppingitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddshoppingitemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddshoppingitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
