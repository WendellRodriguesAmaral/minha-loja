import { Component, OnInit } from '@angular/core';
import { Auth, sendPasswordResetEmail } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent implements OnInit {

  submitted: boolean = false;
  resetPassowordForm!:FormGroup;

  constructor(private formBuilder:FormBuilder, private auth: Auth) { }

  ngOnInit(): void {
    this.resetPassowordForm = this.formBuilder.group({
      email:["" , [Validators.required, Validators.email]]
    })
  }

  resetPassword(): void {
    const email = this.resetPassowordForm.get('email')?.value
    from(sendPasswordResetEmail(this.auth,email))
    .subscribe(()=>{
      this.resetPassowordForm.reset();
      this.submitted = true;
    })
  }

}
