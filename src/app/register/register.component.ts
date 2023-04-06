import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { RegisterService } from '../core/services/register/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(private formBuilder:FormBuilder, private registerService:RegisterService,  private toast: HotToastService, private route:Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name:["", [Validators.required, Validators.minLength(10)]],
      email:["", [Validators.required, Validators.email]],
      date:["", [Validators.required]],
      phone:["", [Validators.required, Validators.pattern, Validators.maxLength(12)]],
      password:["",[ Validators.required,Validators.minLength(8)]]
    })
  }

  register(){
    const userData = this.registerForm.getRawValue();
    this.registerService.register(userData.name, userData.email, userData.password)
    .pipe(
      this.toast.observe({
        success:"Registrado com sucesso!",
        loading:"Registrando...",
        error: ({message}) => `${message}`.replace('Firebase:', ''),
      })
    ).subscribe(()=>this.route.navigate(['']));

    this.registerForm.reset();
  }

}
