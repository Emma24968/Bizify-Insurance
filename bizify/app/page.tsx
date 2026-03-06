import Image from "next/image";
import group_profile from '@/public/group_profile.png'
import hero_image from '@/public/hero-image.jpg'

export default function Home() {
  return (
    <main>
      <section className="">
        <div className="">
          <h1 className="text-5xl font-bold ">
            Get Digital <br />
            Products For <br />
            Business
          </h1>
          <p className="">
            Charts are the visual storytellers of your dashboard and admin
            <br></br>
            template. They distill complex data into visuals.
          </p>
          <div className="flex gap-6">
            <button className="">Our Services</button>
          <button className="">Contact Us</button>
          </div>
          <div className="flex">
                      <Image src={group_profile} alt='group profile'/>
          <p>more than 10k+ trusted customers</p>

          </div>
        </div>
        <div className="">
        </div>
      </section>
    </main>
  );
}
