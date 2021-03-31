import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { Button, Container, Row } from 'react-bootstrap';
import { UserContext } from '../../App';
import GoogleIcon from '../../images/Group 573.png';
import './Login.css';
import { useHistory, useLocation } from 'react-router';

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            const { displayName, email } = result.user;
            const signedInUser = { name: displayName, email }
            setLoggedInUser(signedInUser);
            history.replace(from);
            console.log('signedInUser', signedInUser);
        }).catch(function (error) {
            const errorMessage = error.message;
            console.log('errorMessage', errorMessage);
        });
    }

    return (
        <Container>

            <h1 className="text-center mt-5">Log In Please!</h1>
            <div style={{ justifyContent: 'center' }} className=" py-5 mt-5 d-flex">
                <button
                    className="googleBtn"
                    onClick={handleGoogleSignIn}>
                    <span>
                        <img src={GoogleIcon} alt="" />
                    </span>
                    Continue with Google
                </button>
            </div>
        </Container>
    );
};

export default Login;