
const WorkCard = ({ defaultLanguage, icon, title, description, }) => {
    return (
        <div className={"flex flex-col w-[350px] h-[380px] rounded m-4 mx-6 max-[800px]:mx-2 box-shadow-2 p-10  hover:pt-7 transition-all duration-500 " + (!defaultLanguage && " items-end")}>
            <div className="text-[48px] text-sky-500">
                {icon}
            </div>
            <div className={"my-5"}>
                <h2>{title}</h2>
            </div>
            <div>
                <p className={!defaultLanguage && ' text-left'}>
                    {description}
                </p>
            </div>
            <div className="mx-auto w-full">
                <a href="" className="bg-sky-500 flex justify-center px-[10px] py-2 rounded mt-5 transition duration-300 hover:bg-sky-500/80">{defaultLanguage ? 'درخواست همکاری' : 'Cooperation request'} </a>
            </div>
        </div>
    )
}

export default WorkCard;