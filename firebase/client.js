import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBl366R7l2Gj2kQrx_VV6LANejdlXhhVzk",
  authDomain: "upbeat-nectar-296622.firebaseapp.com",
  projectId: "upbeat-nectar-296622",
  storageBucket: "upbeat-nectar-296622.appspot.com",
  messagingSenderId: "949325023105",
  appId: "1:949325023105:web:6273e884e073134b860a80",
  measurementId: "G-HTRM6XX0N6",
};

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

const mapUserFromFirebaseAuthToUser = (user) => {
  const { displayName, email, photoURL } = user;
  return {
    avatar: photoURL,
    username: displayName,
    email,
  };
};

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = mapUserFromFirebaseAuthToUser(user);
    onChange(normalizedUser);
  });
};

export const loginWithGithub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider();
  return firebase.auth().signInWithPopup(githubProvider);
};
