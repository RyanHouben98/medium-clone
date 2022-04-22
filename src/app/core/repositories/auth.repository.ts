import {Injectable} from "@angular/core";
import {createStore, select, withProps} from "@ngneat/elf";
import {state} from "@angular/animations";

const authStore = createStore(
  { name: 'auth' },
  withProps({
    name: null,
    emailAddress: null,
    isLoggedIn: false
  })
);

export const user$ = authStore.pipe(select((state) => state));
export const isLoggedIn$ = authStore.pipe(select((state) => state.isLoggedIn));

@Injectable({
  providedIn: 'root'
})
export class AuthRepository {
  signInUser(name: string, emailAddress: string) : void {
    authStore.update((state) => ({
      ...state, name: name, emailAddress: emailAddress, isLoggedIn: true
    }))
  }

  signOutUser() : void {
    authStore.update((state) => ({
      ...state, name: null, emailAddress: null, isLoggedIn: false
    }))
  }
}
