import Link from 'next/link';
import React from 'react';

const Register = () => {
  return (
    <div className='flex justify-center items-center h-screen px-4'>
      <div className='shadow-lg p-5 rounded-lg border-t-4 border-green-400 w-full max-w-lg'>
        <h1 className='text-xl font-bold my-4 text-center'>Register</h1>

        <form className='flex flex-col gap-4'>
          <input 
            className='w-full border border-gray-200 py-3 px-4 bg-zinc-100/40 rounded-md' 
            type="text" 
            placeholder='Full Name' 
          />
          <input 
            className='w-full border border-gray-200 py-3 px-4 bg-zinc-100/40 rounded-md' 
            type="text" 
            placeholder='Email' 
          />
          <input 
            className='w-full border border-gray-200 py-3 px-4 bg-zinc-100/40 rounded-md' 
            type="password" 
            placeholder='Password' 
          />
          <button 
            className='w-full bg-green-500 text-white font-bold cursor-pointer py-3 rounded-lg'>
            Register
          </button>
          <div className='bg-red-500 text-white text-center w-full text-sm py-2 px-3 rounded-md mt-2'>
            Error message
          </div>

          <Link href="/LogIn" className='text-sm mt-3 text-right block'>
            Already have an account? <span className='underline'>Login</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
