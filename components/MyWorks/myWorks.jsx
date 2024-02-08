import WorkCard from "./worksCard.jsx";
import { FaCode, FaDesktop, FaLayerGroup, FaMobileAlt, FaPaintBrush, FaMagic } from 'react-icons/fa';

const MyWorks = ({ defaultLanguage }) => {

    return (
        <div className="px-[150px] mb-[80px]">
            <h1 className={"text-5xl font-bold mb-[90px] text-center" }>{defaultLanguage ? 'کارهای من' : 'My works'}</h1>
            <div className="flex flex-wrap">

                <WorkCard
                    icon={<FaDesktop />}
                    title={defaultLanguage ? 'طراحی سایت' : 'Website design'}
                    description={defaultLanguage ? 'طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند که محتوای اصلی صفحات آماده نیست. در نتیجه طرح کلی دید درستی به کار فرما نمیدهد.' :
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat '}
                    defaultLanguage={defaultLanguage}
                />

                <WorkCard
                    icon={<FaLayerGroup />}
                    title={defaultLanguage ? 'توسعه اپ' : 'Develop App'}
                    description={defaultLanguage ? 'طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند که محتوای اصلی صفحات آماده نیست. در نتیجه طرح کلی دید درستی به کار فرما نمیدهد.' :
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat '}
                    defaultLanguage={defaultLanguage}
                />

                <WorkCard
                    icon={<FaCode />}
                    title={defaultLanguage ? 'کدنویسی اختصاصی' : 'Dedicated coding'}
                    description={defaultLanguage ? 'طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند که محتوای اصلی صفحات آماده نیست. در نتیجه طرح کلی دید درستی به کار فرما نمیدهد.' :
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat '}
                    defaultLanguage={defaultLanguage}
                />

                <WorkCard
                    icon={<FaMobileAlt />}
                    title={defaultLanguage ? 'ریسپانسیو قالب ها' : 'Responsive template'}
                    description={defaultLanguage ? 'طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند که محتوای اصلی صفحات آماده نیست. در نتیجه طرح کلی دید درستی به کار فرما نمیدهد.' :
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat '}
                    defaultLanguage={defaultLanguage}
                />

                <WorkCard
                    icon={<FaPaintBrush />}
                    title={defaultLanguage ? 'طراحی UI و UX' : 'UI, UX Design'}
                    description={defaultLanguage ? 'طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند که محتوای اصلی صفحات آماده نیست. در نتیجه طرح کلی دید درستی به کار فرما نمیدهد.' :
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat '}
                    defaultLanguage={defaultLanguage}
                />

                <WorkCard
                    icon={<FaMagic />}
                    title={defaultLanguage ? 'بهینه سازی سایت' : 'Optimizeation'}
                    description={defaultLanguage ? 'طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند که محتوای اصلی صفحات آماده نیست. در نتیجه طرح کلی دید درستی به کار فرما نمیدهد.' :
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat '}
                    defaultLanguage={defaultLanguage}
                />
            </div>
        </div>
    )
}

export default MyWorks;