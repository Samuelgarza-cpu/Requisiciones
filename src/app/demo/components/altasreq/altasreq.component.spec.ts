import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltasreqComponent } from './altasreq.component';

describe('AltasreqComponent', () => {
  let component: AltasreqComponent;
  let fixture: ComponentFixture<AltasreqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltasreqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltasreqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
