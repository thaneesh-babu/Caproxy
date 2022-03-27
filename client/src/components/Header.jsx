import { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../img/caproxy.jpg";


const Header = () => {
  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <div>
        <h1 className="text-white text-3xl text-center text-gradient font-semibold my-2">
          CAPROXY
        </h1>
      </div>
    </nav>
  );
};

export default Header;
