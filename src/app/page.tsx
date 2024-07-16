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
import { Skeleton } from "@/components/ui/skeleton";
import SkelatonCard from "@/components/Custom/SkelatonCard";
import Reviews from "@/components/Custom/Review";

export default function Home() {
  const [recentProducts, setRecentProducts] = useState<any>([]);
  const [topSellingProducts, setTopSellingProducts] = useState<any>([]);
  // const products = null;
  const getTopProducts = async () => {
    const res = await getRecents();

    if (res.success) {
      setRecentProducts(res?.recentProducts || []);
      setTopSellingProducts(res?.topSellingProducts || []);
    } else {
      console.log(res.message);
      toast.error("Internal Server error.");
    }
  };

  useEffect(() => {
    getTopProducts();
  }, []);
  return (
    <>
      <Carousel className="mx-auto relative">
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
        <CarouselPrevious className="absolute left-6" />
        <CarouselNext className="absolute right-6" />
      </Carousel>

      <div className="container mx-auto md:mt-10 mt-6  font-semibold text-xl py-10">
        <h3 className="lg:text-2xl text-lg -ml-4 md:-ml-0">Recent Launches</h3>

        <div className=" mt-3 grid grid-cols-12  gap-7 place-content-center place-items-center">
          {recentProducts && recentProducts.length > 0
            ? recentProducts?.map((item: any, index: any) => {
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
            : [1, 2, 4].map((item, index) => {
                return (
                  <div
                    key={index}
                    className="xl:col-span-4 xs:col-span-6 col-span-12"
                  >
                    <SkelatonCard />
                  </div>
                );
              })}
        </div>
        <h3 className="lg:text-2xl text-lg -ml-4 md:-ml-0 mt-5">Best Sellers</h3>

        <div className=" mt-3 grid grid-cols-12  gap-7 place-content-center place-items-center">
          {topSellingProducts && topSellingProducts.length > 0
            ? topSellingProducts?.map((item: any, index: any) => {
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
            : [1, 2, 4].map((item, index) => {
                return (
                  <div
                    key={index}
                    className="xl:col-span-4 xs:col-span-6 col-span-12"
                  >
                    <SkelatonCard />
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
        <Reviews />
      </div>
    </>
  );
}
