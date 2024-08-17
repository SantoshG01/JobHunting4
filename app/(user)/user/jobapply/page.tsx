import React from 'react'
import ApplyJob from './_component/ApplyJob'
import Link from 'next/link'
import { IoArrowBackCircleOutline } from "react-icons/io5";

const page = () => {
  return (
    <div className='relative'>
      <Link  className=' font-bold text-3xl left-5 text-blue-950 top-10 ' 
      href ={"/"}> <IoArrowBackCircleOutline /></Link>
      <ApplyJob />
    </div>
  )
}

export default page
