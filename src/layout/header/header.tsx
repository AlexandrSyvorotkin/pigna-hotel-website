import { useEffect, useState } from 'react'
import {HeaderControls} from "../../components/header-controls/header-controls"
import { Logo } from "../../components/logo/logo"


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



  return (
    <header className={`font-helvetica fixed top-0 w-full h-20 px-[84px] py-5 flex justify-between items-center transition-all duration-300 z-50 ${
      isMenuOpen 
        ? 'bg-loading-color text-white border-b border-white'
        : isScrolled 
          ? 'bg-white text-black border-b border-[#1A1515]' 
          : 'bg-transparent text-white border-b border-white'
    }`}>
      <HeaderControls openMenu={openMenu}/>
      <Logo/>
      <span>INVEST THE PROJECT</span>
    </header>
  )
}
 
export { Header }
