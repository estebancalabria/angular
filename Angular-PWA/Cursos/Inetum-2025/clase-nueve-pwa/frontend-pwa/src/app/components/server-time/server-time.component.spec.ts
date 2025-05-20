import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerTimeComponent } from './server-time.component';

describe('ServerTimeComponent', () => {
  let component: ServerTimeComponent;
  let fixture: ComponentFixture<ServerTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServerTimeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
