import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWishCartComponent } from './user-wish-cart.component';

describe('UserWishCartComponent', () => {
  let component: UserWishCartComponent;
  let fixture: ComponentFixture<UserWishCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserWishCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserWishCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
