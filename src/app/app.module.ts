import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { AuthGuard } from './auth.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//import { routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'userpage', component: UserComponent },
  { path: 'adminpage', component: AdminComponent },

];
 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    AdminComponent
  ],
  imports: [RouterModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
    ],
  providers: [AuthGuard],
  bootstrap: [LoginComponent]
})
export class AppModule { }
