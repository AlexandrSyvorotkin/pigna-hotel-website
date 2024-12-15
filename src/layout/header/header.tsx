import { useEffect, useState } from 'react'
import {HeaderControls} from "../../components/header-controls/header-controls"
import { Logo } from "../../components/logo/logo"
import { useLocation, useNavigate } from 'react-router-dom';
import {Image} from "../../ui/img/image"
import icon_menu from '../../assets/icon-menu/IconMenu.svg'


const Header = ({openMenu, isMenuOpen}: {openMenu: () => void, isMenuOpen: boolean}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const location = useLocation();
  const isPrivacyPage = location.pathname === "/privacy" || location.pathname === "/*" || location.pathname === "/registration";
  const isDocsPage = location.pathname === "/docs";

  const headerClasses = {
    default: 'bg-transparent text-main-white border-b border-main-white',
    scrolled: 'bg-main-white text-black border-b border-[#1A1515]',
    loading: 'bg-loading-color text-main-white border-b border-main-white',
  };

  const navigate = useNavigate();

  const currentClass = isMenuOpen || isPrivacyPage 
    ? headerClasses.loading 
    : isDocsPage // добавлено условие для страницы документов
      ? isScrolled // проверка на прокрутку для страницы документов
        ? headerClasses.scrolled // фон белый при прокрутке
        : headerClasses.default // фон прозрачный, когда не прокручено
      : isScrolled 
        ? headerClasses.scrolled 
        : headerClasses.default;

  if (location.pathname === "/") {
    return null;
  }

  return (
    <header className={`font-helvetica fixed top-0 w-full h-20 lg:px-[84px] sm:px-[18px] mg:[42px] py-5 flex justify-between items-center transition-all duration-300 z-40 ${currentClass}`}>
      <HeaderControls openMenu={openMenu}/>
      <Logo/>
      <span className="text-base sm:hidden lg:block" onClick={() => navigate("/registration")}>INVEST THE PROJECT</span>
      <div className="sm:block lg:hidden">
        <Image src={icon_menu} alt="logo" />
      </div>
    </header>
  )
}
 
export { Header }
