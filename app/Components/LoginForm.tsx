import Link from 'next/link'
import React from 'react'

const LoginForm = () => {
  return (
    <div className='w-full'>
      <div className='grid place-items-center h-screen'>
        <div className='shadow-lg p-5 rounded-lg border-t-4 border-green-400'>
          <h1 className='text-xl font-bold my-4'>Login</h1>

          <form className='flex flex-col gap-3'>
            <input className='w-full md:w-[400px] lg:w-[400px] border-gray-200 py-2 px-6 bg-zinc-100/40' type="text" placeholder='Email' />
            <input className='w-full md:w-[400px] lg:w-[400px] border-gray-200 py-2 px-6 bg-zinc-100/40' type="password" placeholder='Password' />
            <button className='w-full bg-green-500 text-white font-bold cursor-pointer px-6 py-2'>Login</button>
            <div className='bg-red-500 text-white w-fit text-sm py-2 px-3 rounded-md mt-2'>Error message</div>

            <a href="/Register" className='text-sm mt-3 text-right'>
              Don't have an account? <span className='underline'>Register</span>
            </a>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
