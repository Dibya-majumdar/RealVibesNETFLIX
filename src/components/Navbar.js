const Navbar=()=>{


    return (
        // <div className="flex  justify-between  pl-28 pr-32 bg-black bg-gradient-to-bl">
        <div className="flex justify-between pl-28 pr-32 bg-gradient-to-bl from-black to-transparent">

                <img  className="w-48 h-20" src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="netflixlogo"></img>
                <div className="flex gap-2">

               
                <div className="border pt-1 border-white text-white h-9 mt-4 w-32 rounded-md pl-10 text-lg">select</div> 

                <button className="bg-[#C11119] h-9 mt-4 w-20 rounded-md text-white font-semibold">sign in</button>

                </div>
        </div>
    )
}
export default Navbar;