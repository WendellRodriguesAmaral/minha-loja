import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../core/services/auth/auth.service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private formBuilder:FormBuilder, private auth:AuthService, private toast: HotToastService) { }

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
      ()=>{console.log("deu certo")},
      (err)=>{console.log(err)}
    )
    this.loginForm.reset();
  }

}
