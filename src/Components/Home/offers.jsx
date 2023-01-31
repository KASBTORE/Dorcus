import React from 'react'
// import Countdown from './countDown'

function Offers() {
  return (
    <div className='h-[60vh]  lg:w-full w-[567px] md:w-[768px] flex items-center justify-center'>
      <div className="h-full w-full items-center flex  bg-[url('https://images.unsplash.com/photo-1563549054059-bf4ebe2f49d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] bg-center bg-no-repeat bg-cover ">
        <div className="h-[70%] lg:w-[35%] w-[80%] flex lg:ml-40 ml-7 md:ml-10 bg-[#ffff]">
          <div className="h-full w-[50%] items-center flex justify-center">
            <img src="2.jpg" alt="" />
          </div>
          <div className="h-full w-[50%] flex flex-col  justify-evenly">
            <p className='text-gray-400'>HEADPONES, OFFICE</p>
            <p className='font-semibold'>Denon AH-D7100 Music ManiacHeadphones</p>
            <p>250,000 RWF</p>
            <p className="text-red-500">Hurry up! Offer ends in:</p>
            <div class="deals-countdown deals-countdown-2 mb-25">
                              <div className ="countdown-inner" data-countdown="" data-date="Mar 02 2022 20:20:22">
                                  <ul>
                                      <li><span data-days="">4</span> Days</li>
                                      <li><span data-hours="">1</span> Hours</li>
                                      <li><span data-minutes="">29</span> min</li>
                                      <li><span data-seconds="">40</span> sec</li>
                                  </ul>
                              </div>
                          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Offers