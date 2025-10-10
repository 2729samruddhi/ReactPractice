
import React from 'react'

const ColorExplorer = () => {
  return (
    <div className='absolute'>
      <h1 className='font-bold text-center text-3xl'>color Explorer</h1>
      <div className='mt-5'>
        <input 
        className='w-[355px] p-1 border border-black'
        />
        <button className='p-2 bg-slate-100 rounded-lg ml-4'>🔍</button>
      </div>
    </div>
  )
}

export default ColorExplorer
