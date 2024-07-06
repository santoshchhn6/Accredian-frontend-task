import React from "react";
import logo from "../assets/images/logo.png";
import { padding } from "../style";

const Header = () => {
  return (
    <div className="">
      <div className={`${padding} flex items-center h-[79px]`}>
        <img src={logo} alt="" className="" />
      </div>
    </div>
  );
};

export default Header;
