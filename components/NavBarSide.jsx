// import MdWork
import { FaWrench, FaLightbulb, FaHome } from "react-icons/fa";
import { BsFillPeopleFill, BsFillBriefcaseFill, BsFillTelephoneFill } from "react-icons/bs";
import { BiNetworkChart } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import React from "react";
import Link from "next/link";

const NavBarSide = () => {
    const [hamburgerHover, setHamburgerHover] = React.useState(false);
    return ( 
        <div className="bg-black absolute flex flex-col w-20 h-screen text-white justify-center items-center ease-in-out duration-300">
            <Link href=""><a><FaHome className="text-2xl hover:text-3xl text-white hover:text-primary ease-in-out duration-300 my-4 cursor-pointer"/></a></Link>
            <Link href=""><a><FaWrench className="text-2xl hover:text-3xl text-white hover:text-primary ease-in-out duration-300 my-4 cursor-pointer"/></a></Link>
            <Link href=""><a><BsFillPeopleFill className="text-2xl hover:text-3xl text-white hover:text-primary ease-in-out duration-300 my-4 cursor-pointer"/></a></Link>
            <Link href=""><a><FaLightbulb className="text-2xl hover:text-3xl text-white hover:text-primary ease-in-out duration-300 my-4 cursor-pointer"/></a></Link>
            <Link href=""><a><BiNetworkChart className="text-2xl hover:text-3xl text-white hover:text-primary ease-in-out duration-300 my-4 cursor-pointer"/></a></Link>
            <Link href=""><a><BsFillBriefcaseFill className="text-2xl hover:text-3xl text-white hover:text-primary ease-in-out duration-300 my-4 cursor-pointer"/></a></Link>
            <Link href=""><a><BsFillTelephoneFill className="text-2xl hover:text-3xl text-white hover:text-primary ease-in-out duration-300 mt-4 mb-auto cursor-pointer"/></a></Link>
        </div>
     );
}
 
export default NavBarSide;