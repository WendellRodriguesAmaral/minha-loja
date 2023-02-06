import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(private formBuilder:FormBuilder) { }

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
    console.log(this.registerForm.getRawValue());
    this.registerForm.reset();
  }

}
