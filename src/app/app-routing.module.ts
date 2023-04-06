import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { redirectUnauthorizedTo, redirectLoggedInTo, canActivate } from '@angular/fire/auth-guard';
import { HomeComponent } from './site/home/home.component';

const redirectToLogin = ()=> redirectUnauthorizedTo(['login']);
const redirectToHome = () => redirectLoggedInTo(['/products']);

const routes: Routes = [
 
  {
    path: '',
    loadChildren: () => import('./site/site.module').then(module => module.SiteModule),
    ...canActivate(redirectToLogin)
  },
  {
    path: 'login', component: LoginComponent,
    ...canActivate(redirectToHome)
  },
  {
    path: 'register', component:RegisterComponent,
    ...canActivate(redirectToHome)
  }, 
  {
    path: 'new-password', component: NewPasswordComponent,
    ...canActivate(redirectToHome)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
