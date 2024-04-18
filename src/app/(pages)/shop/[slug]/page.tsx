"use client"

import { getProductById } from "@/app/actions/product/product"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"


export default function Page({ params }: { params: { slug: string } }) {
    const [product,setProduct] = useState<any>()
    const getProduct = async() => {
        const res = await getProductById({id:params.slug})
        console.log(JSON.parse(res.product || ""))
        if(res.success){
            setProduct(JSON.parse(res?.product || ""))
        }else{
            toast.error("Invalid Product ID.")
        }
    }

    useEffect(()=>{
        getProduct()
    },[])

    
    return <>
        <div className="container py-10 pb-16">
            <div className="w-full grid grid-cols-12 lg:gap-14 md:gap-10 gap-0">
                <div className=" lg:col-span-5 col-span-12">
                    <img src={product?._doc?.image ? product?._doc?.image : "https://images.pexels.com/photos/989960/pexels-photo-989960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="" className="h-[60vh] w-auto block mx-auto"/>
                </div>
                <div className="lg:col-span-6 col-span-12 lg:mt-0 mt-10">
                    <h4 className="text-2xl font-semibold">{product?._doc?.name}</h4>
                    <h5 className="text-lg">
                        Category {product?.categoryName}
                    </h5>

                   
                    <h5>Description : {product?._doc?.description}</h5>
                    <h3 className="text-xl mt-4">
                        Price : {Math.floor(product?._doc?.price - (product?._doc?.discount*product?._doc?.price) / 100)} Rs.
                    </h3>
                    <button className="btn-primary mt-3 bg-primary py-2 px-3 rounded text-white text-lg" onClick={()=>{window.open("https://www.instagram.com/its_krupalijethva","_blank")}}>
                        DM to Order
                    </button>
                </div>
            </div>
        </div>
    </>
  }