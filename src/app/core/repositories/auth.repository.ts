import {Injectable} from "@angular/core";
import {createStore, select, withProps} from "@ngneat/elf";

const authStore = createStore(
  { name: 'auth' },
  withProps({
    userName: null,
    emailAddress: null,
    isLoggedIn: false
  })
);

export const user$ = authStore.pipe(select((state) => state));
export const isLoggedIn$ = authStore.pipe(select((state) => state.isLoggedIn));
export const userName$ = authStore.pipe(select((state) => state.userName))

@Injectable({
  providedIn: 'root'
})
export class AuthRepository {
  signInUser(emailAddress: string) : void {
    authStore.update((state) => ({
      ...state, userName: emailAddress, emailAddress: emailAddress, isLoggedIn: true
    }))
  }

  signOutUser() : void {
    authStore.update((state) => ({
      ...state, userName: null, emailAddress: null, isLoggedIn: false
    }))
  }
}
