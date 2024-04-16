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
  const [products, setProduts] = useState([]);

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
      <Carousel className="mx-auto ">
        <CarouselContent>
          <CarouselItem>
            <Image
              src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Top-Gun-Sneakers_Homepage_trrmhcW.jpg?format=webp&w=1500&dpr=1.3"
              alt=""
              className="w-full"
              width={1000}
              height={1000}
            />
          </CarouselItem>
          <CarouselItem>
            {" "}
            <Image
              src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Web-banner_25.jpg?format=webp&w=1500&dpr=1.3"
              alt=""
              className="w-full"
              width={1000}
              height={1000}
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage-Banner_15_7Ioswgq.jpg?format=webp&w=1500&dpr=1.3"
              alt=""
              className="w-full"
              width={1000}
              height={1000}
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>

      <div className="container mx-auto mt-10  font-semibold text-xl py-10">
        <h3 className="text-2xl">Best Sellers</h3>

        <div className=" flex gap-5 md:justify-between justify-center flex-wrap mx-5">
          {products &&
            products.length > 0 &&
            products?.map((item: any, index: any) => {
              return (
                <div
                  key={index}
                  className="lg:col-span-4 md:col-span-6 col-span-12"
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
              image="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTI6I1mnH1ZQ121ESXCtsUZyDbhqv_ZsIuAHQaZjb8TerJ0G55QO7gWX7hxW6KMSIUZXhArnQayxrZy6Ba_zTWFxY4MX13wrXHNs3NCc0I&usqp=CAE"
              label="Necklace"
              path="#"
            />
            <CollectionCard
              image="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRMGQ8Ci9zYj5NkRHbh3VJ_INpHy2EZ02Xfjgq_qj0SJTUfCdsXsqpBdarTn9DNySvqo9BjIs9nuZ_7gxfmIe1FsTQu5JP016OTkD4mag88VI6mAEfrXnHUMJo&usqp=CAE"
              label="Bracelet"
              path="#"
            />
            <CollectionCard
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSADWVnCVgvMyAd8GGcrXmrtgWDfZJWOPlj59lAuMNtmg&s"
              label="Woolen Sweater"
              path="#"
            />
            <CollectionCard
              image="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSZ8X0dV_Jz810BP1mO1HSxs6TuJc6Xv6H6IrIS-bsROOVe3JdghdxMIPiktFpQJYHFcRuTxoi3N0npCETQDSg88zoqfHLQADa4Mh7WdIzh&usqp=CAE"
              label="Woolen Sweater"
              path="#"
            />
          </div>
        </div>
      </div>
    </>
  );
}
