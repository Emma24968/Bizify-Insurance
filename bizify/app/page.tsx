import Image from "next/image";
import group_profile from "@/public/group_profile.png";
import hero_image from "@/public/hero-image.jpg";
import { clients, services, cards, card2, checks } from "@/app/data";
import icon from "@/public/Icon.png";
import audit from "@/public/audit.jpg";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div>
      <section className=" grid grid-cols-2 text-white w-full  ">
        <div className=" bg-[#153C3C] flex flex-col justify-center px-16 py-15">
          <h1 className="text-5xl font-bold leading-tight">
            Get Digital <br />
            Products For <br />
            Business
          </h1>
          <p className="my-10">
            Charts are the visual storytellers of your dashboard and admin
            <br></br>
            template. They distill complex data into visuals.
          </p>
          <div className="flex gap-6">
            <button className="bg-[#84a17d] rounded-lg py-3 px-6">
              Our Services
            </button>
            <button className="bg-[#fff] text-black rounded-lg py-3 px-6">
              Contact Us
            </button>
          </div>
          <div className="flex my-4 gap-3 items-center">
            <Image src={group_profile} alt="group profile" />
            <p>more than 10k+ trusted customers</p>
          </div>
        </div>
        <div className="">
          {" "}
          <Image src={hero_image} alt="hero-image" className="object-cover" />
        </div>
      </section>

      <section className="text-center py-16">
        <h3 className="mb-16 text-xl font-bold">
          We’ve worked on over 150 projects <br /> with 100+ clients
        </h3>
        <div className="flex gap-4 justify-center">
          {clients.map((client, index) => {
            return (
              <div>
                {" "}
                <Image src={client} alt="client" key={index} />
              </div>
            );
          })}
        </div>
      </section>
      <section className="py-16 px-20">
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
      <section className="bg-[#f4f5f6] py-16 flex gap-20 px-[5rem]">
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
          <h3 className="text-5xl font-bold ">We are the top digital marketer Company</h3>
          <p >
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
More About Us            </button>
        </div>
      </section>
      <section> 
        <h3>Our team is always here for you</h3>
      </section>
    </div>
  );
}
