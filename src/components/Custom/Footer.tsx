import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaRegCopyright } from "react-icons/fa";
function Footer() {
  return (
    <>
      <div className="w-full bg-primary text-white py-6">
        <div className="container grid grid-cols-12 gap-5">
          <div className="lg:col-span-4 col-span-12">
            <h1 className="text-3xl">Follow Us On</h1>
            <div className="mt-3 flex flex-row gap-5">
              <IoLogoInstagram className="text-3xl" />
              <FaFacebook className="text-3xl" />
              <FaXTwitter className="text-3xl" />
              <FaYoutube className="text-3xl" />
              <CiMail className="text-3xl" />
            </div>
          </div>
          <div className="lg:col-span-4 md:col-span-6 col-span-12">
            <h1 className="text-3xl">Shop</h1>
            <div className="mt-3 flex flex-col gap-5">
              <h1 className="ml-5 text-lg">Bracelet</h1>
              <h1 className="ml-5 text-lg">Necklace</h1>
              <h1 className="ml-5 text-lg">Woolen Sweater</h1>
              <h1 className="ml-5 text-lg">Woollen Case</h1>
            </div>
          </div>
          <div className="lg:col-span-4 md:col-span-6 col-span-12">
            <h1 className="text-3xl">Pages</h1>
            <div className="mt-3 flex flex-col gap-5">
              <h1 className="ml-5 text-lg">Home</h1>
              <h1 className="ml-5 text-lg">About</h1>
              <h1 className="ml-5 text-lg">Contact</h1>
              <h1 className="ml-5 text-lg">Terms & Conditions</h1>
            </div>
          </div>

        </div>
          <h1 className="text-center mt-8 flex items-center justify-center"> <FaRegCopyright className="inline-block mr-2 text-lg"/>Kcreation All Rights Reserved</h1>
      </div>
    </>
  );
}

export default Footer;
