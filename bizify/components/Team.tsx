import { Instagram, Linkedin, TwitterIcon } from "lucide-react";
import { teams } from "@/app/data";
import Image from "next/image";
import React from "react";

export default function Team() {
  return (
    <div>
      <section className="justify-items-center mb-[4rem]">
        <h3 className="text-5xl font-bold text-center my-15">
          Our team is always <br /> here for you
        </h3>
        <div className="flex gap-9 ">
          {teams.map((team, index) => {
            return (
              <div key={index} className="rounded-lg group relative">
                <div className="absolute ml-4 mt-5 text-[#191818]  opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col gap-3">
                  <a href="#">
                    {" "}
                    <Linkedin />
                  </a>
                  <a href="#">
                    <Instagram />
                  </a>
                  <a href="#">
                    <TwitterIcon />
                  </a>
                </div>
                <Image
                  src={team.image}
                  alt={team.name}
                  height={478}
                  className="rounded-t-xl"
                  width={250}
                />
                <div className="text-center rounded-b-xl bg-[#e3ebf3d4]">
                  <p className=" text-[15px] font-bold">{team.name}</p>
                  <p>{team.position}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
