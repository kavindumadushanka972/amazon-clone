import { Injectable, NgZone } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any;

  constructor(private fbAuth: Auth, private ngZone: NgZone, private router: Router) {
    this.fbAuth.onAuthStateChanged(user => {
      if(user){
        this.userData = user;
        console.log(this.userData.email)
        localStorage.setItem('user', this.userData.email)
      }
    }) 
    if(fbAuth.currentUser){
      console.log(fbAuth.currentUser)
    }
   }

   signIN(email: any, password: any){
    return signInWithEmailAndPassword(this.fbAuth, email, password)
    .then((result)=> {
      this.router.navigate(['/'])
    })
    .catch((error)=> {
      window.alert(error.message)
    })
   }

   signUp(email: any, password: any){
     return createUserWithEmailAndPassword(this.fbAuth, email, password)
     .then((result)=> {
       this.router.navigate(['/'])
       .catch((error) => {
          window.alert(error.message)
       })
     })
   }

   logout(){
     return this.fbAuth.signOut().then(() => {
       localStorage.removeItem('user')
       this.router.navigate(['/login'])
     })
   }

   isLoggedIn(){
     const user = localStorage.getItem('user')
     return user ? true : false;
   }

   getUser(){
     const user = localStorage.getItem('user')
     return user ? user : null;
   }
}
