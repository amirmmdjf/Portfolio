import { useState } from "react";
import Image from "next/image";
import LinkedIn from '../../public/assets/social/LinkedIn.png'
import Github from '../../public/assets/social/Github.png'
import Instagram from '../../public/assets/social/Instagram.png'
import Telegram from '../../public/assets/social/telegram.png'

const Contact = ({ defaultLanguage }) => {
    const [socialData, setSocialData] = useState([
        { title: 'LinkedIn', logo: LinkedIn, url: 'https://www.linkedin.com/in/amirmohammad-jafari-9052b7241/' },
        { title: 'Github', logo: Github, url: 'https://github.com/amirmmdjf' },
        { title: 'Instagram', logo: Instagram, url: 'https://www.instagram.com/_amirmmdjf/' },
        { title: 'Telegram', logo: Telegram, url: 'https://t.me/amirmmdjf' },
    ])

    return (
        <div id="contact" className="mt-50 mb-[100px]">
            <h1 className="text-center text-[40px] py-5 pb-12 font-semibold">{defaultLanguage ? 'راه های ارتباطی' : 'Ways of communication'}</h1>
            <p className="text-center text-[26px] text-sky-500">{defaultLanguage ? 'شبکه های اجتماعی من': 'My social networks'}</p>
            <div>
                <ul className="flex justify-center flex-row-reverse mt-20">
                    {socialData.map((item, index) => (
                        <li key={index} className=" box-shadow-2 mx-5 px-10 py-3 cursor-pointer bg-[#efedec] hover:bg-white transition duration-300 text-black rounded-lg">
                            <a href={item.url} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center">
                                <Image src={item.logo} alt={item.title} width={100} height={100} />
                                <h2 className="text-[18px] font-semibold pt-2">{item.title}</h2>
                            </a>
                        </li>
                    ))}
                </ul>
                <h2 className="text-center bg-[#efedec] mt-20 text-black max-w-fit m-auto px-8 py-3 rounded-lg box-shadow-2">My Email: <span className="font-semibold">amirmmdjf2006@gmail.com</span></h2>
            </div>
        </div>
    );
}

export default Contact;
