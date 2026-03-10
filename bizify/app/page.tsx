import Image from "next/image";
import {
  clients,
  services,
  cards,
  card2,
  checks,
  teams,
  projects,
  plans,
  blogs,
} from "@/app/data";
import icon from "@/public/Icon.png";
import quote from "@/public/Icon.svg";
import audit from "@/public/audit.jpg";
import ai from "@/public/ai.jpg";
import admin from "@/public/admin.svg";
import comment from "@/public/comment.svg";
import {
  ArrowRight,
  Linkedin,
  Instagram,
  TwitterIcon,
  ArrowUpRight,
  ChevronRight,
  ChevronLeft,
  Star,
} from "lucide-react";

export default function Home() {
  return (
    <div>
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
      <section className="text-center my-18">
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
      <section className="relative text-center bg-gray-300 py-16 flex flex-col items-center">
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
      <section className="px-16 py-16">
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

          {/* Blog List */}
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
      <section className="bg-[#84a17d] text-white text-center py-20 flex flex-col items-center justify-center gap-6">
        <h3 className="text-4xl font-bold">Let’s work together</h3>

        <p>
          Each demo built with Teba will look different. You can customize
          anything <br />
          about the appearance of your website with only a few clicks.
        </p>

        <button className="bg-white text-black rounded-lg py-3 px-6 font-medium hover:bg-gray-200 transition">
          Let's Start a Project
        </button>
      </section>{" "}
    </div>
  );
}
