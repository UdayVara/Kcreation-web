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
    <div className="md:w-[340px] w-full h-[580px] border bg-slate-50 my-5 rounded" onClick={()=>{router.push(`/shop/${id}`)}}>
      <Image
        src={
          image?image:"https://images.pexels.com/photos/989960/pexels-photo-989960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        height={1000}
        width={1000}
        className="w-full h-[420px] object-cover object-center "
        alt="Failed To load"
      />
      <div className="body md:px-3 my-2 flex flex-col">
        {/* <h1 className="text-sm text-neutral-400">Mens</h1> */}
        <div className="card-header flex justify-between items-start gap-2">
          <h1 className="text-md grow">{name}</h1>
          {/* <FaHeart
            className={`${
              isFav ? "text-red-600" : "text-slate-300"
            } transition-all text-2xl cursor-pointer duration-200 shrink-0`}
            onClick={() => {
              setFav(!isFav);
            }}
          /> */}
        </div>
        <div className="card-body  mt-1 self-baseline">
          <h3 className="text-2xl">
            ₹ {Math.floor(price -(discount*price)/100)}{" "}
            <span className="text-lg line-through text-neutral-600">{price}</span>{" "}
            <span className="text-green-600 text-xl">{discount}%</span>
          </h3>
        </div>
        <button className="flex items-center rounded-3xl bg-primary text-white py-2  px-7 gap-2 w-full justify-center text-base mt-2 "><BsFillSendFill /> View Product</button>
      </div>
    </div>
  );
}

export default ItemCard;
