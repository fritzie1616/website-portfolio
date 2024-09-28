// Import the necessary Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyDV4XyVCvLncy0z5SaQNuWLjeIJFCWiBCE",
  authDomain: "login-2e855.firebaseapp.com",
  projectId: "login-2e855",
  storageBucket: "login-2e855.appspot.com",
  messagingSenderId: "213319157892",
  appId: "1:213319157892:web:52441bf8fc62ffe0125ad1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Set up the Google provider
const provider = new GoogleAuthProvider();

// Add a click event listener to the login button
document.getElementById("google-login").addEventListener("click", () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // The signed-in user information
      const user = result.user;
      console.log("User Info:", user);

      // Redirect to your GitHub profile
      window.location.href = "https://fritzie1616.github.io/website-portfolio/"; // Replace with your GitHub URL
    })
    .catch((error) => {
      console.error("Error during Google Login:", error);
    });
});
