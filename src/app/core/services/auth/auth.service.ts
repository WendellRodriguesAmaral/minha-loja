import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth:Auth) { }

  login(email:string, password:string) {
   return from(signInWithEmailAndPassword(this.auth, email,password)); //from converte o retorno para observable
  }

  logout(){
    return from(this.auth.signOut());
  }
}
