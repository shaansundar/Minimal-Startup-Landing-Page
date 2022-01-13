import React from "react";
import Typewriter from 'typewriter-effect';
import data from "../data/data";

const Hero = () => {
    return ( 
    <div className="snap-center flex flex-col justify-start items-center min-w-full min-h-full">
        <div className="w-auto min-w-full mt-2 h-20 flex flex-row justify-between items-center text-white">
            <h1 className="text-3xl ml-24">{data.name}</h1>
            <h1 className="text-2xl mr-10">{data.tag}</h1>
        </div>
        <div className="flex w-full h-full flex-col justify-center items-start">
            <div className="ml-24">
                <h1 className="text-white text-8xl">We are best @ </h1>
                <div className="text-white text-8xl inline-block">
                <Typewriter options={{strings: data.hero.titleArrayHTML,cursor: '|',deleteSpeed:100, delay:100 ,autoStart: true, pauseFor: 2500, loop: true, skipAddStyles: false,}}/>
                </div>
                <h1 className="text-white inline text-8xl">Service</h1>
            </div>
            <div>
                <button className="text-white bg-primary p-2 w-40 hover:w-44 ease-in-out duration-300 text-2xl my-8 ml-24 border-primary border-2 border-solid">
                    Contact Us!
                </button>
                <button className="text-primary bg-black p-2 w-40 hover:w-44 ease-in-out duration-300 text-2xl my-8 ml-4 border-primary border-2 border-dashed">
                     Blog
                </button>
            </div>
        </div>
    </div>
    );
}
 
export default Hero;