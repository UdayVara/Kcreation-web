import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaRegCopyright } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

import Link from "next/link";
function Footer() {
  return (
    <>
      <div className="w-full bg-primary text-white py-6">
        <div className="container grid grid-cols-12 gap-5">
          <div className="lg:col-span-4 col-span-12">
            <h1 className="text-3xl">Follow Us On</h1>
            <div className="mt-3 flex flex-row gap-5">
              <Link target="_blank" href={"https://www.instagram.com/its_krupalijethva?igsh=Y3VmYWZrZG82bGpv"}><IoLogoInstagram className="text-3xl" /></Link>
              <Link target="_blank" href={"https://www.facebook.com/share/MD5WohEzw6fqxeSV/?mibextid=qi2Omg"}><FaFacebook className="text-3xl" /></Link>
              <Link target="_blank" href={"https://youtube.com/@its_krupalijethva?si=hLEJO5QbcLb7K4__"}><FaYoutube className="text-3xl" /></Link>
              <Link target="_blank" href={"mailto:kcreationartist@gmail.com"}><CiMail className="text-3xl" /></Link>
              <Link href={"https://www.pinterest.com/kcreation9/"} target="_blank"><FaPinterest className="text-3xl" /></Link>
            </div>
          </div>
          <div className="lg:col-span-4 md:col-span-6 col-span-12">
            <h1 className="text-3xl">Shop</h1>
            <div className="mt-3 flex flex-col gap-5">
              <Link href={"/shop"} className="ml-5 text-lg">Bracelet</Link>
              <Link href={"/shop"} className="ml-5 text-lg">Necklace</Link>
              <Link href={"/shop"} className="ml-5 text-lg">Woolen Sweater</Link>
              <Link href={"/shop"} className="ml-5 text-lg">Woollen Case</Link>
            </div>
          </div>
          <div className="lg:col-span-4 md:col-span-6 col-span-12">
            <h1 className="text-3xl">Pages</h1>
            <div  className="mt-3 flex flex-col gap-5">
              <Link href={"/"} className="ml-5 text-lg">Home</Link>
              <Link href={"/about"} className="ml-5 text-lg">About</Link>
              <Link href={"/contact"} className="ml-5 text-lg">Contact</Link>
              <Link href={"/terms"} className="ml-5 text-lg">Terms & Condition</Link>
            </div>
          </div>

        </div>
          <h1 className="text-center mt-8 flex items-center justify-center"> <FaRegCopyright className="inline-block mr-2 text-lg"/>KCreation All Rights Reserved</h1>
      </div>
    </>
  );
}

export default Footer;
