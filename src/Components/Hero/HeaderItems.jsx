import React from 'react'

const HeaderItems = ({name,Icon}) => {
    console.log(name,Icon)
  return (
    <div className='font-semibold font-poppins text-[1.2vw] hover:underline cursor-pointer flex items-center gap-2 '>
      <Icon/>
      <h2>{name}</h2>
    </div>
  )
}

export default HeaderItems
