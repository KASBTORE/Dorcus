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
    <div className="w-full items-center justify-center h-[40%]">
        <ul className=" flex justify-around w-full h-full">{ 
        Icons.map((icon=>{
            return (
                <div className="flex flex-col justify-around items-center h-full w-[20%]">
                <li className="scale-150" style={{transform:"scale(2.5)"}}>{icon.icons}</li>
                {icon.text}
                </div>
            )
    }))}
    </ul>
    
    </div>
  )
}

export default FindIcons