import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyDJtEySbyw3hIPG26m2lWq0cG4yo00NNwc",
  authDomain: "checkers-development.firebaseapp.com",
  projectId: "checkers-development",
  storageBucket: "checkers-development.appspot.com",
  messagingSenderId: "88250140368",
  appId: "1:88250140368:web:237476b795399c2ec680d5"
})

const auth=app.auth()
export { auth }
// console.log(firebase.auth)
//export default auth
export default app