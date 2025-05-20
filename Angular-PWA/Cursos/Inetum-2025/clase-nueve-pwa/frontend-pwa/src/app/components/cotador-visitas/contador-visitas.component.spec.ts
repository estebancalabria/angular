import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotadorVisitasComponent } from './contador-visitas.component';

describe('CotadorVisitasComponent', () => {
  let component: CotadorVisitasComponent;
  let fixture: ComponentFixture<CotadorVisitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CotadorVisitasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CotadorVisitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
