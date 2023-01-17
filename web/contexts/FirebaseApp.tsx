import { atom, useRecoilState } from 'recoil'
import { FirebaseApp } from 'firebase/app'
import { initializeFirebaseApp } from '@/libs/firebase/initialization'

export const firebaseApp = atom<FirebaseApp>({
  key: 'firebaseApp',
  default: initializeFirebaseApp(),
})

export const useFirebaseApp = () => {
  const [app, setFirebaseApp] = useRecoilState(firebaseApp)
  return { app, setFirebaseApp }
}
