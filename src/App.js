import React, { useEffect } from 'react';
import './App.css';
import { login, selectUser, logout } from './features/userSlice';
import Vmessage from './Vmessage';
import {useDispatch, useSelector } from "react-redux";
import Login from './Login';
import { auth } from './firebase';

function App() {
  
  const user = useSelector(selectUser);
  const dispatch = useDispatch();


  useEffect(() => {
    auth.onAuthStateChanged(authUser =>{
      if (authUser) {

        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            display: authUser.displayName,

          })
        );

      } else{
        dispatch(logout());

      }
    })
  }, [dispatch]);
  return (
    <div className="app">
    {user ? <Vmessage/>:<Login/>}
   
    </div>
  );
}

export default App;
