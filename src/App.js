//import logo from './logo.svg';
import './App.css';
// import Login from './authentication/Login';
// import Header from './MyComponents/Header';
// import Test from './components/Test';
 import Footer from './MyComponents/Footer';
import CreateUser from './MyComponents/CreateUser';
import Users from './MyComponents/Users';
import React ,{ useEffect, useState } from 'react';
import Header from './MyComponents/Header';


// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";



function App() {
  let initusers ;
  if(localStorage.getItem('users') === null)
  {
    initusers = [];
  }
  else{
    initusers = JSON.parse(localStorage.getItem('users'));
  }
  const ondelete = (us)=>
  {
    console.log("Im Delete",us);
    setUsers(users.filter((e)=>{
      return e!==us;
    }))
    
  }
  const addUser =(userName,password)=>{
    console.log("User Added Successfully");
    let sno = 1;
    if(users.length !== 0)
     sno =  users[users.length - 1].Sno + 1 ;
    const Myuser = 
    {
      Sno :sno,
      userName : userName,
      password : password
    }
    setUsers([...users,Myuser]);
    console.log("SNo"+sno);
   
   
  }
  const[users , setUsers] = useState(initusers
    // {
    //   Sno:1,
    //   userName:"Kailash",
    //   password:"123",
    // },
    // {
    //   Sno:2,
    //   userName:"KD",
    //   password:"123",
    // }
  );
  useEffect(()=>{
    localStorage.setItem('users',JSON.stringify(users));
   },[users]);
  return (
    

    <>
    
    <Header/>
    <CreateUser addUser={addUser}/>
    <Users users={users} ondelete={ondelete}/>

    {/* <Login chekVar={true}/>  */}
    {/* <Test/>
    <Header title2={4} title3={true}/>*/}

    <Footer/>     
    </>
   
  );
}

export default App;
