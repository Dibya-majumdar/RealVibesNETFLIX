import React, { useState } from 'react'
import Navbar from './Navbar'
import UnpaidMiddleDiv from './UnpaidMiddleDiv'
import SignIN from './SignIN'

const UnpaidUI = () => {
 
  const [sign_in,setsign_in]=useState(false);


  return (
    <div className='bg-black h-[100vh] w-full'>
        <img className=' absolute  h-full w-full opacity-25 bg-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/ce449112-3294-449a-b8d3-c4e1fdd7cff5/web/IN-en-20241202-TRIFECTA-perspective_0acfb303-6291-4ad1-806f-dda785f6295a_large.jpg' alt='image' ></img>
      {/* navbar */}

      <div className='relative    mt-0 '>    
      <div className="flex justify-between pl-28 pr-32 bg-gradient-to-bl from-black to-transparent">

                <img  className="w-48 h-20" src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="netflixlogo"></img>
                <div className="flex gap-2">

               
                <div className="border pt-1 border-white text-white h-9 mt-4 w-32 rounded-md pl-10 text-lg">select</div> 

                <button className="bg-[#C11119] h-9 mt-4 w-20 rounded-md text-white font-semibold" onClick={()=>{
                  setsign_in(!sign_in);
                }}>sign in</button>

                </div>
        </div>

      </div>
        {/* middel text */}
      {/* <div  className='relative  h-[500px] bg-black mt-10 pt-10 ml-[600px] text-white w-[400px]'> */}

{
  sign_in ?  <SignIN/> :<UnpaidMiddleDiv/>
}
      
     
      {/* </div> */}
           

      
     
    </div>
  )
}

export default UnpaidUI
