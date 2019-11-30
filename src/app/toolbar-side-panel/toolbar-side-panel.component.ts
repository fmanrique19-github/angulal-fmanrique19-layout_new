import { Component, OnInit, ViewChild } from "@angular/core";
import { MatSidenav } from "@angular/material/sidenav";

@Component({
  selector: "app-toolbar-side-panel",
  templateUrl: "./toolbar-side-panel.component.html",
  styleUrls: ["./toolbar-side-panel.component.scss"]
})
export class ToolbarSidePanelComponent implements OnInit {
  @ViewChild("sidenav", { static: false }) sidenav: MatSidenav;
  reason = "";

  constructor() {}

  ngOnInit() {}

  toggleNav() {
    console.log("toggleNav");
  }

  public open() {
    this.sidenav.toggle();
  }

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
}
