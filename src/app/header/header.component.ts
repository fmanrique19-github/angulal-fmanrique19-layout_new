import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter
} from "@angular/core";
import { MatSidenav } from "@angular/material/sidenav";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  // @ViewChild("sidenav", { static: false }) sidenav: MatSidenav;
  // reason = "";

  @Output()
  onSidenavOpen = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  // toggleNav() {
  //   console.log("toggleNav");
  // }

  open() {
    this.onSidenavOpen.emit();
  }

  // close(reason: string) {
  //   this.reason = reason;
  //   this.sidenav.close();
  // }
}
