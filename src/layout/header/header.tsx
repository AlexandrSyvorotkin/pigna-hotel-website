import { useEffect, useState } from "react";
import { HeaderControls } from "../../components/header-controls/header-controls";
import { Logo } from "../../components/logo/logo";
import { useLocation, useNavigate } from "react-router-dom";
import { Image } from "../../ui/img/image";
import icon_menu from "../../assets/icon-menu/IconMenu.svg";
// import icon_menu_black from "../../assets/icon-menu/IconMenuBlack.svg";
import Cookies from "js-cookie";
import { useLocalization } from "../../context/useLocalization";
import starWhiteHeader from "../../assets/starWhiteHEader.svg";
// import starBlackHeader from "../../assets/startBlackHeader.svg";


const Header = ({
  openMenu,
  isMenuOpen,
}: {
  openMenu: () => void;
  isMenuOpen: boolean;
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const location = useLocation();
  const isPrivacyPage =
    location.pathname === "/privacy" ||
    location.pathname === "/*" ||
    location.pathname === "/registration";
  const isDocsPage = location.pathname === "/docs";

  const headerClasses = {
    default: "bg-transparent text-main-white border-b border-main-white",
    scrolled: "bg-loading-color text-main-white border-b border-main-white",
    loading: "bg-loading-color text-main-white border-b border-main-white",
  };

  const navigate = useNavigate();

  const currentClass =
    isMenuOpen || isPrivacyPage
      ? headerClasses.loading
      : isDocsPage // добавлено условие для страницы документов
      ? isScrolled // проверка на прокрутку для страницы документов
        ? headerClasses.scrolled // фон белый при прокрутке
        : headerClasses.default // фон прозрачный, когда не прокручено
      : isScrolled
      ? headerClasses.scrolled
      : headerClasses.default;

  
  
  const cookie = Cookies.get("cookie");


  const { locale } = useLocalization();
  const enterText = locale === 'ENG' ? 'invest the project' : 'Investi nel progetto';


  const btnText = cookie && cookie.trim().length > 0 ? 'invest the project' : enterText;

  const navigateHandler = () => {
    if (cookie && cookie.trim().length > 0) {
      navigate("/docs");
    } else {
      navigate("/registration");
    }
  };

  if (location.pathname === "/") {
    return null;
  }

  return (
    <header
      className={`font-helvetica fixed top-0 w-full h-20 lg:px-[84px] sm:px-[18px] mg:[42px] py-5 flex justify-between items-center transition-all duration-300 z-40 ${currentClass}`}
    >
      <HeaderControls openMenu={openMenu} />
      <Logo size="sm" color="white" img={isScrolled && !isPrivacyPage &&!isMenuOpen ? starWhiteHeader : starWhiteHeader} content={
        <>
        <span className="md:text-xs sm:text-[8px] font-patrizia">GRAND</span>
        <span className="md:text-2xl sm:text-base font-patrizia">PIGNA</span>
        <span className="md:text-xs sm:text-[8px] font-patrizia">HOTEL</span>
        </>
      }/>
      <span
        className="text-base sm:hidden lg:block cursor-pointer transition duration-300 ease-in-out hover:opacity-70 uppercase"
        onClick={navigateHandler}
    >
        {btnText}
      </span>
      <div className="sm:block sm:w-10 lg:hidden" onClick={openMenu}>
        <Image src={icon_menu} alt="logo" />
      </div>
    </header>
  );
};

export { Header };
