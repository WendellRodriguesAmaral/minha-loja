import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../core/services/auth/auth.service';
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private formBuilder:FormBuilder, private auth:AuthService, private toast: HotToastService, private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:["", [Validators.required, Validators.email]],
      password:["",[ Validators.required,Validators.minLength(8)]]
    })
  }

  login(){
    const {email, password} = this.loginForm.value;
    this.auth.login(email, password).pipe(
      this.toast.observe({
       success:'Login efetuado com sucesso!',
       loading:'Entrando...',
       error:'Email e/ou senha inválidos.'
      })
    ).subscribe(
      ()=>this.router.navigate(['/products']),
      (err)=>{console.log(err)}
    )
    this.loginForm.reset();
  }

}
