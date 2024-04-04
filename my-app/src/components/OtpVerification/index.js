import './index.css';
import image from "./image2.png"
import image2 from "./image.png"

import React, {useState, useEffect} from "react" ;
import axios from "axios" ;

function OtpVerification() {

    const [data,setData] = useState([]);




  useEffect(()=>{
    axios.post('https://db00-2401-4900-1cc4-9fb2-74fd-852f-2890-9569.ngrok-free.app/logout', {
      username:"hello" ,
      token :"tarun"
    })
    .then(res=> setData(res.data.data))
    .catch(err=> console.log(err))
  },[])
  console.log(data);


  return (
    <div className='flex flex-row gap-0' > 
    <div className='rounded-3xl shadow-md bg-inherit p-2.5 w-2/4'>
<div className='w-auto h-screen rounded-3xl  bg-gradient-to-tr from-purple-700 to-pink-400 '>
  <div className='flex flex-row justify-evenly'>
  <img className='ml-5 mr-52 h-20 w-20' src={image} alt='logo'/>
  <h1 className='text-white mt-9 text-4xl italic ml-9'>AMS</h1>
  
  </div>
    <div className='flex flex-row justify-between'>

        
        <img  className= 'h-96 w-full pb-2.5 ml-0 pl-0 mt-28 pt-20' src={image2} alt='img'/>
        </div>
        </div>
        </div>
    <div className="ml-0 pl-0">
   <h1 className='mt-9 text-center text-4xl font-bold italic mt-5'>OTP Verification</h1>
   <p className='text-lg text-gray-400 font-bold m-10'>Enter Registered Email to generate One Time Password  </p>
   <div className='mr-20'>
    
   <input type="Text"placeholder='Email' className="input" /> 
   </div>
   <button className='button'>Continue</button>
    </div>
    </div>
    
  );
}

export default OtpVerification;