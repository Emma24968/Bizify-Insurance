import React from 'react'
import Image from 'next/image'; 
import { projects } from '@/app/data';
import { ArrowUpRight } from 'lucide-react';

export default function Portfolio() {
  return (
    <div>
              <section className="bg-[#153C3C] px-16 py-16 text-white">
                <div className="flex justify-between items-center mb-12">
                  <h3 className="text-5xl font-bold">
                    Our latest project <br /> triumphs
                  </h3>
        
                  <button className="bg-[#84a17d] w-[10rem] rounded-lg py-3 px-2  transition">
                    See All Projects
                  </button>
                </div>
        
                <div className="grid grid-cols-2 gap-8">
                  {projects.map((project, index) => {
                    return (
                      <div key={index} className=" cursor-pointer">
                        <div className="relative group rounded-xl">
                          <div className="absolute bg-[#84a17d] p-6 items-center justify-center rounded-xl mt-[25%] ml-[50%] opacity-0 group-hover:opacity-100 group-hover:bg-[#6f8c69] ">
                            <ArrowUpRight />
                          </div>
                          <Image
                            src={project.image}
                            alt={project.title}
                            width={600}
                            height={400}
                            className="rounded-xl object-cover"
                          />
                        </div>
        
                        <div className="mt-4">
                          <h3 className="text-xl font-bold">{project.title}</h3>
                          <p className="text-gray-300">{project.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>{" "}
        
        </div>
  )
}
