import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "../auth.service";

@Component({
    selector : 'app-login',
    templateUrl : './login.component.html',
    styleUrls : ['./login.component.css']
})
export class LoginComponent {

    constructor(private authService : AuthService) {

    }

    @ViewChild('f') loginForm : NgForm;

    onSubmit() {
        console.log(this.loginForm.value);
        this.authService.sampleLogin().subscribe((res) => {
            console.log(res);
        })
        
    }
}