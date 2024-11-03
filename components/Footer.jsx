'use client'

import { useState, useEffect } from 'react'
import Image from "next/image"
import { Facebook, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 375)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <footer className="bg-[#F8F8F8] py-16 p-10">
      <div className={`container mx-auto px-4 ${isMobile ? 'flex flex-col items-center' : 'flex flex-col md:flex-row justify-between items-start'}`}>
        <div className={`${isMobile ? 'mb-8 text-center' : 'mb-8 md:mb-0'}`}>
          <div className="w-40 h-16 relative mb-4 mx-auto md:mx-0">
            <Image
              src="/images/logo.png"
              alt="Food Truck Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className={`${isMobile ? 'mb-8 text-center' : 'mb-8 md:mb-0'}`}>
          <h4 className="text-lg font-semibold text-[#0E2368] mb-4">
            Contact Us
          </h4>
          <p className="text-[#646874]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
          </p>
        </div>
        <div className={`${isMobile ? 'mb-8 text-center' : 'mb-8 md:mb-0'}`}>
          <h4 className="text-lg font-semibold text-[#0E2368] mb-4">More</h4>
          <ul className="space-y-2 text-[#646874]">
            <li>About Us</li>
            <li>Products</li>
            <li>Career</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className={`${isMobile ? 'mb-8 text-center' : ''}`}>
          <h4 className="text-lg font-semibold text-[#0E2368] mb-4">
            Social Links
          </h4>
          <div className="flex space-x-4 justify-center md:justify-start">
            <Instagram className="text-[#0E2368]" />
            <Twitter className="text-[#0E2368]" />
            <Facebook className="text-[#0E2368]" />
          </div>
        </div>
      </div>
      <div className={`container mx-auto text-xs mt-8 text-center text-[#646874] ${isMobile ? '' : 'text-right'}`}>
        © 2022 Food Truck Example
      </div>
    </footer>
  )
}