import React from 'react';
import { AppstoreOutlined, DashOutlined, HomeOutlined, MailOutlined, PoweroffOutlined, ProfileOutlined, SettingOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { Flex, Menu } from 'antd';
import { Routes, Route, useNavigate } from "react-router-dom";
import Dashboard from './components/Dashboard'
import Dashboardd from './components/Dashboardd'
import Login from './components/Login';
import Registration from './components/Registration';
import { useEffect, useState } from 'react';
import { isUserLoggedIn} from './components/authServiceApi';

const App = () => {

  const [isSignIn,setIsSignIn] =useState(isUserLoggedIn());

  useEffect(()=>{},[isSignIn])
 
  return (
    <div style={
      {
        display:'flex',
        flexDirection:"column",
        flex:1,
        height:"100vh"
  
      }
     }>
     <Header/>
      <div style={
    {
      display:'flex',
      flexDirection:"row",
      flex:1,

    }
   }>
      <SideMenu isSignIn={isSignIn}/>
      <Content isSignIn={isSignIn} setIsSignIn={setIsSignIn}/>
      </div>
      <Footer/>
    </div>
  )
};

function Header(){
  return(
    <div style={
      {
        height:"65px",
        backgroundColor:"gray",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"

      }
    }>Header</div>
  )
}

function Footer(){
  return(
    <div style={
      {
        height:"65px",
        backgroundColor:"gray",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"

      }
    }>Footer</div>
  )
}

function SideMenu({isSignIn}){
  const navigate=useNavigate();
   
  return(

    <Menu onClick={(data)=>{
      
      if(data.key==='signout'){

      }else{
        navigate(data.key)

      }
    }} items={[
      {
        label:"Home",
        key:"/",
        icon:<HomeOutlined/>
      },
      {
        label:"Dashboard",
        key:"/dashboard",
        icon:<DashOutlined/>
      },
      {
        label:"userList",
        icon:<UnorderedListOutlined/>,
        children:[{
          label:"ActiveUsersList",
        key:"/activeUserList"
        },
          {
            label:"InActiveUsersList",
        key:"/inActiveuserList"
          }
        ]
      },
      {
        label:"profile",
        key:"/profile",
        icon:<ProfileOutlined/>
      },
      isSignIn ?{
        label:"signout",
        key:"/signout",
        icon:<PoweroffOutlined/>
      } : {
        label:"signIn",
        key:"/signin",
        icon:<PoweroffOutlined/>
      }
    ]} defaultSelectedKeys={[window.location.pathname]}></Menu>
  );
    
}

function Logout  ({setIsSignIn}) {
  localStorage.clear();
  sessionStorage.clear();
  setIsSignIn(false);

  return (
    <div style={{
    display: 'flex',
    justifyContent: 'center', // Centers horizontally
    alignItems: 'center', // Centers vertically
    height: '50vh', // Full viewport height
    }}>
    <h1 style={
      {
        fontSize: '2rem',
    color: 'orange'
      }
    }>You are logged out. Please login.<a href='/'>Login here</a></h1>
  </div>
  );
  

}

function  Content({isSignIn,setIsSignIn}){

 
  return(
    
    <div style={
      {
       /* , 
        marginRight :"0px",
        padding: "0px", */
        marginLeft : "10px",
        height: "calc(100vh - 112px)", /* 100vh - navbar height (56px) - footer height (56px) */
        overflowY: "auto",
         width: "100%"

      }
    }>
     <Routes>
         <Route path="/" element={<Login/>}/>
         <Route path="/registration" element={<Registration/>}/>
          <Route path="/dashboard" element={ isSignIn ?<Dashboardd/> : <Login/> } ></Route>
          <Route path="/activeUserList" element={ isSignIn? <div><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p><p>Active UserList Content</p></div> : <Login/>} />
          <Route path="/inActiveUserList" element={ isSignIn ?<div>In Active UserList Content</div> : <Login/>} />
          <Route path="/profile" element={ isSignIn ?<div>Profile Content</div> : <Login/>} />
          <Route path="/signout" element={<Logout setIsSignIn={setIsSignIn}/>} />
          <Route path="/signin" element={<Login/>} />
      </Routes>
    </div>
  )
}

export default App;