'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/button"

export default function AboutUs() {
  return (
    <section className="mx-auto px-4 py-16 flex flex-col md:flex-row items-center bg-[#1E2A5D0A]">
      <div className="hidden md:block md:w-1/2 mb-8 md:mb-0">
        <div className="w-[500px] h-[400px] md:h-[500px] relative ml-20">
          <Image
            src="/images/aboutus.png"
            alt="About Us Image"
            fill
            className="object-cover h-full"
          />
        </div>
      </div>
      
      <div className="w-full md:w-1/2 md:pl-16 flex flex-col items-center md:items-start text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0E2368] mb-6">
          About Us
        </h2>
        <p className="text-[#444957] mb-6 max-w-md">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s 
          printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries.
        </p>
        <Button className="bg-[#E23744] rounded-full text-white hover:bg-[#c5303b]">
          Read More
        </Button>
      </div>
    </section>
  )
}