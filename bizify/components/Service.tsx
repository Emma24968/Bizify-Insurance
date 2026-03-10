import React from 'react'
import Image from 'next/image';
import icon from "@/public/Icon.png";
import { ArrowRight } from 'lucide-react';
import audit from "@/public/audit.jpg";
import { services } from '@/app/data';
export default function Service() {
  return (
    <div>      <section className="py-16 px-20">
            <div className="flex flex-cols-3 gap-4">
              <div className="w-[53%] justify-center">
                <h3 className="text-5xl font-bold mb-5">
                  Amazing <br /> solutions for <br /> business
                </h3>
                <p>
                  With over 25 years of experience, we have crafted thousands of{" "}
                  <br /> Strategic discovery process that enables us peelback
                  thousands <br /> which enable us to understand.
                </p>
              </div>
    
              <div className="grid mt-10 w-[306px] h-[382px] hover:shadow-2xl transition bg-[#f4f5f6] p-6 rounded-2xl">
                <Image src={icon} alt="icon" />
                <h3 className="text-2xl font-bold">Marketing Strategy</h3>
                <p>
                  when an unknown printer took gerty galley types awec erambled when
                  an unknown printea wr took galley Insurance ollowing.
                </p>
                <hr className="text-[#bdb2b2c2]" />
                <div className="flex items-center">
                  <button className="text-[#84a17d]">Learn more</button>
                  <ArrowRight className="text-[#84a17d]" />
                </div>
              </div>
              <div
                className="
              flex flex-col gap-4 hover:shadow-2xl transition mt-10 bg-[#f4f5f6] p-6 rounded-2xl"
              >
                <Image
                  src={audit}
                  alt="audit"
                  width={250}
                  className="rounded-2xl"
                />
                <h3>Audit & Assurance</h3>
                <hr className="text-[#bdb2b2c2]" />
                <div className="flex">
                  <button className="text-[#84a17d]">Learn more</button>
                  <ArrowRight className="text-[#84a17d]" />
                </div>
              </div>
            </div>
            <div className=" grid grid-cols-4 gap-4">
              {services.map((service, index) => {
                return (
                  <div
                    key={index}
                    className="
              flex flex-col gap-4 hover:shadow-2xl transition mt-10 bg-[#f4f5f6] p-6 rounded-2xl"
                  >
                    <Image
                      src={service.image}
                      alt="image"
                      width={250}
                      className="rounded-xl"
                    />
                    <h3>{service.title}</h3>
                    <hr className="text-[#bdb2b2c2]" />
                    <div className="flex">
                      <button className="text-[#84a17d]">Learn more</button>
                      <ArrowRight className="text-[#84a17d]" />
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
    </div>
  )
}
