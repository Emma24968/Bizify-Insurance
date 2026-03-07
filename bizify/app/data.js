import Image from "next/image";
import logo1 from "@/public/logo1_1.png";
import logo2 from "@/public/logo2_1.png";
import logo3 from "@/public/logo3_1.png";
import logo4 from "@/public/logo4_1.png";
import logo5 from "@/public/logo5_1.png";
import logo6 from "@/public/logo6_1.png";
import digital from '@/public/Digital.jpg'
import design from '@/public/market.jpg'
import robotics from '@/public/Robotics.jpg'
import development from '@/public/web-dev.jpg'
import abstract from '@/public/Abstract.png'
import experience from '@/public/experience.svg'


export const clients = [logo1, logo2, logo3, logo4, logo5, logo6];
// const services = [{digital},design,robotics,development]
export const services = [
    {
        image:robotics,
        title:'Robotics',
    },
    {
        image:development,
        title:'Web Development',
    },
    {
        image:design,
        title:'UI/UX Design',
    },
    {
        image:digital,
        title:'Digital Marketing',
    },
]

export const about =[
    {
        image:digital,
        logo:experience
    },
    {
        image:design,
        logo:abstract
    },
]

