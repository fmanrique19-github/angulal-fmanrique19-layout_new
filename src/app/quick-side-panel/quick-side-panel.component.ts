import { Component, OnInit, ViewChild } from "@angular/core";
import { MatSidenav } from "@angular/material/sidenav";

@Component({
  selector: "app-quick-side-panel",
  templateUrl: "./quick-side-panel.component.html",
  styleUrls: ["./quick-side-panel.component.scss"]
})
export class QuickSidePanelComponent implements OnInit {
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
