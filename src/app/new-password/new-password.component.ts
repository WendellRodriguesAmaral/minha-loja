import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent implements OnInit {

  submitted: boolean = false;
  resetPassowordForm!:FormGroup;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.resetPassowordForm = this.formBuilder.group({
      email:["" , [Validators.required, Validators.email]]
    })
  }

  resetPassword(): void {
    console.log(this.resetPassowordForm.getRawValue())
    this.resetPassowordForm.reset();
    this.submitted = true;
  }

}
