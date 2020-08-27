import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { GlobalStyles } from "./global-styles";
import { FirebaseContext } from "./context/firebase";

const config = {
  apiKey: "AIzaSyAB1AXNSz8-1AvZR5bj7Qw-AwIHe7tEl7k",
  authDomain: "netflix-clone-project-ev.firebaseapp.com",
  databaseURL: "https://netflix-clone-project-ev.firebaseio.com",
  projectId: "netflix-clone-project-ev",
  storageBucket: "netflix-clone-project-ev.appspot.com",
  messagingSenderId: "462661540776",
  appId: "1:462661540776:web:58e1c7efe3eb35e7c71b9d",
};

const firebase = window.firebase.initializeApp(config);

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase: window.firebase }}>
    <GlobalStyles />
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
