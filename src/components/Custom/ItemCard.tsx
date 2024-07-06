"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaHeart } from "react-icons/fa6";
import { BsFillSendFill } from "react-icons/bs";
import { useRouter } from "next/navigation";


function ItemCard({id,name,price,discount,image}:{id:string,name:string,price:number,discount:number,image:string}) {
  const [isFav, setFav] = useState<boolean>(false);
  const router = useRouter()
  return (
    <div className="md:w-[280px] w-[150px] lg:w-[350px] lg:h-[400px]  md:h-[350px] h-[260px] border bg-slate-50 shadow  rounded pt-2 flex flex-col" onClick={()=>{router.push(`/shop/${id}`)}}>
      <Image
        src={
          image?image:"https://images.pexels.com/photos/989960/pexels-photo-989960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        height={1000}
        width={1000}
        className="w-full md:h-[250px] h-[140px] object-contain object-center "
        alt="Failed To load"
      />
      <div className="body  grow md:px-3 my-2 flex flex-col mt-3">
        {/* <h1 className="text-sm text-neutral-400">Mens</h1> */}
        <div className="card-header flex justify-between items-start gap-2">
          <h1 className="md:text-md px-4 md:text-base text-xs  grow">{name}</h1>
          {/* <FaHeart
            className={`${
              isFav ? "text-red-600" : "text-slate-300"
            } transition-all text-2xl cursor-pointer duration-200 shrink-0`}
            onClick={() => {
              setFav(!isFav);
            }}
          /> */}
        </div>
        <div className="card-body px-4  mt-1 self-baseline">
          <h3 className="md:text-lg text-sm">
            ₹ {Math.floor(price -(discount*price)/100)}{" "}
            <span className=" line-through text-neutral-600">{price}</span>{" "}
            <span className="text-green-600 ">{discount}%</span>
          </h3>
        </div>
        <button className="flex self-baseline items-center rounded-3xl bg-primary text-white md:py-2 py-1  md:px-7 gap-2 w-full justify-center md:text-sm mt-auto text-xs mb-1 max-w-[95%]  mx-auto"><BsFillSendFill /> View Product</button>
      </div>
    </div>
  );
}

export default ItemCard;
