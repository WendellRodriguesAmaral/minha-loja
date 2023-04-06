import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'ml-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {




  constructor(private authService: AuthService, private route: Router, private toast: HotToastService) { }

  ngOnInit(): void {
  }


  logout() {
    this.authService.logout()
      .subscribe(
        () => {
          this.toast.show('Até breve ...')
          this.route.navigate(['login'])
        }
      )

  }
}