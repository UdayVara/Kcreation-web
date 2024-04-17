"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaInbox } from "react-icons/fa";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ScrollArea } from "@/components/ui/scroll-area";

import Link from "next/link";
import { addCategory } from "@/app/actions/category/category";
import toast from "react-hot-toast";
import { addProduct } from "@/app/actions/product/product";
import { auth, signIn, signOut } from "../../../auth";
import {
  UpdateUser,
  getUser,
  signInUser,
  signOutUser,
} from "@/app/actions/auth/authentication";

function Header() {
  const addNewCategory = async () => {
    const res = await addCategory({
      name: "Earphones Case",
      description:
        "An earphone case cover protects your earbuds from daily wear and tear, and can also help you avoid dust and moisture when you're not using them.",
      gender: "unisex",
    });

    if (res.success) {
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
  };
  const addNewProduct = async () => {
    const res = await addProduct({
      name: "Nazar Bracelets",
      category: "661424bdfde1325d50c74505",
      description: "Pair of Nazar Bracelets pack of 2 black and white",
      price: 230,
      discount: 5,
      image:
        "https://utfs.io/f/e1bc50e5-2394-44f5-a6fe-e3a60e3ee96a-y1t39r.app_399219982_721474733158575_1634224297728998486_n_1080.jpg",
    });

    if (res.success) {
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
  };
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<any>();
  const getUser1 = async () => {
    const user1 = await getUser();
    console.log(user1);
    setUser(user1);
  };
  console.log(user);
  useEffect(() => {
    getUser1();
  }, []);

  const handleUpdate = async () => {
    const res = await UpdateUser(user.user);

    if (res.success) {
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
    setOpen(!open);
  };
  // const handleAuth = async() => {
  //   const res = await signInUser({name:"UDay",email:"Uday@gmail.com",password:"12344"})

  //   if(res.success){
  //     console.log("User Created",res)
  //   }else{
  //     console.log("User Creation Failed",res)
  //   }
  // }
  useEffect(() => {
    // addNewCategory()
    // addNewProduct()
  }, []);

  return (
    <>
      <h1 className="w-full bg-primary text-white font-semibold text-center py-1 text-base">
        Find What Fits The Best For You
      </h1>
      <div className="w-full border shadow flex  flex-row justify-between px-10 items-center bg-white ">
        <Image
          src={"/Images/kcreation_logo.png"}
          width={1000}
          height={1000}
          alt="Failed to Load Image"
          className="h-16 my-2 w-auto bg-none "
        />
        <div className=" flex-row gap-12 text-lg md:flex hidden ">
          <div className="flex flex-col">
            <Link className="peer" href={"/"}>
              Home
            </Link>
            <div className="w-full h-[2px] bg-black scale-0 peer-hover:scale-100 origin-left transition-all duration-300"></div>
          </div>
          <div>
            <Link className="peer" href={"/about"}>
              About
            </Link>
            <div className="w-full h-[2px] bg-black scale-0 peer-hover:scale-100 origin-left transition-all duration-300"></div>
          </div>
          <div>
            <Link className="peer" href={"/shop"}>
              Shop
            </Link>
            <div className="w-full h-[2px] bg-black scale-0 peer-hover:scale-100 origin-left transition-all duration-300"></div>
          </div>
          <div>
            <Link className="peer" href={"/contact"}>
              Contact
            </Link>
            <div className="w-full h-[2px] bg-black scale-0 peer-hover:scale-100 origin-left transition-all duration-300"></div>
          </div>
        </div>
        {user ? (
          <>
            <div className="ml-5 flex-row items-center gap-8 text-xl md:flex hidden ">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  {" "}
                  <FaRegUserCircle className="cursor-pointer text-xl hover:scale-110 transition-all" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {/* <DropdownMenuItem>My Favorites</DropdownMenuItem> */}
                  <DropdownMenuItem
                    onClick={() => {
                      setOpen(!open);
                    }}
                  >
                    Edit Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={async () => {
                      await signOutUser();
                      window.location.reload();
                    }}
                  >
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <Sheet>
              <SheetTrigger className="md:hidden block">
                <GiHamburgerMenu className="text-xl" />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>
                    <div className="flex gap-2 items-center  ">
                      <Image
                        src={"/Images/kcreation_logo.png"}
                        width={1000}
                        height={1000}
                        alt="Failed to Load Image"
                        className="h-16 my-2 w-auto bg-none "
                      />
                      <h1 className="text-lg">It Kcreation</h1>
                    </div>
                  </SheetTitle>
                  <SheetDescription><div className="flex flex-col text-black">
                      <Link href={"/"} className="ml-5 text-lg">
                        Home
                      </Link>
                      <Link href={"/about"} className="ml-5 text-lg">
                        About
                      </Link>
                      <Link href={"/shop"} className="ml-5 text-lg">
                        Shop
                      </Link>
                      <Link href={"/contact"} className="ml-5 text-lg">
                        Contact
                      </Link>
                    </div></SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </>
        ) : (
          <>
            <Link href={"/signin"} className="md:block hidden">
              Sign in
            </Link>
            <Sheet>
              <SheetTrigger className="md:hidden block">
                <GiHamburgerMenu className="text-xl" />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>
                    <div className="flex gap-2 items-center  ">
                      <Image
                        src={"/Images/kcreation_logo.png"}
                        width={1000}
                        height={1000}
                        alt="Failed to Load Image"
                        className="h-14 my-2 w-auto bg-none "
                      />
                      <h1 className="text-lg">It Kcreation</h1>
                    </div>
                  </SheetTitle>
                  <SheetDescription>
                    <div className="flex flex-col gap-5 text-black">
                      <Link href={"/signin"} className="ml-5 text-lg">
                        Signin
                      </Link>
                      <Link href={"/"} className="ml-5 text-lg">
                        Home
                      </Link>
                      <Link href={"/about"} className="ml-5 text-lg">
                        About
                      </Link>
                      <Link href={"/shop"} className="ml-5 text-lg">
                        Shop
                      </Link>
                      <Link href={"/contact"} className="ml-5 text-lg">
                        Contact
                      </Link>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </>
        )}
      </div>
      <Sheet
        open={open}
        onOpenChange={() => {
          setOpen(!open);
        }}
      >
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Edit Profile</SheetTitle>
            <SheetDescription>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col mt-5">
                  <label
                    className="text-black text-lg font-semibold"
                    htmlFor=""
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    defaultValue={user?.user?.name}
                    name="name"
                    id="name"
                    className="border-2  px-2 py-1"
                  />
                </div>
                <div className="flex flex-col mt-5">
                  <label
                    className="text-black text-lg font-semibold"
                    htmlFor=""
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    defaultValue={user?.user?.email}
                    id="email"
                    className="border-2  px-2 py-1"
                  />
                </div>
                <div className="flex flex-col mt-5">
                  <label
                    className="text-black text-lg font-semibold"
                    htmlFor=""
                  >
                    Password
                  </label>
                  <input
                    type="text"
                    name="password"
                    defaultValue={user?.user?.password}
                    id="password"
                    className="border-2  px-2 py-1"
                  />
                </div>
                <button
                  className="bg-primary py-2 text-lg text-white mt-4 rounded"
                  onClick={handleUpdate}
                >
                  Save
                </button>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
}

export default Header;
