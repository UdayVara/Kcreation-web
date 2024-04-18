"use client";
import { getProducts } from "@/app/actions/product/product";
import ItemCard from "@/components/Custom/ItemCard";
import ShopFilter from "@/components/Custom/ShopFilter";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

function Page() {
  const [data, setData] = useState({ name: "", gender: "", category: "" });

  const [products, setProducts] = useState<any>([]);

  const getALLProducts = async () => {
    const res = await getProducts(data);

    if (res.success) {
      toast.success(res.message);
      setProducts(res?.products || []);
    } else {
      toast.error(res.message);
    }
  };
  useEffect(()=>{
    getALLProducts()
  },[data])
  return (
    <>
      <div className="container">
        <ShopFilter filter={data} setFilter={setData} />
        <button
          onClick={() => {
            console.log(data);
          }}
        >
          Search
        </button>
        <h3 className="text-2xl mt-4 font-semibold">{products.length} Result Found</h3>
        <div className="grid grid-cols-12 md:gap-10 ">
          {products &&
            products.length > 0 &&
            products?.map((item:any, index:any) => {
              return (
                <div key={index} className="lg:col-span-4 md:col-span-6 col-span-12">
                  <ItemCard id={item._id} name={item.name} price={item.price} discount={item.discount} image={item.image} />
                </div>
              );
            })}

          {/* <div className="lg:col-span-4 md:col-span-6 col-span-12">
            <ItemCard />
          </div>
          <div className="lg:col-span-4 md:col-span-6 col-span-12">
            <ItemCard />
          </div>
          <div className="lg:col-span-4 md:col-span-6 col-span-12">
            <ItemCard />
          </div>
          <div className="lg:col-span-4 md:col-span-6 col-span-12">
            <ItemCard />
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Page;
