import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterForAllComponent } from './footer-for-all.component';

describe('FooterForAllComponent', () => {
  let component: FooterForAllComponent;
  let fixture: ComponentFixture<FooterForAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterForAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterForAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
