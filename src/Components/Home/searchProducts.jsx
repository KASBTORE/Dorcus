import React, { useState, useEffect } from 'react'
import LikeButton from './likeButton';
import {RxDesktop } from "react-icons/rx";
import axios from 'axios'

function SearchProducts() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('https://kabstore.onrender.com/api-docs/#/Product/getproduct_all')
      .then(res => setProducts(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className='h-full w-full flex justify-evenly items-center border-t-2 border-[#7777] overflow-x-scroll lg:overflow-auto '>
      { 
        products.map((product) => (
          <div className="h-[75%] lg:w-[20%] w-[68%] border-r-2 border-[#7777] ">
            <div className="h-full lg:w-full w-[250px] md:w-full  flex flex-col justify-center items-center  ">  
              <div className=" w-full flex justify-between ">
                <p>{product.category}</p>
                <div className="flex">
                  <p className='mr-1'><LikeButton/></p>
                </div>
              </div>
              <div className="h- full w-full">
                <img src={product.image} alt="" />
                <p className='font-semibold'>{product.name}</p>
                <p>{product.price}</p>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default SearchProducts
