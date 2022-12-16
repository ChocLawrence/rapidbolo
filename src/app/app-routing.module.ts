import { NgModule } from "@angular/core";
import { AuthGuard } from "./core/auth.guard";
import { AdminAuthGuard } from "./core/admin-auth.guard";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ContactComponent } from "./components/contact/contact.component";
import { PasswordResetComponent } from "./components/password-reset/password-reset.component";
import { SignupComponent } from "./components/signup/signup.component";
import { LoginComponent } from "./components/login/login.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { ConsoleModule } from "./console/console.module";
import { VerifyEmailComponent } from "./components/verify-email/verify-email.component";
import { FaqsComponent } from "./components/faqs/faqs.component";
import { TermsComponent } from "./components/terms/terms.component";
import { ComingSoonComponent } from "./components/coming-soon/coming-soon.component";

const routes: Routes = [
  {
    path: "console",
    loadChildren: () => {
      return ConsoleModule;
    },
    //canActivate: [AdminAuthGuard],
  },
  {
    path: "",
    children: [{ path: "", component: HomeComponent }],
  },
  {
    path: "contact",
    children: [{ path: "", component: ContactComponent }],
  },
  {
    path: "terms",
    children: [{ path: "", component: TermsComponent }],
  },
  {
    path: "faqs",
    children: [{ path: "", component: FaqsComponent }],
  },
  {
    path: "login",
    children: [{ path: "", component: LoginComponent }],
  },
  {
    path: "signup",
    children: [{ path: "", component: SignupComponent }],
  },
  {
    path: "password-reset",
    children: [
      { path: "", component: PasswordResetComponent },
      { path: "change/:id", component: PasswordResetComponent },
    ],
  },
  {
    path: "verify-email",
    children: [{ path: "", component: VerifyEmailComponent }],
  },
  { path: "404", component: PageNotFoundComponent },
  { path: "**", redirectTo: "404" },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: "enabled",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
