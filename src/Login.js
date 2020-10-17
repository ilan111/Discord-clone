import React,{Component} from "react";
import {Button} from "@material-ui/core";
import "./Login.css";
import {auth, provider} from './firebase';

function Login() {
    const signIn=()=>{
        auth.signInWithPopup(provider).catch((error)=>alert(error.message));
    };

    return (
        <div className="login">           
        
            <div className="login__logo">
                <img
                    src="https://iconape.com/wp-content/files/jj/247426/svg/247426.svg"
                    alt="Discord"
                />
            </div>

            <Button onClick={signIn}>Sign In</Button>
        </div>
    );
}

export default Login
