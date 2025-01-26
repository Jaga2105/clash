import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";


const HeroSection = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div>
        <Image
          src={"/banner_img.svg"}
          width={500}
          height={500}
          alt="banner_img"
        ></Image>
      </div>
      <div className="text-center mt-4">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text">
          Clash
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl font-bold text-center">
          Discover the better choice togrther
        </p>
        <Link href="/login">
          <Button className="mt-2">Start free</Button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
