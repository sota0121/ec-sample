import { atom, useRecoilState } from 'recoil'

export type SignInState = 'signedIn' | 'signedOut' | 'unknown'

export const signInState = atom<SignInState>({
  key: 'signInState',
  default: 'signedOut',
})

export const useSignInState = () => {
  const [state, setSignInState] = useRecoilState(signInState)
  return { state, setSignInState }
}
