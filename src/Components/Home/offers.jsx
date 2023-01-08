import React from 'react'

function Offers() {
  return (
    <div className='h-[60vh]  w-full '>
      <div className="h-full w-full items-center flex  bg-[url('https://images.unsplash.com/photo-1563549054059-bf4ebe2f49d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] bg-center bg-no-repeat bg-cover ">
        <div className="h-[70%] w-[35%] flex ml-40 bg-[#ffff]">
          <div className="h-full w-[50%] items-center flex justify-center">
            <img src="http://localhost/kabstore-main/kabstore-main/assets/img/product/2.jpg" alt="" />
          </div>
          <div className="h-full w-[50%] flex flex-col  justify-evenly">
            <p>HEADPONES, OFFICE</p>
            <p>Denon AH-D7100 Music ManiacHeadphones</p>
            <p>250,000 RWF</p>
            <p>Hurry up! Offer ends in:</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Offers