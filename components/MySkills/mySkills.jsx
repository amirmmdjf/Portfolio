import { useState } from "react";
import Image from "next/image";
import Html from '../../public/assets/skills/html.png'
import Css from '../../public/assets/skills/css.png'
import JS from '../../public/assets/skills/javascript.png'
import React from '../../public/assets/skills/React.png'
import Next from '../../public/assets/skills/nextjs.png'
import Tailwind from '../../public/assets/skills/tailwind.png'
import Github from '../../public/assets/skills/github.png'


const MySkills = ({ defaultLanguage }) => {
    const [mySkills] = useState([
        { image: Html, title: 'HTML' },
        { image: Css, title: 'CSS' },
        { image: JS, title: 'Javascript' },
        { image: React, title: 'ReactJS' },
        { image: Next, title: 'NextJS' },
        { image: Tailwind, title: 'Tailwind' },
        { image: Github, title: 'Github' }
    ])

    return (
        <div id="my-skills" className="mb-[70px]">
            <h1 className="text-center text-[40px] py-5 pb-12 font-semibold">{defaultLanguage ? 'ابزار هایی که من استفاده میکنم' : 'The tools I use'}</h1>
            <ul className="flex flex-wrap  justify-center">
                {mySkills.map((item) => (
                    <li key={item.title}
                        className=" bg-[#efedec] ml-10 mr-10 mt-5 mb-10 rounded-lg px-10 
                    text-black w-[300px] flex flex-col justify-center items-center box-shadow-2"
                    >
                        <Image src={item.image} height={150} width={150}  />
                        <h2 className="font-semibold my-3 text-gray-800">{item.title}</h2>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MySkills;