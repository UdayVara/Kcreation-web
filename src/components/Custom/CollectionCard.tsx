import Link from "next/link";
import React from "react";
import Image from "next/image";

function CollectionCard({image,label,path}:{image:string,label:string,path:string}) {
  return (
    <div className="md:col-span-6 col-span-12 ">
      <Link href={path} className="relative">
        <Image
          src={
            image
          }
          className=" h-[500px] xl:h-[600px] xl:max-w-[98%] w-full object-center block mx-auto hover:border-4 hover:border-slate-200 transition-all duration-200 rounded"
          width={1000}
          height={1000}
          alt="Failed to Load Image"
        />
        <h3 className="absolute bottom-5 right-4 bg-white text-black px-3 rounded">
          {label}
        </h3>
      </Link>
    </div>
  );
}

export default CollectionCard;
