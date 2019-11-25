import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, public router: Router) {}

  ngOnInit() {
    this.form = this.fb.group({
      userName: ["", Validators.required],
      pass: ["", Validators.required]
    });
  }

  onClick() {
    console.log("form", this.form);
    if (this.form.valid) {
      this.router.navigateByUrl("/l_sidebar");
    }
  }
}
