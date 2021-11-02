import { Button } from '@material-ui/core'
import React from 'react'
import "./Login.css"
import {auth,provider} from "./firebase"

function Login() {
    const signIn=()=>{

        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    }
    return (
        <div className="login">
            <div className="login__logo">
            <img
          src="https://www.pgconnects.com/digital/wp-content/uploads/sites/12/2020/09/logo-Discord-600x.jpg"
          alt="Discord Logo"
        />
            </div>
            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
