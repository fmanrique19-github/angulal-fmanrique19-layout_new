import { Component, OnInit, ViewChild } from "@angular/core";
import { MatSidenav } from "@angular/material/sidenav";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  @ViewChild("sidenav", { static: false }) sidenav: MatSidenav;
  reason = "";

  constructor() {}

  ngOnInit() {}

  toggleNav() {
    console.log("toggleNav");
  }

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
}
