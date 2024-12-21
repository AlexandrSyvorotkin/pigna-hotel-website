import menu_img from '../../assets/bg/bg-menu.png'
import { Image } from '../img/image'

const items = [
  {
    title: 'Unique features',
    id: 'essence-of-pigna'
  },
  {
    title: 'Essence of Pigna',
    id: '/'
  },
  {
    title: 'Location',
    id: 'location'
  },
  {
    title: 'Wellness & Spa',
    id: 'wellness-spa'
  },
  {
    title: 'Cuisine',
    id: 'cuisine'
  },
  {
    title: 'Building & Territory',
    id: 'building-territory'
  },
  {
    title: 'Interior Design and Architecture',
    id: 'architecture'
  },
  {
    title: 'Project Timeline',
    id: 'project-timeline'
  },
  {
    title: 'Investment opportunities',
    id: '/'
  },
]

const Menu = ({isMenuOpen, setIsMenuOpen}: {isMenuOpen: boolean, setIsMenuOpen: (isMenuOpen: boolean) => void}) => {

  const scrollToSection = (sectionId: string, offset: number = 0) => {
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
  };


  return (
      <div className={`z-50 fixed top-20 left-0 w-full h-[calc(100vh-80px)] flex  sm:flex-col 2lg:flex-row sm:gap-10 2lg:gap-0 transform transition-transform duration-300 ease-in-out bg-loading-color ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-[calc(100%+80px)]'
      }`}>
        <Image src={menu_img} alt='menu' className='2lg:w-2/5 sm:w-full 2lg:h-full sm:h-1/5 md:h-2/5'/>
        <div className='w-3/5 flex xl:pl-60 lg:pl-20 sm:pl-10 items-center relative'>
          <div className='2lg:flex justify-end items-end absolute top-10 right-20 sm:hidden'>
            <button className='text-main-white text-4xl font-patrizia' onClick={() => setIsMenuOpen(false)}>X</button>
          </div>
          <ul className='flex flex-col justify-start items-start 2lg:gap-8 sm:gap-4'>
            {items.map((item, index) => (
              <li key={index} className='text-main-white 2lg:text-4xl sm:text-base font-patrizia cursor-pointer uppercase' onClick={() => scrollToSection(item.id)}>{item.title}</li>
            ))}
          </ul>
        </div>
      </div>
  )
}

export {Menu}