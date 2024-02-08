import React, { useState } from "react";
import Link from "next/link";
// import image from "../../public/assets/profile.JPG";
import Image from "next/image";
import styles from './SampleWorksCard.module.css'; // Import CSS module for animations
import { FaArrowLeft } from 'react-icons/fa';


const SampleWorksCard = ({ src, title, description, url, defaultLanguage }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="w-[350px] h-[440px] flex flex-col items-center rounded-xl m-4 mx-6 box-shadow-2 p-10 pt-5  transition-all duration-500"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}

        >
            <div className="w-[310px] h-[250px] relative">
                <Image
                    src={src}
                    alt="Profile"
                    className={"object-cover w-[310px] h-[232px] rounded-lg transition duration-500 " + (isHovered ? 'scale-110' : '')}
                />
            </div>

            <div className="">
                <h2 className="text-center text-sky-500 text-[20px]">{title}</h2>
                <p className="text-[24px] pt-5 px-5 font-medium">
                    <Link
                        target="_blank"
                        href={url}
                        className={`flex cursor-pointer relative   
                        ${isHovered ? ' decoration-1 underline-offset-8 text-sky-200 ' : ""}
                        ${!defaultLanguage && 'text-left'}`}>
                        {description}

                        <span className={`inline-block ml-2 absolute  
                        ${isHovered ? styles.fadeIn : styles.fadeOut}                        
                        `}>
                            {isHovered && <FaArrowLeft
                                className={`mt-12 ${defaultLanguage ? 'mr-[185px]' : 'mr-[120px]'}  
                            text-base ${!defaultLanguage && 'rotate-180'}                        
                            ${!defaultLanguage}`} />}
                        </span>
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SampleWorksCard;