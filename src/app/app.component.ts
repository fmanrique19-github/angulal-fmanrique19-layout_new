import { Component } from "@angular/core";
import { initTestItem } from "./testHelper/initTest";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "DataSync";

  constructor() {
    initTestItem();
  }
}
