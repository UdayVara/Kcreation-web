"use client";
import { getProducts } from "@/app/actions/product/product";
import ItemCard from "@/components/Custom/ItemCard";
import ShopFilter from "@/components/Custom/ShopFilter";
import SkelatonCard from "@/components/Custom/SkelatonCard";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

function Page() {
  const [data, setData] = useState({ name: "", gender: "", category: "" });

  const [products, setProducts] = useState<any>([]);

  const getALLProducts = async () => {
    const res = await getProducts(data);

    if (res.success) {
      // toast.success(res.message);
      setProducts(res?.products || []);
    } else {
      toast.error(res.message);
    }
  };
  useEffect(() => {
    getALLProducts();
  }, [data]);
  return (
    <>
      <div className="container mb-8">
        <ShopFilter filter={data} setFilter={setData} />

        <h3 className="lg:text-2xl text-lg -ml-2 mb-2 mt-4 font-semibold">
          {products.length} Result Found
        </h3>
        <div className="grid grid-cols-12 gap-5 place-content-center place-items-center ">
          {products && products.length > 0
            ? products?.map((item: any, index: any) => {
                return (
                  <div
                    key={index}
                    className="xl:col-span-4 xs:col-span-6 col-span-12"
                  >
                    <ItemCard
                      id={item._id}
                      name={item.name}
                      price={item.price}
                      discount={item.discount}
                      image={item.image}
                    />
                  </div>
                );
              })
            : [1, 2, 3,4,5,6,7,8,9].map((item, index) => {
                return (
                  <div
                    key={index}
                    className="xl:col-span-4 xs:col-span-6 col-span-12"
                  >
                    <SkelatonCard />
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
