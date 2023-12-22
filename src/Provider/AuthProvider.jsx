import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  signInWithPopup,
  GithubAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import PropTypes from "prop-types";
import app from "../Firebase/firebase.config";

// creating context with export for login and registration
export const AuthContext = createContext(null);

// getting auth from firebase
const auth = getAuth(app);

// Authentication with Google Service
const googleAuth = new GoogleAuthProvider();

// Authentication with Git Service
const gitHubAuth = new GithubAuthProvider();



const AuthProvider = ({ children }) => {
  // Setting states for users and handle loading time
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  // creating new user with email and password function

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signin function with email and password

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // SignOut function

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Update user profile function

  const handleUpdateProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // SignIn with Google Service function
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleAuth);
  };
  // SignIn with Github Service function
  const signInWithGitHub = () => {
    setLoading(true);
    return signInWithPopup(auth, gitHubAuth);
  };

 
  // Observe auth state change

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const AuthData = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    handleUpdateProfile,
    signInWithGoogle,
    signInWithGitHub,
  };
  return (
    <AuthContext.Provider value={AuthData}> {children} </AuthContext.Provider>
  );
};

export default AuthProvider;

// Proptypes declaration
AuthProvider.propTypes = {
  children: PropTypes.node,
};
