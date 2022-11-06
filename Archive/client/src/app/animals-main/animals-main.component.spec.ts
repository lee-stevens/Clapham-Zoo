import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalsMainComponent } from './animals-main.component';

describe('AnimalsMainComponent', () => {
  let component: AnimalsMainComponent;
  let fixture: ComponentFixture<AnimalsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalsMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
