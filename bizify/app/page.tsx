import Image from "next/image";
import group_profile from "@/public/group_profile.png";
import hero_image from "@/public/hero-image.jpg";
import clients from "@/app/data";
import icon from '@/public/Icon.png'

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
      <section>
        <div className="">
          <h3>
            Amazing <br /> solutions for <br /> business
          </h3>
          <p>
            With over 25 years of experience, we have crafted thousands of{" "}
            <br /> Strategic discovery process that enables us peelback
            thousands <br /> which enable us to understand.
          </p>
          <div className="
          grid"></div>
        </div>
        <div className=""></div>
      </section>
    </div>
  );
}
