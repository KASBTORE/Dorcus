import React,{useState} from 'react'

function SearchButton() {

const words=[
    {
        head:'Headphones(08)',
    },
    {
        head:'Televison',
    },
    {
        head:'Accessories'
    },
    {
        head:'Smartphone'
    }
]

  return (
    <div className='h-full w-full flex  '>
        <div className='h-full w-full '>{ 
        words.map((word=>{
            return (
               <button
                className="bg-gray-100 h-full lg:w-[25%] w-[50%] md:w-[25%] border-2 border-[#7777] hover:text-black text-[#777777]">{word.head}
               </button>
            )
    }))}</div>
    </div>
  )
}

export default SearchButton