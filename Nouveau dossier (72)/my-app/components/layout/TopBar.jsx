"use client"
import React, { useState } from 'react'
import { Search,Add, Logout } from '@mui/icons-material'
import { useRouter } from 'next/navigation'
import { SignOutButton, SignedIn } from '@clerk/nextjs'
import Link from 'next/link'
import Image from 'next/image'
import Aidd from '/public/Aiddd.png'
const TopBar = () => {
    const router=useRouter()
    const [search,setSearch]=useState('')
  return (
    <div className='flex justify-between items-center mt-6'>
     <div className='relative'>
        <input type='text' className='search-bar' placeholder='Search Posts,people,....'value={search} onChange={(e)=>setSearch(e.target.value)}/>
     <Search className='search-icon' onClick={()=>{}}/>
     </div>
     <button className='create-post-btn' onClick={()=>router.push("/create-post")}>
        <Add/><p>Create a Post</p></button>
        <div className='flex gap-3'>
            <SignedIn>
                <SignOutButton>
                    <div className='flex cursor-pointer items-center md:hidden'>
                        <Logout sx={{ color: "white", fontsize: "32px"}}/>
                    
                    </div>
                    
                </SignOutButton>
            </SignedIn>
            <Link href="/">
            <Image src={Aidd} width={50} height={50} className='rounded-full md:hidden '/>
        </Link>
        </div>
        
    </div>
  )
}

export default TopBar
