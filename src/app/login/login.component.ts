import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router'; 
import { SLogin } from '../login';
import { AuthService } from '../auth.service';
 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  adminmodel: SLogin = { username: "admin", password: "admin123" };
  usermodel: SLogin = { username: "user", password: "user123" };
  loginForm: FormGroup;
  message: string;
  returnUrl: string;
  constructor(private formBuilder: FormBuilder,private router: Router, public authService: AuthService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    }); 
    //this.returnUrl = '/admin';
    this.authService.logout();
  }
  get form() { return this.loginForm.controls; }
  login() {  
    if (this.loginForm.invalid) {
        return;
    }
    else{

    if(this.form.username.value == this.adminmodel.username && this.form.password.value == this.adminmodel.password){
      alert("admin");
        console.log("admin successful"); 
        localStorage.setItem('Keylogin', "true");
        localStorage.setItem('token', this.form.username.value);
        this.router.navigate(['adminpage']);
      } else
      if(this.form.username.value == this.usermodel.username && this.form.password.value == this.usermodel.password){
        alert("user");
        console.log("user successful"); 
        localStorage.setItem('Keylogin', "true");
        localStorage.setItem('token', this.form.username.value);
        this.router.navigate(['userpage']);
        
      }
      else{
        this.message = "Please check your username and password";
      }
    }    
}

}
