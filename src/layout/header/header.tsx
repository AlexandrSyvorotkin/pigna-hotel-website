import { useEffect, useState } from 'react'
import {HeaderControls} from "../../components/header-controls/header-controls"
import { Logo } from "../../components/logo/logo"
import { useLocation } from 'react-router-dom';


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
    <header className={`font-helvetica fixed top-0 w-full h-20 px-[84px] py-5 flex justify-between items-center transition-all duration-300 z-40 ${currentClass}`}>
      <HeaderControls openMenu={openMenu}/>
      <Logo/>
      <span>INVEST THE PROJECT</span>
    </header>
  )
}
 
export { Header }
