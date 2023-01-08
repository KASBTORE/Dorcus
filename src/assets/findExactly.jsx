import React from 'react'
import FindIcons from './findIcons'
import SearchButton from './searchButton'
import SearchProducts from './searchProducts'
function FindExactly() {
  return (
    <div className="h-screen w-full flex flex-col">
        <div className="flex h-[30%] sm:h-[50%] w-full justify-evenly">
        <div className="flex flex-col w-[20%] justify-center items-center ">
            <h1 className="text-black font-bold text-4xl">Find Exactly What <br /> You Need </h1>
            <p className="text-[#888888] mt-4">KABSTORE is World’s largest otd online <br />
                marketplace the connecting buyers <br />
                with suppliers.</p>
        </div>
        <div className="flex  justify-evenly w-[55%] items-center  sm:overflow-x-scroll">
            <FindIcons></FindIcons>
        </div>
        </div>
        <div className="flex h-[55%] w-full justify-center ">
          <div className="flex flex-col h-full w-[78%] border-2 border-[#7777]  ">
          <div className="h-[13%] w-full">
            <SearchButton></SearchButton>
          </div>
        <div className="h-[87%] w-full sm:">
          <SearchProducts></SearchProducts>
        </div>
        </div>
       
        </div>
    </div>
  )
}

export default FindExactly