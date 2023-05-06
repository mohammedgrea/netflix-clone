import React, { createContext, useContext, useState } from "react";
import { auth } from "../lib/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const AuthContext = createContext();

export function UserAuth() {
  return useContext(AuthContext);
}
export default function AuthenticationContext({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [errorFirebase, setErrorFirebase] = useState();
  function logup(email, password) {
    createUserWithEmailAndPassword(auth, email, password).catch((err) => {
      setErrorFirebase(err.message);
    });
  }

  async function login(email, password) {
    await signInWithEmailAndPassword(auth, email, password).catch((err) => {
      setErrorFirebase(err.message);
    });
  }
  function logout() {
    signOut(auth);
  }

  onAuthStateChanged(auth, (current) => {
    setCurrentUser(current);
  });

  const value = {
    currentUser,
    errorFirebase,
    login,
    logup,
    logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
