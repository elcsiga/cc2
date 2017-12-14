import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOfferComponent } from './my-offer.component';

describe('MyOfferComponent', () => {
  let component: MyOfferComponent;
  let fixture: ComponentFixture<MyOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
