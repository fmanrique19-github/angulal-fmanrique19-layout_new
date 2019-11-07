import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PositionStaticComponent } from "./position-static.component";

describe("FlowStaticComponent", () => {
  let component: PositionStaticComponent;
  let fixture: ComponentFixture<PositionStaticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PositionStaticComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
