import React from 'react'

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
    <div className='h-full w-full flex sm: '>
        <div className='h-full w-full'>{ 
        words.map((word=>{
            return (
               <button className=" h-full w-[25%] border-2 border-[#7777] hover:text-black text-[#777777]">{word.head}
               </button>
            )
    }))}</div>
    </div>
  )
}

export default SearchButton