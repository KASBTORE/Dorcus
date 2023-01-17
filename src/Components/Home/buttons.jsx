import React from 'react'
import {FiChevronRight} from "react-icons/fi";


function Buttons({text}) {

  return (    
        <button className="w-40 h-12 border md:mt-11 border-white md:scale-90 text-white font-bold ml-20  mt-16 hover:bg-white hover:text-black hover:transition hover:duration-700">{text}</button>
  )
}

export default Buttons