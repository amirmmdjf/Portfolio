import SampleWorksCard from '../SampleWork/sampleWorksCard.jsx'
import Starbucks from '../../public/assets/sampleWorks/Starbucks.webp'
import Weather from '../../public/assets/sampleWorks/Weather.webp'
import Moon from '../../public/assets/sampleWorks/Moon.webp'
import ToDoList from '../../public/assets/sampleWorks/ToDoList.webp'
import Dictionary from '../../public/assets/sampleWorks/Dictionary.webp'
import SignupPage from '../../public/assets/sampleWorks/SignupPage.webp'



const SampleWork = ({ defaultLanguage }) => {
    return (
        <div className="pt-10 pb-20" id="workSamples">

            <h2 className="text-center text-[26px] text-sky-500">
                {defaultLanguage ? 'نمونه کار های من رو ببینید' : 'See my sample works'}
            </h2>

            <h1 className="text-center text-[50px] py-5 pb-12 font-semibold">
                {defaultLanguage ? 'نمونه کارهای من' : 'My sample works'}
            </h1>

            <div className='flex justify-center flex-wrap'>

                <SampleWorksCard
                    src={Starbucks}
                    title={defaultLanguage ? 'پروژه استارباکس' : 'Starbucks project'}
                    url='https://starbucks-r1nsywetj-amirmmdjf.vercel.app/'
                    description={defaultLanguage ? 'طراحی پروژه وبسایت استارباکس' : 'Develop Starbucks project'}
                    defaultLanguage={defaultLanguage}
                />

                <SampleWorksCard
                    src={Weather}
                    title={defaultLanguage ? 'پروژه آب و هوا' : 'Weather website'}
                    url='https://amirmmdjf.github.io/Weather-App/'
                    description={defaultLanguage ? 'طراحی پروژه وبسایت آب و هوا' : 'Develop weather website'}
                    defaultLanguage={defaultLanguage}
                />

                <SampleWorksCard
                    src={Moon}
                    title={defaultLanguage ? 'پروژه ماه' : 'Moon project'}
                    url='https://amirmmdjf.github.io/Moon/'
                    description={defaultLanguage ? 'طراحی پروژه وبسایت ماه' : 'Develop Moon website'}
                    defaultLanguage={defaultLanguage}
                />

                <SampleWorksCard
                    src={ToDoList}
                    title={defaultLanguage ? 'پروژه تودو لیست' : 'ToDoList project'}
                    url='https://amirmmdjf.github.io/Todo-List-Reactjs/'
                    description={defaultLanguage ? 'طراحی پروژه وبسایت تودو لیست' : 'Develop ToDoList website'}
                    defaultLanguage={defaultLanguage}
                />

                <SampleWorksCard
                    src={Dictionary}
                    title={defaultLanguage ? 'پروژه دیکشنری' : 'Dectionary project'}
                    url='https://amirmmdjf.github.io/Dictionary-/'
                    description={defaultLanguage ? 'طراحی پروژه وبسایت دیکشنری' : 'Develop dectionary website'}
                    defaultLanguage={defaultLanguage}
                />

                <SampleWorksCard
                    src={SignupPage}
                    title={defaultLanguage ? 'پروژه صفحه ثبت نام' : 'Signup project'}
                    url='https://amirmmdjf.github.io/Signup-Page/'
                    description={defaultLanguage ? 'طراحی پروژه وبسایت صفحه ثبت نام' : 'Develop Signup project'}
                    defaultLanguage={defaultLanguage}
                />

            </div>
        </div>
    );
}

export default SampleWork;