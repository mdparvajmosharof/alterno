import PropTypes from "prop-types";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../Firebase/firebase.config";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (name, photo_url) => {
    console.log("name33", name, photo_url);
    
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo_url,
    });
  };

  const LogInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const githubLogIn = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("current user: ", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    name: "Md. Parvaj Mosharof",
    loading,
    user,
    createUser,
    LogInUser,
    logOut,
    googleLogIn,
    githubLogIn,
    updateUserProfile,
  };

  const [data, dataSet] = useState({});

  //   const dataSet = {
  //     name: "ashraful",
  //   };

  console.log("data58", data);
  return (
    <AuthContext.Provider value={{ authInfo, dataSet, data }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
