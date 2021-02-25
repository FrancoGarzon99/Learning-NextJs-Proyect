import firebaseApp from 'firebase/app';
import 'firebase/auth';

const Config = {
  apiKey: 'AIzaSyDBwtwMFqG6JMIS3Y_MC5_yUieUChLuEgU',
  authDomain: 'twittertodevsproyectlearning.firebaseapp.com',
  projectId: 'twittertodevsproyectlearning',
  storageBucket: 'twittertodevsproyectlearning.appspot.com',
  messagingSenderId: '1019929575021',
  appId: '1:1019929575021:web:c20913fe6039a23d9d0964',
  measurementId: 'G-78RPX76E33',
};
// Initial app Firebase
!firebaseApp.apps.length && firebaseApp.initializeApp(Config);

// Github Auth
export const loginWithGithub = () => {
  const gitHubProvider = new firebaseApp.auth.GithubAuthProvider();
  return firebaseApp
    .auth()
    .signInWithPopup(gitHubProvider)
    .catch((error) => console.log(error, 'error Client Firebase Github'));
};
// Google Auth
export const loginWithGoogle = () => {
  const googleProvider = new firebaseApp.auth.GoogleAuthProvider();
  return firebaseApp
    .auth()
    .signInWithPopup(googleProvider)
    .catch((error) => console.log(error, 'error Client Firebase Google'));
};

// User loguer
const MapUserFromFirebaseAuth = (user) => {
  const { displayName, photoURL, email } = user;
  return {
    username: displayName,
    avatar: photoURL,
    email: email,
  };
};

// Function auth/notAuth
export const OnAuthStateChanged = (onchange) => {
  return firebaseApp.auth().onAuthStateChanged((user) => {
    const normalizeUser = user ? MapUserFromFirebaseAuth(user) : null;
    onchange(normalizeUser);
  });
};
