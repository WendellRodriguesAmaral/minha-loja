import { SiteComponent } from './site.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivate,  redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';

const redirectToLogin = ()=> redirectUnauthorizedTo(['login']);



const routes: Routes = [
  {
    path: '', component: SiteComponent,
    ...canActivate(redirectToLogin),
    children:[
      {
        path: 'products', component: HomeComponent,
        ...canActivate(redirectToLogin)
      },
      {
        path: 'profile', component: PerfilComponent,
        ...canActivate(redirectToLogin)
      }
    ]
   
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule { }
