import { createContext, useContext, useEffect, useState } from 'react';
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from 'firebase/auth';
import { auth } from '../config/firebase';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signup = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential.user);
      })
      .catch((error) => {
        alert(error.code);
        alert(error.message);
      });
  };

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential.user);
      })
      .catch((error) => {
        alert(error.code);
        alert(error.message);
      });
  };
  const resetPassword = (email) => {
    console.log(email);
    return sendPasswordResetEmail(auth, email).then((a) => {
      alert('Password reset email sent');
    });
  };
  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, login, resetPassword, signup, logout }}
    >
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
