import { Component, OnInit, HostBinding } from "@angular/core";

@Component({
  selector: "app-navigation-toolbar",
  templateUrl: "./navigation-toolbar.component.html",
  styleUrls: ["./navigation-toolbar.component.scss"]
})
export class NavigationToolbarComponent implements OnInit {
  toggle: boolean;
  // toogle: boolean;
  // @HostBinding("class.isActive")
  @HostBinding("class.panel")
  get t() {
    return this.toggle;
  }
  constructor() {}

  ngOnInit() {}

  togglePanel() {
    this.toggle = !this.toggle;
    console.log("toggle");
    console.log(this.toggle);
  }
}
