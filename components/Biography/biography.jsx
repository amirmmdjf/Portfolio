'use client'
import Image from "next/image";
import Profile from '../../public/assets/profile.JPG'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Link from "next/link";

const Biography = ({ defaultLanguage }) => {

    return (
        <div className="max-w-full h-[640px] flex mb-[50px] max-[800px]:mt-[100px]">

            <div className="flex justify-end items-center w-6/12 h-full ">
                <div className="w-[500px] h-[482px] border-[16px] border-[#2e3033] rounded-xl ml-16 ">
                    <Image src={Profile} alt="profile" width={500}/>
                </div>
            </div>

            <div className='w-6/12 max-w-fit h-full flex items-center'>
                <div className={"flex flex-col w-[550px] mr-5 " + (!defaultLanguage && 'items-end')}>
                    <h1 className="font-bold mb-2">{defaultLanguage ? 'امیرمحمد هستم' : 'I am Amirmohammad'} </h1>

                    <h2 className="font-bold mb-8">{defaultLanguage ? 'توسعه دهنده فرانت اند وبسایت' : 'a Front-end Developer'}</h2>

                    <p className={'leading-relaxed tracking-normal text-[16px]' + (!defaultLanguage && ' text-left')}>
                        {defaultLanguage ? 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان داشت که تمام و دشواری موجود در ارائه راهکارها،و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.' :
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                        }
                    </p>

                    <div className="mt-5">
                        <h4 className={'font-extralight' + (!defaultLanguage && ' text-left')}>
                            {defaultLanguage ? 'شبکه های اجتماعی من:' : 'My social media'}
                        </h4>

                        <ul className="flex mt-5 py-2">
                            <Link href='/' className="p-5 box-shadow-1 rounded-md ml-4 hover:bg-[#232323] transition duration-300">
                                <li>
                                    <FaGithub className="text-lg" />
                                </li>
                            </Link>
                            <Link href='/' className="p-5 box-shadow-1 rounded-md ml-4 hover:bg-[#232323] transition duration-300">
                                <li>
                                    <FaInstagram className="text-lg" />
                                </li>
                            </Link>
                            <Link href='/' className="p-5 box-shadow-1 rounded-md hover:bg-[#232323] transition duration-300">
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