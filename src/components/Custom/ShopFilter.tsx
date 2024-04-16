"use client";
import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getAllCategory } from "@/app/actions/category/category";

function ShopFilter({ filter, setFilter }: { filter: any; setFilter: any }) {
  const [categories, setCategories] = useState<any>([]);
  const getAllCategories = async () => {
    const res = await getAllCategory();
    console.log(res)
    if (res.success) {
      setCategories(res?.category || [])
    }else{
      setCategories([])
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);
  return (
    <>
      <h1 className="mt-5 mb-2 text-xl font-semibold ">Filter</h1>
      <div className="w-full md:px-1 text-lg grid grid-cols-12 gap-5 md:gap-8 pb-4">
        <div className="md:col-span-4 col-span-12">
          <Input
            placeholder="Name"
            name="name"
            onChange={(e) => {
              setFilter({ ...filter, [e.target.name]: e.target.value });
            }}
          />
        </div>
        <div className="md:col-span-4 col-span-12">
          <Select
            name="category"
            onValueChange={(value) => {
              setFilter({ ...filter, category: value });
            }}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories &&
                
                categories.map((category: any, index: any) => {
                  return (
                    <SelectItem key={index} value={category._id}>
                      {category.name}
                    </SelectItem>
                  );
                })}
            </SelectContent>
          </Select>
        </div>
        <div className="md:col-span-4 col-span-12">
          <Select
            name="gender"
            onValueChange={(value) => {
              setFilter({ ...filter, gender: value });
            }}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </>
  );
}

export default ShopFilter;
