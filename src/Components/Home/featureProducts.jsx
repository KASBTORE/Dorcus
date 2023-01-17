import React from 'react'
import Buttons from './buttons'
import SearchProducts from './searchProducts'


function FeatureProducts() {
  return (
    <div className='lg:h-[120vh] h-[250vh] md:h-[150vh] lg:w-full w-[567px] md:w-[768px] flex flex-col justify-around  '>
        <div className="h-[40%] md:h-[40%]   w-full lg:flex md:flex md:flex-col lg:flex-row lg:justify-center items-center justify-center  md:justify-around">
       <div className=" lg:h-[70%] h-[30%] md:h-[40%] flex items-center md:flex  md:justify-center lg:w-[20%] w-[567px] md:w-[90%] bg-[url(https://images.unsplash.com/photo-1616353329366-b5546ca70b1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)] bg-center bg-no-repeat bg-cover">
        <Buttons text={"Smart Watch"}></Buttons>
        </div>
        <div className="lg:w-[60%] lg:h-[70%] h-[70%] md:h-[40%] md:w-[90%]  flex flex-col justify-center  ">
        <div className="w-full flex justify-between">
            <p className='lg:text-4xl md:text-3xl font-bold pl-7'>Featured Products</p>
           <div className=" flex pr-10">
            <button className='pl-5'>16% OFF</button>
            <button className='pl-5'>25% OFF</button>
            <button className='pl-5'>33% OFF</button>
           </div> 
        </div>
        <div className="">
          <SearchProducts></SearchProducts>
        </div>
            
        </div> 
        </div>

        <div className="lg:h-[45%]  w-full h-[50%]  flex-col lg:flex-row flex items-center justify-center ">
            <div className="h-full lg:w-[42%] w-full  bg-[url(http://localhost/kabstore-main/kabstore-main/assets/img/banner/banner-2-1.jpg)] scale-90 flex flex-col justify-center  ">
            <h1 className="text-5xl text-white font-semibold ml-20 mt-2 "  >EARBURDS</h1>
          <p className="text-[#d9d9d9] font-normal ml-20 mt-16 text-lg ">KABSTORE is World's largest otd online marketpalce <br /> the connectin buyers with suppliers.</p>
          <Buttons text={"Purchase it"}></Buttons>
            </div>
            <div className="h-full lg:w-[42%] w-full bg-[url(http://localhost/kabstore-main/kabstore-main/assets/img/banner/banner-2-2.jpg)] scale-90 flex flex-col justify-center ">
            <h1 className="text-5xl text-white font-semibold ml-20 mt-2 "  >MONITORS</h1>
          <p className="text-[#d9d9d9] font-normal ml-20 mt-16 text-lg ">KABSTORE is World's largest otd online marketpalce <br /> the connectin buyers with suppliers.</p>
          <Buttons text={"SHOP NOW"}></Buttons>
            </div>
        </div>
    </div>
  )
}

export default FeatureProducts