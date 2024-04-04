import React from 'react';
import axios from 'axios';
import {useState, useEffect} from "react" ;
import { Navigate, useNavigate } from 'react-router-dom'; 


const Logout = () => {


  const navigate = useNavigate();
  


   
  
  const handleLogout = async () => {
    //const token = "tarun" ;
    //const username ="hello" ;
    //const values = {username , token};
    
    try {
      const response = await axios.post('https://6662-2401-4900-1cc4-177a-519b-b3ff-8352-4a74.ngrok-free.app/logout', {
       
        token :"tarun",
        username:"hello" 
      } )
      console.log(response.data);
      if (response.data==="Logout Successfull!"){
        navigate("/login");
      }
      
      
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <button className='button' onClick={handleLogout}>Logout</button>
  );
};

export default Logout;