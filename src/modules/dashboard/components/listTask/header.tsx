import React from 'react'

function Header({text, bg, count}:any) {
  return (
    <div className={`${bg} flex items-center h-12 pl-4 rounded-md uppercase text-sm text-white`}>
        {text}{" "}
        <div className='ml-2 bg-white w-5 h-5 text-black rounded-full flex items-center justify-center'>
         {count}
        </div>
    </div>
  )
}

export default Header