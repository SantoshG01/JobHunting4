import React from 'react'
import Link from 'next/link'
import UploadJob from './UploadJob'

const page = () => {
  return (
    <div>
      <Link href ="page" className='border-2 bg-slate-500 text-white w-fit p-2 relative top-16 rounded-lg'>Back</Link>
      <UploadJob />
    </div>
  )
}

export default page
