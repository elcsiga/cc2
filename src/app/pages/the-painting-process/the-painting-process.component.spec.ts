import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThePaintingProcessComponent } from './the-painting-process.component';

describe('ThePaintingProcessComponent', () => {
  let component: ThePaintingProcessComponent;
  let fixture: ComponentFixture<ThePaintingProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThePaintingProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThePaintingProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
