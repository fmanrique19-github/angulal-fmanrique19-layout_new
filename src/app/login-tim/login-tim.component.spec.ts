import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTimComponent } from './login-tim.component';

describe('LoginTimComponent', () => {
  let component: LoginTimComponent;
  let fixture: ComponentFixture<LoginTimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginTimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginTimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
