import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAgregarComponent } from './formulario-agregar.component';

describe('FormularioAgregarComponent', () => {
  let component: FormularioAgregarComponent;
  let fixture: ComponentFixture<FormularioAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioAgregarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
