import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutNewComponent } from "./layout-new/layout-new.component";
import { PositionStaticComponent } from "./position-static/position-static.component";
import { PositionRelativeComponent } from "./position-relative/position-relative.component";
import { LayoutSidebarComponent } from "./layout-sidebar/layout-sidebar.component";
import { LoginTimComponent } from "./login-tim/login-tim.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "l_inter", component: LayoutNewComponent },
  { path: "l_sidebar", component: LayoutSidebarComponent },
  { path: "p_static", component: PositionStaticComponent },
  { path: "p_relative", component: PositionRelativeComponent },
  { path: "login", component: LoginComponent },
  { path: "loginTim", component: LoginTimComponent },
  {
    path: "",
    redirectTo: "/loginTim",
    pathMatch: "full"
  },
  { path: "**", redirectTo: "/loginTim" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
