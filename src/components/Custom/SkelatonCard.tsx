import React from 'react'
import { Skeleton } from '../ui/skeleton'

function SkelatonCard() {
  return (
    <div className="md:w-[280px] w-[150px] lg:w-[350px] lg:h-[400px]  md:h-[350px] h-[260px] border shadow  rounded pt-2 flex flex-col" >
      <Skeleton
        
        className="w-full md:h-[250px] h-[140px] object-contain object-center "
        
      />
      {/* <Skeleton className="body h-[10%]  grow md:px-3 my-2 flex flex-col mt-3" /> */}
        {/* <h1 className="text-sm text-neutral-400">Mens</h1> */}
       <Skeleton  className='h-4 mt-4 w-[80%] '/>
       <Skeleton  className='h-2 mt-1 w-[40%] '/>
          {/* <FaHeart
            className={`${
              isFav ? "text-red-600" : "text-slate-300"
            } transition-all text-2xl cursor-pointer duration-200 shrink-0`}
            onClick={() => {
              setFav(!isFav);
            }}
          /> */}
        
        {/* <div className="card-body px-4  mt-1 self-baseline">
          <h3 className="md:text-lg text-sm">
            
          </h3>
        </div> */}
        <Skeleton className="flex self-baseline items-center rounded-3xl  text-white md:py-2 py-1  md:px-7 gap-2 w-full justify-center md:text-sm mt-auto text-xs mb-1 max-w-[95%]  mx-auto"></Skeleton>
      
    </div>
  )
}

export default SkelatonCard