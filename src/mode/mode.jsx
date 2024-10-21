
import React from 'react'
import "../mode/mode.css"
import { MdNightlight, MdSunny } from 'react-icons/md'
import { BiMoon } from 'react-icons/bi'
import { BsMoon } from 'react-icons/bs'




function Mode() {
    const switchTheme =(e) =>{
        if(e.target.checked){

            document.querySelector('body').setAttribute('data-theme','light')
        }

    
    else{
        document.querySelector('body').setAttribute('data-theme','dark')

    }
}


  return (
    <>
      <div className=" wapper  md:h-[620vh] h-[925vh]   ">
        <label className="switch z-10 md:bottom-[4.5vh] bottom-[-1vh] md:right-[25vw] right-[5vw]
         ">
          <input type="checkbox" onChange={switchTheme} />
          <span className="slider round flex justify-around items-center  ">
            <MdSunny className="text-yellow-400  "  />
            <MdNightlight  className='text-black '/>
          
          </span>
        </label>
      </div>
    </>
  );
}

export default Mode









