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

export function signInUser(emailAddress: string) : void {
  authStore.update((state) => ({
    ...state, userName: emailAddress, emailAddress: emailAddress, isLoggedIn: true
  }))
}

export function signOutUser() : void {
  authStore.reset()
}

