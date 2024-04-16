"use client"
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { Textarea } from "@/components/ui/textarea"

function Page() {
    const [data,setData] = useState({name:"",subject:"",description:""})
  return (
    <>
    <div className="container py-5 pb-10">

        <div className="grid grid-cols-12 md:gap-14">
            <div className="md:col-span-6 col-span-12 flex flex-col gap-5">
                <h4 className='text-2xl font-semibold'>Contact</h4>
                <Input placeholder='Name' />
                <Input placeholder='Subject' />
                <Textarea placeholder='Description' />
            <button className='bg-primary text-white py-2 px-4 rounded'>Submit</button>
            </div>
            <div className="col-span-6 md:block hidden"><img src='/Images/contact.svg' className='block mx-auto h-[70vh] w-auto' /></div>
        </div>
    </div>
    </>
  )
}

export default Page