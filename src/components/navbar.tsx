import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'

export const Navbar = () => {
 return (
  <div className='flex items-center justify-between p-5 shadow-sm border-b-[1px]'>
   <Image src='/logo.png' alt='Logo' width={150} height={100} />
   <div className='hidden md:flex gap-5'>
    <h2 className='hover:bg-blue-500 px-3 cursor-pointer p-2 rounded-full hover:text-white'>
     Home
    </h2>
    <h2 className='hover:bg-blue-500 px-3 cursor-pointer p-2 rounded-full hover:text-white'>
     History
    </h2>
    <h2 className='hover:bg-blue-500 px-3 cursor-pointer p-2 rounded-full hover:text-white'>
     Contact Us
    </h2>
   </div>
   <UserButton />
  </div>
 )
}
