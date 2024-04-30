import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCancionesComponent } from './lista-canciones.component';

describe('ListaCancionesComponent', () => {
  let component: ListaCancionesComponent;
  let fixture: ComponentFixture<ListaCancionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaCancionesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaCancionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
