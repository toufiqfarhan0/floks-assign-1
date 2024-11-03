"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 375);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="relative w-full">
      {/* Header Section */}
      <header className="relative w-full mb-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-20 px-10">
            {/* Logo - hidden on mobile */}
            <div className="hidden md:block">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={120}
                height={40}
                className="object-contain"
              />
            </div>

            {/* Hero Section - visible on all screens */}
            <div className="max-w-2xl mt-20 md:mt-20 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Discover the <br /> <span className="text-[#E23744]">Best</span>{" "}
                Food <br /> and Drinks
              </h1>

              <p className="text-[#444957] mb-6 max-w-md mx-auto md:mx-0">
                Naturally made Healthcare Products for the better
                <br />
                care & support of your body.
              </p>

              <Button
                variant="default"
                className="bg-[#E23744] text-white hover:bg-[#c5303b] rounded-full"
              >
                Explore Now!
              </Button>
            </div>
          </div>

          {/* Right side content */}
          <div className="relative w-full md:w-auto order-first md:order-last">
            {/* Images container */}
            <div
              className={`relative ${
                isMobile ? "mx-auto max-w-[500px]" : "ml-auto"
              }`}
            >
              {/* Hero Image */}
              <Image
                src="/images/hero.png"
                alt="Hero"
                width={500}
                height={400}
                className="absolute top-0 right-0 w-full md:w-[500px] z-10"
              />

              {/* Background Vector */}
              <Image
                src="/images/vector.png"
                alt="Vector Background"
                width={600}
                height={480}
                className="relative w-full md:w-[600px] z-20"
              />
            </div>

            {/* Contact Button */}
            <Button
              variant="outline"
              className="absolute top-4 right-4 hover:bg-[#c5303b] border-white rounded-full bg-transparent md:right-8 hover:text-white text-white z-30"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
}
