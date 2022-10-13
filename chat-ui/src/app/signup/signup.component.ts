import { LoginService } from '../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios'
import { combineLatest, first } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public form!: FormGroup;
  public username: string ='';
  public password: string = '';
  public firstName: string = '';
  public lastName: string = '';
  public email: string = '';
  public isAdmin: boolean = false

  error = ''
  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: '',
      password: '',
      firstName: '',
      lastName:'',
      email: '',
    })
  }

  signUp() {
    
    if(this.username == '' || this.password == '' ||
      this.firstName == '' || this.lastName == '' || this.email == ''){
      this.error = "All the fields are required"
      return
    }
    
    let resBody = {networkId: this.username,
              firstName: this.firstName,
              lastName: this.lastName,
              email: this.email,
              password: this.password,
              isAdmin: this.isAdmin }

    axios.post('http://localhost:3000/user',resBody)
    .then(res => {
    
      this.router.navigate(['login'])
    }).catch(err => {
      console.log(err)
      this.error = "The email has been used"
      return
    })
  }

}
