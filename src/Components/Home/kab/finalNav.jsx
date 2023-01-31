import React from 'react'
import {FaInstagram} from "react-icons/fa";
import {FaGreaterThan} from "react-icons/fa";
import {BsHeadset} from "react-icons/bs";
import Hover from "./Hover";
import SearchBar from './SearchBar';
import Navbar from './Navbar';

function FinalNav() {
  return (
    <div className='h-full lg:w-full flex lg:flex-col items-center justify-around '>
      <div className="w-full lg:h-[30%]  lg:border-b border-gray-400 flex justify-start items-center">
        <h1 className='lg:bg-black-0 lg:text-md lg:ml-[13rem] text-gray-500 lg:mt-[1rem] collapse lg:visible lg:flex lg:space-x-[1rem]'> <span><BsHeadset/></span> +250 788 458 897</h1>
        <a href="https://www.instagram.com/kabstore_rw/"><div className='vl collapse lg:visible'><FaInstagram className='lg:ml-4  lg:mt-2 collapse lg:visible border-l border-gray-300 h-[30px] text-gray-500 w-[40px] '/></div></a>

    </div>
        
    <div className=" w-full h-[70%]  mr-[4rem]">
    <div className="lg:flex h-full space-x-[1rem]  lg:space-x-[5rem] lg:h-24 h-[1rem] ">
    
    <div className=' absolute  lg:h-[5rem] lg:ml-32  h-[3rem] lg:flex lg:place-content-between flex place-content-around space-x-[8rem] md:space-x-[15rem]'>
     
      <img src="logo-black.png" alt="logo" className='lg:w-[15rem] lg:mt-8 mr-[15rem] ml-[4rem] md:mr-[35rem] lg:mr-[1rem]  w-[12rem]'/>
   
    </div>
    
    <div className='lg:flex  lg:space-x-[3rem]'>
    <div className=' w-[1rem] ml-[24rem]  lg:ml-24rem]'>
    <Hover/>
    </div>
    <SearchBar/>
    <Navbar/>
    </div>
    </div>
    </div>
    

    </div>
  )
}

export default FinalNav