import { LoginService } from '../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios'
import { combineLatest } from 'rxjs';
import {CookieService} from 'ngx-cookie-service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form!: FormGroup;
  public email: string;
  public password: string;
  error = ''
  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router, private cookieService:CookieService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: '',
      password: ''
    })
  }

  login(){
  
    this.loginService.setUserData(this.form.getRawValue()); 
    axios.post('http://localhost:3000/user/login', { email: this.email, password: this.password })
    .then( res => { 
      if(res.status != 200){ 
        this.error = "The Email is not Correct "
        return
      }
      const user = res.data
      if(user.password != this.password){
        this.error = "The password is not correct"
        return
      }
      this.cookieService.set('chatbotUser', JSON.stringify(res.data)) 
      this.form.reset() 
      this.router.navigate(['']) 
    } )
      .catch(err => { 
        console.log('Error:', err)
        
       }) 
    
  }
}


