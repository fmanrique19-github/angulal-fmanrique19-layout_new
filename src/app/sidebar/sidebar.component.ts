import { Component, OnInit, HostBinding } from "@angular/core";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
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
