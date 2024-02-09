const Footer = ({ defaultLanguage }) => {
    return (
        <div className="max-[800px]:text-[#f1ebd3]">
            <h2 className="text-center text-[18px] py-4" >{defaultLanguage ? '✨توسعه داده شده توسط امیرمحمد جعفری' : 'Developed by Amirmohammad Jafari✨'}</h2>
        </div>
    );
}

export default Footer;