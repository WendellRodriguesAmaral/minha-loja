import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { SiteComponent } from './site.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from '../shared/menu/menu.component';
import { MatIconModule } from '@angular/material/icon';
import { PointerDirective } from '../shared/pointer/pointer.directive';
import { PerfilComponent } from './perfil/perfil.component';


@NgModule({
  declarations: [
    SiteComponent,
    HomeComponent,
    SiteComponent,
    MenuComponent,
    PointerDirective,
    PerfilComponent
    
  ],
  imports: [
    CommonModule,
    SiteRoutingModule,
    MatIconModule,

  ]
})
export class SiteModule { }
