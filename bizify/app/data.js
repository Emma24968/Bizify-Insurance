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
import cancel from "@/public/cancel.svg";
import team1 from "@/public/Team1.jpg";
import team2 from "@/public/Team2.jpg";
import team3 from "@/public/Team3.jpg";
import team4 from "@/public/Team4.jpg";
import ig1 from "@/public/ig1.jpg";
import ig2 from "@/public/ig2.jpg";
import ig4 from "@/public/ig4.jpg";
import ig3 from "@/public/ig3.jpg";
import ig5 from "@/public/ig5.jpg";
import ig6 from "@/public/ig6.jpg";
import project1 from "@/public/project1.webp";
import project2 from "@/public/project2.webp";
import project3 from "@/public/project3.webp";
import project4 from "@/public/project4.webp";
import blog1 from "@/public/blog1.jpg";
import blog2 from "@/public/blog2.jpg";
import blog3 from "@/public/blog3.jpg";

export const gallerys=[ig1,ig2,ig3,ig4,ig5,ig6]
export const clients = [logo1, logo2, logo3, logo4, logo5, logo6];
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
  { image: team1, name: "Brooklyn Simmons", position: "Founder" },
  { image: team3, name: "Sophia Rodriguez", position: "Creative Director" },
  { image: team2, name: "Marvin McKinney", position: "Product Designer" },
  { image: team4, name: "Alexander Cameron", position: "Lead Developer" },
];

export const projects = [
  {
    image: project1,
    title: "Cryptocurrency",
    description: "Skill Development",
  },
  {
    image: project3,
    title: "Design & Development",
    description: "Website Development",
  },
  { image: project4, title: "UI/UX Design", description: "Design" },
  {
    image: project2,
    title: "Business Development",
    description: "Business Planning",
  },
];



export const plans = [
  {
    title: "Basic Plan",
    description: "Perfect plan to get started",
    price: "00.00",
    period: "month",
    check: check,
    cancel: cancel,
    description1: "Limited Access Library",
    description2: "Commercia License",
    description3: "Hotline Support 24/7",
    description4: "100+ HTML UI Elements",
    description5: "WooCommerce Builder",
    description6: "Updates for 1 Year",
    button: "Get Your Plan",
  },
  {
    title: "Standard Plan",
    description: "Perfect plan to get started",
    price: "49.00",
    period: "month",
    check: check,
    cancel: cancel,
    description1: "Limited Access Library",
    description2: "Commercia License",
    description3: "Hotline Support 24/7",
    description4: "100+ HTML UI Elements",
    description5: "WooCommerce Builder",
    description6: "Updates for 1 Year",

    button: "Get Your Plan",
  },
  {
    title: "Premium Plan",
    description: "Perfect plan to get started",
    price: "49.00",
    period: "month",
    check: check,
    cancel: cancel,
    description1: "Limited Access Library",
    description2: "Commercia License",
    description3: "Hotline Support 24/7",
    description4: "100+ HTML UI Elements",
    description5: "WooCommerce Builder",
    description6: "Updates for 1 Year",

    button: "Get Your Plan",
  },
];
 export const blogs=[
  blog1,blog2,blog3
 ]