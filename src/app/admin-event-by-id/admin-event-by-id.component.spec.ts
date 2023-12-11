import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEventByIdComponent } from './admin-event-by-id.component';

describe('AdminEventByIdComponent', () => {
  let component: AdminEventByIdComponent;
  let fixture: ComponentFixture<AdminEventByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminEventByIdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminEventByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
