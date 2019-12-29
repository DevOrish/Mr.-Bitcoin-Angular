import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ContactDetailsComponent } from './contact/contact-details/contact-details.component';
import { ContactEditComponent } from './contact/contact-edit/contact-edit.component';
import { SignInComponent } from './sign-in/sign-in.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  }, 
  {
    path: 'contact',
    component: ContactComponent
  }, 
  {
    path: 'contact/:id',
    component: ContactDetailsComponent
  }, 
  {
    path: 'edit/:id',
    component: ContactEditComponent
  }, 
  {
    path: 'edit',
    component: ContactEditComponent
  }, 
  {
    path: '',
    component: SignInComponent
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
