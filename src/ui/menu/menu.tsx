import { useNavigate } from 'react-router-dom';
import menu_img from '../../assets/bg/bg-menu.png'
import { Image } from '../img/image'
import close_icon from '../../assets/icon-close/icon-close.png'
import menu_img_mobile from '../../assets/bg/bg-menu-res.png'
import { useEffect } from 'react';
import { useLocalization } from '../../context/useLocalization';



const items = [
  {
    title: 'Unique features',
    title_it: 'Caratteristiche uniche',
    id: 'features',
    offset: -130
  },
  {
    title: 'Essence of Pigna',
    title_it: 'Essenza di Pigna',
    id: 'essence-of-pigna',
    offset: -120
  },
  {
    title: 'Location',
    title_it: 'Posizione',
    id: 'location',
    offset: -120
  },
  {
    title: 'Wellness & Spa',
    title_it: 'Benessere & Spa',
    id: 'wellness-spa',
    offset: 0
  },
  {
    title: 'Cuisine',
    title_it: 'Cucina',
    id: 'cuisine',
    offset: -120
  },
  {
    title: 'Building & Territory',
    title_it: 'Architettura & Territorio',
    id: 'building-territory',
    offset: -120
  },
  {
    title: 'Architecture',
    title_it: 'Architettura',
    id: 'architecture',
    offset: -120
  },
  {
    title: 'Project Timeline',
    title_it: 'Pianificazione progetto',
    id: 'project-timeline'
  },
  {
    title: 'Invest the project',
    title_it: 'Investimento',
    id: 'invest'
  },
]

const Menu = ({isMenuOpen, setIsMenuOpen}: {isMenuOpen: boolean, setIsMenuOpen: (isMenuOpen: boolean) => void}) => {

  const {locale} = useLocalization();

  const navigate = useNavigate();
  const scrollToSection = (sectionId: string, offset: number = 0) => {

    if (sectionId === 'invest') {
      navigate('/registration');
      setIsMenuOpen(false);
      return
    }
    navigate('/main');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition + offset;

          window.scrollTo({
            top: offsetPosition,
              behavior: 'smooth'
          });
      }
      setIsMenuOpen(false);
    }, 100);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);


  return (
      <div className={`z-40 overflow-scroll sm:pb-6 lg:pb-0 fixed top-20 left-0 w-full h-[calc(100dvh-80px)] flex  sm:flex-col 2lg:flex-row sm:gap-10 2lg:gap-0 transform transition-transform duration-300 ease-in-out bg-loading-color ${
          isMenuOpen ? '-translate-y-0' : '-translate-y-[calc(100%+200px)]'
      }`}>
        <Image src={menu_img} alt='menu' className='2lg:w-2/5 sm:w-full 2lg:h-full sm:h-1/5 md:block sm:hidden'/>
        <Image src={menu_img_mobile} alt='menu' className='sm:block md:hidden'/>
        <div className='w-3/5 flex xl:pl-60 lg:pl-20 sm:pl-10 items-center relative'>
          <div className='2lg:flex justify-end items-end absolute top-10 right-20 sm:hidden'>
            <div className='cursor-pointer' onClick={() => setIsMenuOpen(false)}>
              <Image src={close_icon} alt='close' className='text-main-white text-4xl font-patrizia'/>
            </div>
          </div>
          <ul className='flex flex-col justify-start items-start 2lg:gap-8 sm:gap-4'>
            {items.map((item, index) => (
              <li key={index} className='text-main-white 2lg:text-4xl sm:text-base font-patrizia cursor-pointer uppercase transition duration-300 ease-in-out hover:opacity-70' onClick={() => scrollToSection(item.id, item.offset)}>
                {locale === "ENG" ? item.title : item.title_it}
                </li>
            ))}
          </ul>
        </div>
      </div>
  )
}

export {Menu}