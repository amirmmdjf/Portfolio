'use client'
import Image from "next/image";
import Profile from '../../public/assets/profile.JPG'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Link from "next/link";

const Biography = ({ defaultLanguage }) => {

    return (
        <div className="max-w-full h-[640px] flex mb-[50px] max-[1140px]:flex-col max-[1140px]:items-center max-[1140px]:mt-[50px]  max-[1140px]:mb-[400px]">

            <div className="flex justify-end items-center w-6/12 max-[1140px]:w-[500px] max-[700px]:w-[350px] max-[400px]:w-[300px] h-full ">
                <div className="w-[500px]  border-[10px] border-[#454545] rounded-xl ml-16 max-[1140px]:ml-0 ">
                    <Image src={Profile} alt="profile" className="rounded-lg" />
                </div>
            </div>

            <div className='w-6/12 max-[1140px]:w-[370px] max-w-fit h-full flex items-center '>
                <div className={`flex flex-col w-[550px] mr-5 max-[1140px]:w-[400px] max-[1140px]:mr-0 max-[1140px]:mt-5 max-[1140px]:items-center ${!defaultLanguage ? 'items-end max-[1140px]:items-center' : 'max-[1140px]:items-center'}`}>
                    <h1 className="font-bold mb-2">{defaultLanguage ? 'امیرمحمد هستم' : 'I am Amirmohammad'} </h1>
                    <h2 className="font-bold mb-8">{defaultLanguage ? 'توسعه دهنده فرانت اند وبسایت' : 'a Front-end Developer'}</h2>

                    <p className={'leading-relaxed text-justify tracking-normal text-[16px]' + (!defaultLanguage ? ' !text-left' : '')}>                        {defaultLanguage ? 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان داشت که تمام و دشواری موجود در ارائه راهکارها،و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.' :
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
                    }
                    </p>

                    <div className="mt-5 max-[1140px]:mt-10 max-[1140px]:flex max-[1140px]:flex-col max-[1140px]:mb-5  max-[1140px]:items-center">
                        <h4 className={'font-extralight max-[1140px]:text-center' + (!defaultLanguage && ' text-left ')}>
                            {defaultLanguage ? 'شبکه های اجتماعی من:' : ':My social media'}
                        </h4>

                        <ul className="flex mt-5 py-2">
                            <Link href='/' className="p-5 box-shadow-1 shadow-gray-200 rounded-md ml-4 hover:bg-[#3b3b3b] transition duration-300">
                                <li>
                                    <FaGithub className="text-lg" />
                                </li>
                            </Link>
                            <Link href='/' className="p-5 box-shadow-1 rounded-md ml-4 hover:bg-[#3b3b3b] transition duration-300">
                                <li>
                                    <FaInstagram className="text-lg" />
                                </li>
                            </Link>
                            <Link href='/' className="p-5 box-shadow-1 rounded-md hover:bg-[#3b3b3b] transition duration-300">
                                <li>
                                    <FaLinkedin className="text-lg" />
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Biography;