import React from 'react'
import UploadJob from './_component/UploadJob'
import Link from 'next/link'
import { IoArrowBackCircleOutline } from 'react-icons/io5'

const page = () => {
  return (
    <div>
      <Link  className=' font-bold text-3xl left-5 text-blue-950 top-10 ' 
      href ={"/"}> <IoArrowBackCircleOutline /></Link>
      <UploadJob />
    </div>
  )
}

export default page
