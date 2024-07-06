"use client";
import CollectionCard from "@/components/Custom/CollectionCard";
import ItemCard from "@/components/Custom/ItemCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "../../auth";
import { signInUser } from "./actions/auth/authentication";
import { useEffect, useState } from "react";
import { getRecents } from "./actions/product/product";
import toast from "react-hot-toast";

export default function Home() {
  const [products, setProduts] = useState<any>([]);

  const getTopProducts = async () => {
    const res = await getRecents();

    if (res.success) {
      setProduts(res?.products || []);
    } else {
      console.log(res.message);
      toast.error("Internal Server error.");
    }
  };

  useEffect(()=>{
    getTopProducts()
  },  [])
  return (
    <>
      <Carousel className="mx-auto relative"  >
        <CarouselContent>
          <CarouselItem>
            <Image
              src="/Images/banner1.png"
              alt=""
              className="max-w-[100vw] h-auto"
              width={1000}
              height={1000}
            />
          </CarouselItem>
          <CarouselItem>
            {" "}
            <Image
              src="/Images/banner2.jpg"
              alt=""
              className="max-w-[100vw] h-auto"
              width={1000}
              height={1000}
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src="/Images/banner3.png"
              alt=""
              className="max-w-[100vw] h-auto"
              width={1000}
              height={1000}
            />
          </CarouselItem>
          
        </CarouselContent>
        <CarouselPrevious  className="absolute left-6"/>
        <CarouselNext className="absolute right-6" />
      </Carousel>

      <div className="container mx-auto mt-10  font-semibold text-xl py-10">
        <h3 className="lg:text-2xl text-lg -ml-4 md:-ml-0">Best Sellers</h3>

        <div className=" mt-3 grid grid-cols-12 gap-7 place-content-center place-items-center">
          {products &&
            products.length > 0 &&
            products?.map((item: any, index: any) => {
              return (
                <div
                  key={index}
                  className="lg:col-span-4 xs:col-span-6 col-span-12"
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
            })}
        </div>

        <div className="my-5">
          <h2 className="text-2xl">Collection</h2>
          <div className="grid grid-cols-12 gap-6 md:pl-10 md:pr-4 pt-5">
            <CollectionCard
              image="/Images/category1.png"
              label="Airpodes Case"
              path="#"
            />
            <CollectionCard
              image="/Images/category2.png"
              label="Crochet & Baouquent Flowers"
              path="#"
            />
            <CollectionCard
              image="/Images/category3.png"
              label="Pair Bracelets"
              path="#"
            />
            <CollectionCard
              image="/Images/category4.png"
              label="Fabric Jwellery"
              path="#"
            />
            <CollectionCard
              image="/Images/category5.png"
              label="Crochet Bags"
              path="#"
            />
            <CollectionCard
              image="/Images/category6.png"
              label="Crochet Key Chains"
              path="#"
            />
            <CollectionCard
              image="/Images/category7.png"
              label="Beaded Bracelets"
              path="#"
            />
          </div>
        </div>
      </div>
    </>
  );
}
