import {resetAuthStore, setUser} from "../repositories/auth.repository";
import {Injectable} from "@angular/core";
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private readonly auth: Auth
  ) { }

  public signInAutomatic() : any {
    return this.auth.onAuthStateChanged(result => {
      if (result) {
        setUser(result.email)
      }
    })
  }

  public login(emailAddress: string, password: string) : any {
    return signInWithEmailAndPassword(this.auth, emailAddress, password)
      .then((userCredentials) => {
        setUser(userCredentials.user.email)
        console.log(userCredentials.user.refreshToken)
      })
      .catch((error) => {
        alert(error)
      } );
  }

  public register(emailAddress: string, password: string) : any {
    return createUserWithEmailAndPassword(this. auth, emailAddress, password)
      .then((userCredentials) => {
        setUser(userCredentials.user.email)
      })
      .catch((error) => {
        alert(error)
      } );
  }

  public logout () : Promise<void> {
    return signOut(this.auth)
      .then(resetAuthStore);
  }

  private setRefreshToken(refreshToken: string) : void {
    localStorage.setItem('key', refreshToken)
  }

  private getRefreshToken() : void {
    localStorage.getItem('key')
  }
}
