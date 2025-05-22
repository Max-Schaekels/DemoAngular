import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifshoppingitemComponent } from './modifshoppingitem.component';

describe('ModifshoppingitemComponent', () => {
  let component: ModifshoppingitemComponent;
  let fixture: ComponentFixture<ModifshoppingitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifshoppingitemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifshoppingitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
