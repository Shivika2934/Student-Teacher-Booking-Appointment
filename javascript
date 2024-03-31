// Initialize Firebase
const firebaseConfig = {
    // Your Firebase config details here
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// User Authentication Module
const authModule = {
    // User login function
    login: (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in successfully, redirect or perform any action
                console.log("User logged in successfully:", userCredential.user);
            })
            .catch((error) => {
                console.error("Login error:", error.message);
            });
    },

    // User registration function
    register: (email, password) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Registered successfully, redirect or perform any action
                console.log("User registered successfully:", userCredential.user);
            })
            .catch((error) => {
                console.error("Registration error:", error.message);
            });
    },

    // User logout function
    logout: () => {
        firebase.auth().signOut()
            .then(() => {
                // Sign-out successful
                console.log("User logged out successfully");
            })
            .catch((error) => {
                console.error("Logout error:", error.message);
            });
    }
};

// User interaction with forms
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = loginForm.email.value;
            const password = loginForm.password.value;
            authModule.login(email, password);
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = registerForm.registerEmail.value;
            const password = registerForm.registerPassword.value;
            authModule.register(email, password);
        });
    }
});
