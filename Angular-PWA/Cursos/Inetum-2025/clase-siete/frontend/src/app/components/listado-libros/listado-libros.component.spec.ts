import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoLibrosComponent } from './listado-libros.component';

describe('ListadoLibrosComponent', () => {
  let component: ListadoLibrosComponent;
  let fixture: ComponentFixture<ListadoLibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoLibrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
