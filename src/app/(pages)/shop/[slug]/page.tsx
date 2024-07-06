"use client";

import { getProductById } from "@/app/actions/product/product";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Page({ params }: { params: { slug: string } }) {
  const [product, setProduct] = useState<any>();
  const router = useRouter();
  const getProduct = async () => {
    const res = await getProductById({ id: params.slug });
    console.log(JSON.parse(res.product || ""));
    if (res.success) {
      setProduct(JSON.parse(res.product || "") || []);
    } else {
      toast.error("Invalid Product ID.");
      router.replace("/shop");
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      {product ? (
        <div className="container py-10 pb-16">
          <div className="w-full grid grid-cols-12 lg:gap-14 md:gap-10 gap-0">
            <div className=" lg:col-span-5 col-span-12">
              <Image
                loading="lazy"
                src={product?._doc?.image}
                alt=""
                width={1000}
                height={1000}
                className="h-[60vh] w-auto max-w-full object-contain block mx-auto"
              />
            </div>
            <div className="lg:col-span-6 col-span-12 lg:mt-0 md:mt-10 mt-2">
              <h4 className="lg:text-2xl text-xl md:ml-0 -ml-2 font-semibold">
                {product?._doc?.name}
              </h4>
              <h5 className="lg:text-lg text-sm">
                Category {product?.categoryName}
              </h5>
              {product?._doc?.isList ? (
                <>
                  <ul className="list-disc list-outside ml-4 mt-3 mb-2">
                    {product?._doc?.description
                      ?.split(",")
                      .map((item: any, index: any) => {
                        return (
                          <li key={index} className="first-letter:uppercase">
                            {item}
                          </li>
                        );
                      })}
                  </ul>
                </>
              ) : (
                <>
                  <h5>Description : {product?._doc?.description}</h5>
                </>
              )}

              <h3 className="lg:text-xl text-base mt-4">
                Price :{" "}
                {Math.floor(
                  product?._doc?.price -
                    (product?._doc?.discount * product?._doc?.price) / 100
                )}{" "}
                Rs.
              </h3>
              <button
                className="btn-primary mt-3 bg-primary py-2 px-3 rounded text-white text-base md:text-lg"
                onClick={() => {
                  window.open(
                    "https://www.instagram.com/its_krupalijethva",
                    "_blank"
                  );
                }}
              >
                DM to Order
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="container py-10 pb-16">
          <div className="w-full grid grid-cols-12 lg:gap-14 md:gap-10 gap-0">
            <div className=" lg:col-span-5 col-span-12">
              <Skeleton className="h-[60vh] w-[80%] max-w-full object-contain block mx-auto" />
            </div>
            <div className="lg:col-span-6 col-span-12 lg:mt-0 md:mt-10 mt-2">
              <Skeleton className="lg:text-2xl h-4 text-xl mt-8 md:ml-0 -ml-2 font-semibold"></Skeleton>
              <Skeleton className="lg:text-2xl h-2 mt-1 w-[30%] text-xl md:ml-0 -ml-2 font-semibold"></Skeleton>

              <Skeleton className="h-2 w-[60%] mt-12" />
              <Skeleton className="h-2 w-[60%] mt-1" />
              <Skeleton className="h-2 w-[60%] mt-1" />
              <Skeleton className="h-2 w-[60%] mt-1" />
              <Skeleton className="h-2 w-[60%] mt-1" />

              <Skeleton className="lg:text-xl text-base mt-12 h-3 w-[20%]"></Skeleton>
              <Skeleton className="btn-primary mt-6 w-[20%] h-8   py-2 px-3 rounded text-white text-base md:text-lg"></Skeleton>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
