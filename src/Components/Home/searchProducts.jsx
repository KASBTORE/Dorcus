import React from 'react'
import LikeButton from './likeButton';
// import { FaRegHeart } from "react-icons/fa";
import {RxDesktop } from "react-icons/rx";


function SearchProducts() {
    const Products=[
        {
         category:"ACCESSORIES",
         arrow:<RxDesktop/>,
         like:<LikeButton/>,
         name:'Apple Watch Serie 7',
         image:'http://localhost/kabstore-main/kabstore-main/catalog/products/afd24982ea46e354275a7c2c35de9a8c1ff4af41a2.jpeg',
         price:'RWF 300,000',
        },
           {
         category:"ACCESSORIES",
         arrow:<RxDesktop/>,
         like:<LikeButton/>,
         name:'Apple Watch Serie 7',
         image:'http://localhost/kabstore-main/kabstore-main/catalog/products/afd24982ea46e354275a7c2c35de9a8c1ff4af41a2.jpeg',
         price:'RWF 300,000',
        },
           {
         category:"ACCESSORIES",
         arrow:<RxDesktop/>,
         like:<LikeButton/>,
         name:'Apple Watch Serie 7',
         image:'http://localhost/kabstore-main/kabstore-main/catalog/products/afd24982ea46e354275a7c2c35de9a8c1ff4af41a2.jpeg',
         price:'RWF 300,000',
        },
           {
         category:"ACCESSORIES",
         arrow:<RxDesktop/>,
         like:<LikeButton/>,
         name:'Apple Watch Serie 7',
         image:'http://localhost/kabstore-main/kabstore-main/catalog/products/afd24982ea46e354275a7c2c35de9a8c1ff4af41a2.jpeg',
         price:'RWF 300,000',
        },
      
   
        
      
          
    ]
  return (
    <div className='h-full w-full flex justify-evenly items-center border-t-2 border-[#7777] overflow-x-scroll lg:overflow-auto '>
        { 
        Products.map((product=>{
            return (
               <div className="h-[75%] lg:w-[20%] w-[68%] border-r-2 border-[#7777] ">
                <div className="h-full lg:w-full w-[250px] md:w-full  flex flex-col justify-center items-center  ">  
                <div className=" w-full flex justify-between ">
                    <p>{product.category}</p>
                    <div className="flex">
                        <p className='mr-1'>{product.like}</p>
                    </div>
                    
                </div>
                <div className="h- full w-full">
                  <img src={product.image} alt="" />
                <p className='font-semibold'>{product.name}</p>
                <p>{product.price}</p>
                </div>
                
               </div></div>
              
            )
    }))}
    </div>
  )
}

export default SearchProducts