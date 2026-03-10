import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import quote from "@/public/Icon.svg";

export default function Testimonial() {
  return (
    <div>      <section className="relative text-center bg-gray-300 py-16 flex flex-col items-center">
        <div className="absolute left-5 top-1/2 -translate-y-1/2 h-[45px] w-[45px] bg-white rounded flex items-center justify-center cursor-pointer">
          <ChevronLeft />
        </div>

        <Image src={quote} alt="quote icon" className="mb-4" />

        <p className="my-6 max-w-2xl">
          “Working with several WordPress themes and templates over the years, I
          can only say this is the best on every level. It sounds like you're
          expressing satisfaction alongside Bunker in implementing your new
          positioning guidelines. This shows that Bunker has done an excellent
          job.”
        </p>

        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, index) => (
            <Star key={index} fill="#ECB014" className="text-[#ECB014]" />
          ))}
        </div>

        <p className="font-semibold">Marvin McKinney</p>
        <p className="text-sm text-gray-600">Lead Developer</p>

        <div className="absolute right-5 top-1/2 -translate-y-1/2 h-[45px] w-[45px] bg-white rounded flex items-center justify-center cursor-pointer">
          <ChevronRight />
        </div>
      </section>
</div>
  )
}
