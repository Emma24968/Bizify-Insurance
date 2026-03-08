import Image from "next/image";
import logo1 from "@/public/logo1_1.png";
import logo2 from "@/public/logo2_1.png";
import logo3 from "@/public/logo3_1.png";
import logo4 from "@/public/logo4_1.png";
import logo5 from "@/public/logo5_1.png";
import logo6 from "@/public/logo6_1.png";
import digital from "@/public/Digital.jpg";
import design from "@/public/market.jpg";
import robotics from "@/public/Robotics.jpg";
import core from "@/public/core.jpg";
import value from "@/public/value.jpg";
import development from "@/public/web-dev.jpg";
import abstract from "@/public/Abstract.png";
import experience from "@/public/experience.svg";
import check from "@/public/check.svg";
import team1 from '@/public/Team1.jpg'
import team2 from '@/public/Team2.jpg'
import team3 from '@/public/Team3.jpg'
import team4 from '@/public/Team4.jpg'

export const clients = [logo1, logo2, logo3, logo4, logo5, logo6];
// const services = [{digital},design,robotics,development]
export const services = [
  {
    image: robotics,
    title: "Robotics",
  },
  {
    image: development,
    title: "Web Development",
  },
  {
    image: design,
    title: "UI/UX Design",
  },
  {
    image: digital,
    title: "Digital Marketing",
  },
];

export const cards = [
  {
    image: core,
    logo: experience,
  },
];
export const card2 = [
  {
    image: value,
    logo: abstract,
  },
];
export const checks = [
  { image: check, description: "100% Better Results" },
  { image: check, description: "Promised Timeline" },
  { image: check, description: "Budget Friendly Theme" },
  { image: check, description: "Happy Customers" },
];
export const teams = [
  {image:team1,
    name:'Brooklyn Simmons',
    position:'Founder'
  },
  {image:team3,
    name:'Sophia Rodriguez',
    position:'Creative Director'
  },
  {image:team2,
    name:'Marvin McKinney',
    position:'Product Designer'
  },
  {image:team4,
    name:'Alexander Cameron',
    position:'Lead Developer'
  },
]
