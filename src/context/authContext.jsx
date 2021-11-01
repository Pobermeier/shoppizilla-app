import { createContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  signOut,
  browserLocalPersistence,
  setPersistence,
  onAuthStateChanged,
} from "@firebase/auth";
import { auth } from "../firebaseConfig";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const history = useHistory();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoading(true);

      if (user) {
        setUser(user);
        history.push("/list");
      } else {
        setUser(null);
        history.push("/");
      }

      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, [history]);

  const login = (username, password) => {
    setPersistence(auth, browserLocalPersistence)
      .then(() => signInWithEmailAndPassword(auth, username, password))
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(`Error #${errorCode}: ${errorMessage}`);
        alert(`${errorMessage}`);
      });
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
