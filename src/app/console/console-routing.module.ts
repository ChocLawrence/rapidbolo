import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "../core/auth.guard";
import { ConsoleComponent } from "./console.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

const routes: Routes = [
  {
    path: "",
    component: ConsoleComponent,
    children: [
      { path: "", redirectTo: "dashboard", pathMatch: "prefix" },
      {
        path: "dashboard", component: DashboardComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ConsoleRoutingModule { }
