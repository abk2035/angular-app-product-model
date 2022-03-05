import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentProductComponent } from './component-product.component';

describe('ComponentProductComponent', () => {
  let component: ComponentProductComponent;
  let fixture: ComponentFixture<ComponentProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
