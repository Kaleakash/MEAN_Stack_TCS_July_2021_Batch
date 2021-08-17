import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

// routing navigation rules 
// http://localhost:4200

const routes: Routes = [
 {path:"aboutus",component:AboutUsComponent},
 {path:"contactus",component:ContactUsComponent},
 {path:"login",component:LoginComponent},
 {path:"",redirectTo:"login",pathMatch:"full"},
 {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
