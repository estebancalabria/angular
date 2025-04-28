import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPersonaComponent } from './form-persona.component';

describe('FormPersonaComponent', () => {
  let component: FormPersonaComponent;
  let fixture: ComponentFixture<FormPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormPersonaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
