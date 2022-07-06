import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterForAuthComponent } from './footer-for-auth.component';

describe('FooterForAuthComponent', () => {
  let component: FooterForAuthComponent;
  let fixture: ComponentFixture<FooterForAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterForAuthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterForAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
