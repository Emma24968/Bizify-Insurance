import React from 'react'
import Image from 'next/image';
import { clients } from '@/app/data';
export default function Client() {
  return (
    <div>      <section className="text-center py-16">
        <h3 className="mb-16 text-xl font-bold">
          We’ve worked on over 150 projects <br /> with 100+ clients
        </h3>
        <div className="flex gap-4 justify-center">
          {clients.map((client, index) => {
            return (
              <div key={index}>
                {" "}
                <Image src={client} alt="client" />
              </div>
            );
          })}
        </div>
      </section>
</div>
  )
}
