import React from 'react'
import Image from 'next/image';
import { plans } from '@/app/data';

export default function Plan() {
  return (
    <div>      <section className="text-center my-18">
        <div className="flex flex-col items-center">
          <h3 className="text-5xl font-bold mb-8">
            Choose the plans <br /> that suits you!
          </h3>

          <div className="flex items-center mb-6 gap-x-3">
            <span className="text-sm">Monthly</span>

            <label className="relative inline-block w-11 h-6 cursor-pointer">
              <input type="checkbox" className="peer sr-only" />

              <span className="absolute inset-0 bg-gray-300 rounded-full peer-checked:bg-[#84a17d] transition"></span>

              <span className="absolute top-1/2 left-0.5 -translate-y-1/2 w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-5"></span>
            </label>

            <span className="text-sm">Yearly</span>
          </div>
        </div>

        <div className="flex justify-center gap-14">
          {plans.map((plan, index) => {
            return (
              <div key={index} className="rounded-xl bg-[#e3ebf3d4] p-10">
                <h3 className="text-[25px] font-semibold mb-8">{plan.title}</h3>
                <p>{plan.description}</p>
                <div className="bg-white p-4 rounded-[9px] mt-4 mb-5">
                  <p>
                    <span className="text-[20px] font-bold">${plan.price}</span>
                    /<small>{plan.period}</small>
                  </p>
                </div>
                <div className="grid gap-6">
                  <div className="flex gap-4 items-center">
                    <Image src={plan.check} width={25} alt="check" />
                    <p>{plan.description1}</p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <Image src={plan.check} width={25} alt="check" />
                    <p>{plan.description2}</p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <Image src={plan.check} width={25} alt="check" />
                    <p>{plan.description3}</p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <Image src={plan.check} width={25} alt="cancel" />
                    <p>{plan.description4}</p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <Image src={plan.cancel} width={25} alt="cancel" />
                    <p>{plan.description5}</p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <Image src={plan.cancel} width={25} alt="cancel" />
                    <p>{plan.description6}</p>
                  </div>
                </div>
                <button className="bg-[#84a17d] w-[16rem] mt-4 cursor-pointer rounded-lg py-3 px-2  transition">
                  {plan.button}
                </button>
              </div>
            );
          })}
        </div>
      </section>{" "}
</div>
  )
}
