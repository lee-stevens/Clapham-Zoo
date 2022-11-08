import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalManagerComponent } from './animal-manager.component';

describe('AnimalManagerComponent', () => {
  let component: AnimalManagerComponent;
  let fixture: ComponentFixture<AnimalManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
