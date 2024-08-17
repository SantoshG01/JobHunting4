// app/page.tsx
"use client";
import Link from 'next/link';
import Navbar from './Components/Navbar';

const Page = () => {
  return (
    <div className='h-screen flex flex-col gap-28 w-full overflow-x-hidden'>
      <Navbar />
      <div className='flex flex-col items-center gap-2 font-bold mt-10 mb-10 px-4 text-center'>
        <h1 className='text-2xl lg:text-4xl text-green-500'>Welcome to JobHunting</h1>
        <h3 className='text-l lg:text-xl text-blue-900'>"Connecting Talent With Opportunity"</h3>
      </div>
      <div className='flex flex-col justify-around items-center gap-6 lg:flex-row mt-8 w-full px-4 lg:px-0'>
        <Link href="/LogIn" className='border-2 bg-green-500 text-white w-full max-w-[300px] lg:w-[190px] p-3 rounded-lg text-center'>Login</Link>
        <Link href="/Register" className='border-2 bg-blue-950 text-white w-full max-w-[300px] lg:w-[190px] p-3 rounded-lg text-center'>Register</Link>
        <Link href="/user/jobapply" className='border-2 bg-green-500 text-white w-full max-w-[300px] lg:w-[190px] p-3 rounded-lg text-center'>Click to apply for a job</Link>
        <Link href="/client/jobupload" className='border-2 bg-blue-950 text-white w-full max-w-[300px] lg:w-[190px] p-[13px] rounded-lg text-center'>Click to upload a job</Link>
      </div>
    </div>
  );
};

export default Page;
