import { Routes } from "@angular/router";
import { RegisterComponent } from "../auth/register/register.component";
import { LoginComponent } from "../auth/login/login.component";

export const AUTH_ROUTES: Routes = [
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent }
];