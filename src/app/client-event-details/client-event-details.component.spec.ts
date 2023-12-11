import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientEventDetailsComponent } from './client-event-details.component';

describe('ClientEventDetailsComponent', () => {
  let component: ClientEventDetailsComponent;
  let fixture: ComponentFixture<ClientEventDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientEventDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientEventDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
