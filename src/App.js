import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Imessage from './components/Imessage';
import Login from './components/Login';
import {login, logout, selectUser} from './features/userSlice';
import { auth } from './firebase';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if(authUser){
        dispatch(login({
          uid: authUser.uid,
          photoUrl: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName
        }))
      } else{
        dispatch(logout())
      }
      console.log(authUser);
    })
  }, [dispatch])

  return (
    <div className="App">
      {
        user ? (<Imessage />) : (<Login/>)
      }
      
    </div>
  );
}

export default App;
