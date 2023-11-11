import Image from 'next/image'
import React from 'react'

export default function SingleEduEx(props) {
  return (
    <div className='flex'>
    <Image className='rounded-md m-2 w-1/5' src={props.image} width={100000} height={10000} alt='UCI'/>
    <div className='w-3/5 m-10'>
    <p className='text-[#EEB76B] font-semibold text-2xl '>{props.name}</p>
    <p className='text-[#EEB76B] font-semibold text-xl '>{props.address}</p>
    <p className='text-[#d6b07c]  text-xl '>{props.degree}</p>
    <p className='text-[#d6b07c]  text-xl '>{props.grade}</p>
    </div>
    </div>
  )
}
