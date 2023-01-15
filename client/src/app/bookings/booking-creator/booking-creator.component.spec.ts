import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingCreatorComponent } from './booking-creator.component';

describe('BookingCreatorComponent', () => {
  let component: BookingCreatorComponent;
  let fixture: ComponentFixture<BookingCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingCreatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
