import { NgModule } from "@angular/core";
import {CommonModule} from '@angular/common'
import {HttpClientModule} from '@angular/common/http'
import { AuthRoutingModule } from "./auth-routing.module";
import { AuthService } from "./auth.service";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { AuthGuard } from "./auth-guard.service";
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms'


@NgModule({
    declarations : [LoginComponent, RegisterComponent],
    imports : [CommonModule ,AuthRoutingModule, HttpClientModule, RouterModule, FormsModule],
    providers : [AuthService, AuthGuard]
})
export class AuthModule {

}