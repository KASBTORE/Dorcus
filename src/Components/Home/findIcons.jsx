import React from 'react'
import {RxDesktop } from "react-icons/rx";
import { GiSmartphone } from "react-icons/gi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { RiUsbFill } from "react-icons/ri";
import { SlScreenDesktop } from "react-icons/sl";
import { GiAutoRepair } from "react-icons/gi";
function FindIcons() {

    const Icons=[
        {
         text:"COMPUTER",
         icons:<RxDesktop/>, 
        },
        {
            text:"SMARTPHONES",
            icons:<GiSmartphone/>,
        },
        {
            text:"HEADPHONES",
            icons:<TfiHeadphoneAlt/>,
        },
        {
            text:"ACCESSORIES",
            icons: <RiUsbFill/>,
        },
        {
            text:"TELEVISION",
            icons:<SlScreenDesktop/>,
        },
    
        {
            text:"REPAIR",
            icons: <GiAutoRepair/>,
        }
          
    ]

   

  return (
    <div className="lg:w-full items-center justify-center h-[100%] ">
        <ul className=" flex justify-around w-full h-full overflow-x-scroll lg:overflow-visible items-center ">{ 
        Icons.map((icon=>{
            return (
                <div className="flex flex-col lg:justify-center justify-center items-center md:font-light text-[#565656f4] h-[30%] lg:h-full w-[80px]  lg:scale-[1.9] scale-[2.5] md:scale-[1.5]">
                <li className=" " style={{transform:"scale(1.7)"}}>{icon.icons}</li>
                <li className='scale-[0.5]  pt-5 overflow-x-auto lg:block hidden ' >{icon.text}</li>
                </div>
            )
    }))}
    </ul>
    
    </div>
  )
}

export default FindIcons