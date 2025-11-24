"use client";

import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "@/Firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  /* register functionality start */
  const createUserFunction = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  /* register functionality end */

  /* SignInWithPopUp functionality start */
  const popUp = (email, password) => {
    setLoading(true);
    return signInWithPopup(auth, email, password);
  };
  /* SignInWithPopUp functionality end */

  /* login with email, password functionality start */
  const loginWithEmailPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  /* login with email, password functionality end */

  /* signout functionality start */
  const signOutFunction = () => {
    setLoading(true);
    return signOut(auth);
  };
  /* signout functionality end */

  /* Password Reset Email start */
  const sendPasswordLink = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };
  /* Password Reset Email end */

  // unsubscribe
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUserFunction,
    popUp,
    signOutFunction,
    loginWithEmailPassword,
    sendPasswordLink
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
