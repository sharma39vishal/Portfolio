import React from 'react'
import SingleEduEx from './SingleEduEx'

export default function Education() {
  return (
    <div className='m-4 w-5/6 rounded-md p-4 bg-gray-900'>
       <h1 className='text-[#EEB76B] text-5xl font-bold m-3'>Education</h1> 
       <SingleEduEx image={'/medicapslogo.jpg'} name={"Medi-Caps University, Indore"} address={"A.B. Road, Pigdamber, Rau Indore - 453331"} degree={"Bachelor of Engineering in Computer Science and Business System"} grade={"CGPA : 9.12"}/>
       <SingleEduEx image={'/eps.png'} name={"Eminent Public School, Dhar"} address={"Behind IMA Building Mandu Road, Dhar - 454001"} degree={"Class XII (CBSE) : 88.6%"} grade={"Class X (CBSE) : 80%"}/>
    </div>
  )
}
