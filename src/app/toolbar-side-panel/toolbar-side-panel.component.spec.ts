import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarSidePanelComponent } from './toolbar-side-panel.component';

describe('ToolbarSidePanelComponent', () => {
  let component: ToolbarSidePanelComponent;
  let fixture: ComponentFixture<ToolbarSidePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarSidePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarSidePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
