import { Injectable } from '@angular/core';
import { Auth, updateProfile } from '@angular/fire/auth';
import { createUserWithEmailAndPassword } from '@firebase/auth';
import { from } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private auth: Auth) { }

  register(name:string,email: string, password: string){
   return from(createUserWithEmailAndPassword(this.auth, email, password))
    .pipe(switchMap(({user}) => updateProfile(user, {displayName:name})))
  }
}
