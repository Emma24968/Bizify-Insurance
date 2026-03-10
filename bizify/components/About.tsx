import React from 'react'
import Image from 'next/image';
import { cards,card2,checks } from '@/app/data';

export default function About() {
  return (
    <div>      <section className="bg-[#f4f5f6] py-16 flex gap-20 px-[5rem]">
        <div className="flex gap-6 w-[75%]">
          {cards.map((card, index) => {
            return (
              <div key={index} className="flex flex-col items-center">
                <Image
                  src={card.image}
                  width={306}
                  height={478}
                  className="rounded-xl mb-4"
                  alt="card image"
                />

                <Image src={card.logo} width={306} alt="card logo" />
              </div>
            );
          })}

          {card2.map((card, index) => {
            return (
              <div key={index} className="flex flex-col items-center">
                <Image
                  src={card.logo}
                  width={270}
                  height={40}
                  className="mb-4"
                  alt="card logo"
                />

                <Image
                  src={card.image}
                  width={306}
                  height={478}
                  className="rounded-xl"
                  alt="card image"
                />
              </div>
            );
          })}
        </div>
        <div className="flex flex-col w-[60%] gap-15">
          <h3 className="text-5xl font-bold ">
            We are the top digital marketer Company
          </h3>
          <p>
            When an unknown printer took a galley of type and scrambled it ake a
            type specimen book. when an unknown printer took a galley of type
            and scrambled it type specimen book.
          </p>
          <div className="grid gap-3 grid-cols-2">
            {checks.map((check, index) => {
              return (
                <div key={index} className="flex gap-4  items-center">
                  <Image src={check.image} width={20} alt={check.description} />
                  <p className=" text-[15px] font-bold">{check.description}</p>
                </div>
              );
            })}
          </div>
          <button className="bg-[#84a17d] w-[10rem] rounded-lg py-3 px-2 text-white">
            More About Us{" "}
          </button>
        </div>
      </section>
</div>
  )
}
