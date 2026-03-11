import React from 'react'
import Image from 'next/image'
import ai from "@/public/ai.jpg";
import { blogs } from '@/app/data';
import admin from "@/public/admin.svg";
import comment from "@/public/comment.svg";


export default function Blog() {
  return (
    <div>      <section className="px-16 py-16">
        <div className="flex justify-between items-center mb-12">
          <h3 className="text-5xl font-bold">
            Useful articles & <br /> blog posts
          </h3>

          <button className="bg-[#84a17d] text-[15px] w-[10rem] rounded-lg py-3 px-2 text-white">
            See All Projects
          </button>
        </div>

        <div className="flex justify-between ">
          <div className="relative w-1/2 text-white">
            <Image
              src={ai}
              alt="ai image"
              width={550}
              className="object-cover rounded-lg"
            />

            <button className="bg-[#84a17d] text-white absolute bottom-48 right-40 rounded-lg text-xs py-2 px-3">
              May 17 2024
            </button>

            <div className="bg-green-950 rounded-br-lg rounded-tl-lg p-4 absolute bottom-0 left-20 w-[20rem]">
              <div className="flex text-xs gap-2 items-center mb-2">
                <Image src={admin} alt="admin icon" />
                <p>Admin</p>
                <Image src={comment} alt="comment icon" />
                <p>0 Comments</p>
              </div>

              <a href="#" className="underline">
                How You Can Find A Design <br /> Job You Will Truly
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            {blogs.map((blog, index) => (
              <div key={index} className="flex">
                <Image
                  src={blog}
                  alt="blog image"
                  width={100}
                  className="rounded-l-lg"
                />

                <div className="bg-green-950 p-3 rounded-r-lg w-[20rem] text-white">
                  <div className="flex text-xs gap-2 items-center mb-2">
                    <Image src={admin} alt="admin icon" />
                    <p>Admin</p>
                    <Image src={comment} alt="comment icon" />
                    <p>0 Comments</p>
                  </div>

                  <a href="#" className="underline">
                    How You Can Find A Design <br /> Job You Will Truly
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>{" "}
</div>
  )
}
