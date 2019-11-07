import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutNewComponent } from "./layout-new/layout-new.component";
import { PositionStaticComponent } from "./position-static/position-static.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "layout", component: LayoutNewComponent },
  { path: "p_static", component: PositionStaticComponent },
  { path: "login", component: LoginComponent },
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full"
  },
  { path: "**", redirectTo: "/login" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
