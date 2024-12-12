import React from 'react'

const UnpaidMiddleDiv = () => {
  return (
    <div>
         <div  className='relative    mt-40  text-white text-center '>
      <h1 className='font-bold text-6xl text-center leading-[80px]'>Unlimited movies,<br></br> TV shows and more</h1>
        <p className='mt-3 text-lg'>Starts at ₹149. Cancel at any time.</p>
        <p className='mt-3 text-lg'>Ready to watch? Enter your email to create or restart your membership.</p>
        <div className='flex gap-4 ml-[460px] mt-2 rounded-md font-bold text-xl'>
            <input className='w-[400px] h-[55px] rounded-md pl-10' placeholder='Email Adress'></input>
            <button className='w-48 bg-[#C11119] rounded-md'>Get started</button>
        </div>
        </div>
    </div>
  )
}

export default UnpaidMiddleDiv
