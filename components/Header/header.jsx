'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import UK from '../../public/assets/lang/uk.webp'
import Per from '../../public/assets/lang/persian.webp'


const Header = ({ languageChangeHandler, defaultLanguage, workSampleScrollHandler, mySkillsScrollHandler, ContactScrollHandler }) => {

    const [menuOpen, setMenuOpen] = useState(true);
    const [boxOpen, setBoxOpen] = useState(false)

    useEffect(() => {
        function handleResize() {
            setBoxOpen(window.innerWidth < 800);
        }

        // Set initial state based on window width
        setBoxOpen(window.innerWidth < 800);

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Remove event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const menueOpenHandler = () => {
        setMenuOpen(!menuOpen)
    }


    return (

        <nav className={"h-[80px] w-full relative flex flex-row-reverse items-center justify-between max-[800px]:bg-[#a5a3a321] max-[800px]:h-max max-[800px]:py-5 max-[800px]:flex-col-reverse" + (menuOpen ? 'max-[800px]:h-[50px] max-[800px]:overflow-hidden' : '')}>
            <div className="absolute   max-[800px]:left-3 max-[800px]:top-4" onClick={menueOpenHandler}>
                {menuOpen && boxOpen ? (
                    <svg
                        className="text-[#f1ebd3] hover:bg-[#605f5f] transition-all duration-500 cursor-pointer rounded-[50%] h-12 w-12 p-1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fillRule="evenodd"
                            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                        />
                    </svg>
                ) : (
                    !menuOpen && boxOpen && (
                        <svg
                            className="text-[#f1ebd3] hover:bg-[#605f5f] transition-all duration-500 cursor-pointer rounded-[50%] h-12 w-12 p-1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    )
                )}
            </div>

            <div className="flex max-[800px]:flex-col max-[800px]:items-center max-[800px]:p-0">
                <>
                    <ul className={`max-[800px]:hidden  flex pl-[70px] max-[800px]:pl-0 max-[800px]:pt-8  max-[800px]:flex-col max-[800px]:items-center max-[800px]:w-max ease-in`}>
                        <li className=" text-lg max-[800px]:mt-2 max-[800px]:text-[22px] max-[800px]:font-medium" onClick={workSampleScrollHandler}>
                            <Link href='/' className="hover:text-sky-400 transition duration-300">
                                {defaultLanguage ? ' نمونه کار' : 'Work samples'}
                            </Link>
                        </li>

                        <li className=" text-lg max-[800px]:mt-5 max-[800px]:text-[22px] max-[800px]:font-medium" onClick={mySkillsScrollHandler}>
                            <Link href='/' className="hover:text-sky-400 transition duration-300 mr-7 max-[800px]:mr-0">
                                {defaultLanguage ? 'مهارت های من' : 'My skills'}
                            </Link>
                        </li>

                        <li className="text-lg mr-[40px] max-[800px]:text-[22px] max-[800px]:font-medium max-[800px]:mt-5 max-[800px]:mr-0" onClick={ContactScrollHandler}>
                            <Link href='/' className="hover:text-sky-300">
                                {defaultLanguage ? 'ارتباط با من' : 'Contact'}
                            </Link>
                        </li>
                    </ul>

                    {!menuOpen && boxOpen ? <ul className={`flex pl-[70px] max-[800px]:pl-0 max-[800px]:pt-8  max-[800px]:flex-col max-[800px]:items-center max-[800px]:w-max ease-in`}>
                        <li className=" text-lg max-[800px]:mt-2 max-[800px]:text-[22px] max-[800px]:font-medium" onClick={workSampleScrollHandler}>
                            <Link href='/' className="hover:text-sky-400 transition duration-300">
                                {defaultLanguage ? ' نمونه کار' : 'Work samples'}
                            </Link>
                        </li>

                        <li className=" text-lg max-[800px]:mt-5 max-[800px]:text-[22px] max-[800px]:font-medium" onClick={mySkillsScrollHandler}>
                            <Link href='/' className="hover:text-sky-400 transition duration-300 mr-7 max-[800px]:mr-0">
                                {defaultLanguage ? 'مهارت های من' : 'My skills'}
                            </Link>
                        </li>

                        <li className="text-lg mr-[40px] max-[800px]:text-[22px] max-[800px]:font-medium max-[800px]:mt-5 max-[800px]:mr-0" onClick={ContactScrollHandler}>
                            <Link href='/' className="hover:text-sky-300">
                                {defaultLanguage ? 'ارتباط با من' : 'Contact'}
                            </Link>
                        </li>
                    </ul> : ''}

                    <Image className="max-[800px]:hidden ml-[40px] max-[800px]:ml-0 max-[800px]:mt-8 cursor-pointer" onClick={languageChangeHandler} width={50} height={50} src={!defaultLanguage ? Per : UK} />

                    {!menuOpen && boxOpen ?
                        <Image className="ml-[40px] max-[800px]:ml-0 max-[800px]:mt-8 cursor-pointer" onClick={languageChangeHandler} width={50} height={50} src={!defaultLanguage ? Per : UK} /> : ""
                    }
                </>

            </div>


            <div className="flex max-[800px]:w-full">
                <h1 className="pr-[60px] text-3xl font-bold max-[800px]:pr-4 max-[800px]:top-3">
                    {defaultLanguage ? 'امیرمحمد' : 'Amirmohammad'}
                </h1>
            </div>
        </nav>
    );
}

export default Header;

