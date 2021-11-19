import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initailizeFirebaseAuthentication from "../Pages/Home/Shared/Login/Firebase/Firebase.init";
initailizeFirebaseAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [password, setPassword] = useState('');

    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }


    // Obserb User State Change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, []);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
        if (e.target.value.length < 6) {
            setError("password must be at least 6 characters");
            return;
        } else {
            setPassword(e.target.value);
        }
    };

    const handleUserRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };
    const hanldeUserInfoRegister = (email, method) => {
        fetch("http://localhost:5000/addUser", {
            method: method,
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ email }),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
    };

    const handleUserLogin = (email, password) => {
        // e.preventDefault();
        return signInWithEmailAndPassword(auth, email, password)
        // .then((result) => {
        //     setUser(result.user);
        // })
        // .catch((error) => setError(error.message))
    };


    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setIsLoading(false));
    }


    return {
        user,
        setUser,
        isLoading,
        setIsLoading,
        signInUsingGoogle,
        logOut,
        handleUserRegister,
        handleUserLogin,
        handleEmailChange,
        error,
        email,
        password,
        handlePasswordChange,
        hanldeUserInfoRegister
    }
}
export default useFirebase;