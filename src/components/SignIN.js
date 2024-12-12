import React, { useState } from 'react'

const SignIN = () => {
    const [signIn,setsignIn]=useState(true);
  return (
    <div  className='relative  h-[500px] bg-black  mt-10 pt-10 ml-[600px] text-white w-[400px] '>
    <div className=' ml-10 cursor-pointer'>
        <h1 className='  text-4xl font-bold text-white '> {signIn? "sign in":"sign up"}</h1>
        {signIn==false && <div><input  className='mt-9 w-80 h-12 bg-gray-900 rounded-sm pl-4 text-black' placeholder='enter name '/></div>}
        <div><input  className='mt-5 w-80 h-12 bg-gray-900 rounded-sm pl-4 text-black ' placeholder='Email '/></div>
        <div><input className='mt-5 w-80 h-12 bg-gray-900 rounded-sm pl-4 text-black ' placeholder='Password'/></div>
        <div className='mt-5 w-80 h-12 bg-[#C11119] rounded-sm pl-4 text-center text-lg pt-2 font-bold' >{signIn? "sign in":"sign up"}</div>
      

          {
            signIn ? ( <div className='mt-32 flex gap-2'> <p className='text-gray-300'>New to Netflix? </p>
                <p onClick={()=>{
                    setsignIn(!signIn)
                }}>Sign up now.</p>
                </div>):( <div className='mt-20 flex gap-2'> 
                <p onClick={()=>{
                    setsignIn(!signIn)
                }}>Sign in now.</p>
                </div>)
          }
      
      
    </div>
    </div>
  )
}

export default SignIN
