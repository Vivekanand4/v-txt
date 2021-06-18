import { Button } from '@material-ui/core'
import React from 'react'
import { auth, provider } from './firebase'
import "./Login.css"

function Login() {
   
   const signIn = () =>{
       auth.signInWithPopup(provider).catch((error)=> alert(error.message));
   };
   
   
    return (
        <div className="login">
          <div className="login__logo">
              <img 
                src='https://i.pinimg.com/originals/62/9a/09/629a09e4fe7528f1caab1e77afdeb4f6.png' alt=""></img>
               <div className="login__text"><pre>    Chat Room</pre></div>
          </div>  
              <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
