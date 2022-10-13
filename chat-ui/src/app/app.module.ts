import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatComponent } from './chat/chat.component';
import { SignupComponent } from './signup/signup.component';
import { OAuthInterceptor } from './oauth.interceptor';

const routes: Routes = [
  { path: 'signup', component: SignupComponent},
  { path: 'login', component: LoginComponent},
  { path: '', component: ChatComponent, canActivate: [OAuthInterceptor]},


];
@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    LoginComponent,
    ChatComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [OAuthInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }
