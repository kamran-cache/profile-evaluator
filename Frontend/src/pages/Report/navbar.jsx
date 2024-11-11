import React from 'react'
import Weblogo from '../../assets/WebLogo.svg';

const navbar = () => {
  return (
    <div className='flex bg-[#1641F0] justify-center w-[98.9vw] h-[18vh] sticky top-0 z-50'>
        <img src={Weblogo} alt="logo" className='w-[20.7vw] h-[12vh] mt-[3vh]'/>
    </div>
  )
}

export default navbar