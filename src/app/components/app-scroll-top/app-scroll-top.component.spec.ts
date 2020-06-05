import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppScrollTopComponent } from './app-scroll-top.component';

describe('AppScrollTopComponent', () => {
  let component: AppScrollTopComponent;
  let fixture: ComponentFixture<AppScrollTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppScrollTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppScrollTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
