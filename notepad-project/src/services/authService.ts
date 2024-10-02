import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebaseConfig';

export const logInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.log('로그인 에러', error);
  }
};
