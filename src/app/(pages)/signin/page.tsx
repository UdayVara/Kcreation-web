"use client"
import { signInUser } from '@/app/actions/auth/authentication'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { auth } from '../../../../auth'

function Page() {
  const [data,setData] = useState({name:"",email:"",password:""})
  const router = useRouter()
  const handleSubmit = async() => {
    if(data.name.length < 3){
      toast.error("Name Must be of at least 3 letter")
      return 
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(data.email)){
      toast.error("Email Must be valid")
      return 
    }

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/;
    if(!passwordRegex.test(data.password)){
      toast.error("Password must be alphanumeric and between 8 to 16 characters")
      return 
    }

    const res = await signInUser(data)

    if(res.success){
      toast.success("User Signed In")
      router.push("/")
    }else{
      toast.error(res.message || "Internal Server Error")
    }
  }
  
  return (
    <>
        <div className="md:max-w-[600px] px-3 w-full mx-auto my-10">
            <h3 className='text-2xl text-center font-semibold'>Login Or Create</h3>
            <div className='md:max-w-[60%] w-full mt-10 mx-auto flex flex-col gap-8'>
              <div className=' flex flex-col'>
                <h2>Name : </h2>
                <input type="text" className='w-full py-1 px-2 border rounded' onChange={(e)=>{setData({...data,name:e.target.value})}} />
              </div>
              <div className=' flex flex-col'>
                <h2>Email : </h2>
                <input type="email" className='w-full py-1 px-2 border rounded' onChange={(e)=>{setData({...data,email:e.target.value})}}/>
              </div>
              <div className=' flex flex-col'>
                <h2>Password : </h2>
                <input type="text" className='w-full py-1 px-2 border rounded' onChange={(e)=>{setData({...data,password:e.target.value})}} />
              </div>
              <button onClick={handleSubmit} className='bg-primary py-2 text-lg text-white'>Login Or Create</button>
            </div>
        </div>
    </>
  )
}

export default Page