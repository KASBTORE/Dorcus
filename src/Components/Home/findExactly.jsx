import React, { useState } from 'react'
import FindIcons from './findIcons'
import SearchButton from './searchButton'
import SearchProducts from './searchProducts'

function FindExactly() {


  return (
    <div className="lg:h-screen h-[120vh] lg:w-full w-[570px] md:w-[768px] flex flex-col  ">
        <div className="lg:flex lg:h-[30%]  h-[40%] w-full justify-evenly md:flex md:items-center  ">
        <div className="flex flex-col lg:w-[20%] w-full justify-center  lg:pr-0 pl-7 items-start ">
            <h1 className="text-black font-bold md:font-semibold md:text-2xl lg:text-4xl text-4xl">Find Exactly What <br /> You Need </h1>
            <p className="text-[#888888] mt-4 md:text-sm ">KABSTORE is World’s largest otd online <br />
                marketplace the connecting buyers <br />
                with suppliers.</p>
        </div>
        <div className="flex h-[80%] lg:pb-0 lg: justify-evenly lg:w-[55%] w-full  items-center  ">
             <FindIcons></FindIcons>
        </div>
        </div>
        <div className="flex h-[55%] w-full justify-center ">
          <div className="flex flex-col h-full lg:w-[78%] md:w-[90%] border-2 border-[#7777]  ">
          <div className="h-[12%] w-full">
            <SearchButton/>
          </div>
        <div className="h-[87%] w-full">
          {<SearchProducts />}
        </div>
        </div>
       
        </div>
    </div>
  )
}

export default FindExactly
