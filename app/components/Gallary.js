import Image from 'next/image'
import React from 'react'

export default function Gallary() {
  return (
    <div className='m-4 w-5/6 rounded-md p-4 bg-gray-900'>
      <h1 className='text-[#EEB76B] text-5xl font-bold '>Gallery</h1>
      <div className=' flex flex-wrap'>
      <Image className='m-2'  src="/gallery/linkedin.png"   alt="Picture of the author"   width={500}    height={500} />
      <Image className='m-2'  src="/gallery/leetcode.png"   alt="Picture of the author"   width={500}    height={500} />
      <Image className='m-2'  src="/gallery/github.png"   alt="Picture of the author"   width={500}    height={500} />
      <Image className='m-2'  src="/gallery/codechef-graph.png"   alt="Picture of the author"   width={500}    height={500} />
      <Image className='m-2'  src="/gallery/codechef.png"   alt="Picture of the author"   width={500}    height={500} />
      </div>
    </div>
  )
}
