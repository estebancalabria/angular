import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolaMundoComponent } from './hola-mundo.component';

describe('HolaMundoComponent', () => {
  let component: HolaMundoComponent;
  let fixture: ComponentFixture<HolaMundoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HolaMundoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HolaMundoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should chage to false variable', () => {
    component.alternarDivs();
    expect(component.mostarDiv).toBeTrue();
  });
});
