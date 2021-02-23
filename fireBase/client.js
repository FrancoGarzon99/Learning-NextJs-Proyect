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
    .then((user) => {
      const { username, profile } = user.additionalUserInfo;
      const userDataAuth = {
        username: username,
        avatar: profile.avatar_url,
        name: profile.name,
        location: profile.location,
      };
      return userDataAuth;
    })
    .catch((error) => console.log(error, 'error Client Firebase Github'));
};
// Google Auth
export const loginWithGoogle = () => {
  const googleProvider = new firebaseApp.auth.TwitterAuthProvider();
  return firebaseApp
    .auth()
    .signInWithPopup(googleProvider)
    .then((response) => {
      const { user } = response;
      const userDataAuth = {
        username: user.displayName,
        avatar: user.photoURL,
        email: user.email,
      };
      return userDataAuth;
    })
    .catch((error) => console.log(error, 'error Client Firebase Google'));
};

// User loguer
const MapUserFromFirebaseAuth = (user) => {

   const UserGoogle = {
     userName : user.displayName,
     avatar : user.photoURL,
     email : user.email
   }
   const UserGithub = {
    username: user.username,
    avatar: user.avatar_url,
    name: user.name,
    location: user.location,

   }
    return UserGithub || UserGoogle
}

export const OnAuthStateChanged = (onchange) => {
  return firebaseApp
  .auth()
  .onAuthStateChanged(user => {
    const normalizeUser = MapUserFromFirebaseAuth(user)
    onchange(normalizeUser)
  })
}