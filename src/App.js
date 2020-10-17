import React , {useEffect} from 'react';
// import { Counter } from './features/counter/Counter';
import {useSelector,useDispatch} from "react-redux";
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import {login, selectUser,logout} from "./features/userSlice";
import Login from './Login';
import { auth } from './firebase';



function App() {
  const dispatch=useDispatch();
  const user= useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
          dispatch(
            login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
      );
     } else{
       //the user is logged out
       dispatch(logout());
      }
    });
  }, [dispatch]);
  return (
    <div className="app">   
      {user?(
        <>
        <Sidebar/>
        <Chat/>
        </>
      ):(
        <Login/>
      )}
    </div>
  );
}

export default App;
