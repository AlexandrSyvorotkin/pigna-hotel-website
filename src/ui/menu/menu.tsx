import menu_img from '../../assets/bg/bg-menu.png'
import { Image } from '../img/image'

const items = [
  {
    title: 'Essence of Pigna',
    id: 'essence-of-pigna'
  },
  {
    title: 'Region',
    id: '/'
  },
  {
    title: 'Location',
    id: 'location'
  },
  {
    title: 'Lands and Natural Resources',
    id: 'lands-and-natural-resources'
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
  {
    title: 'Contact details',
    id: '/'
  }
]

const Menu = ({isMenuOpen, setIsMenuOpen}: {isMenuOpen: boolean, setIsMenuOpen: (isMenuOpen: boolean) => void}) => {

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false)
  };


  return (
      <div className={`fixed top-20 left-0 w-full h-[calc(100vh-80px)] flex transform transition-transform duration-300 ease-in-out bg-loading-color z-100 ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-[calc(100%+80px)]'
      }`}>
        <Image src={menu_img} alt='menu' className='w-2/5 h-full'/>
        <div className='w-3/5 h-full flex pl-60 items-center relative'>
          <div className='flex justify-end items-end absolute top-10 right-20'>
            <button className='text-main-white text-4xl font-patrizia' onClick={() => setIsMenuOpen(false)}>X</button>
          </div>
          <ul className='flex flex-col justify-start items-start gap-8'>
            {items.map((item, index) => (
              <li key={index} className='text-main-white text-4xl font-patrizia cursor-pointer' onClick={() => scrollToSection(item.id)}>{item.title}</li>
            ))}
          </ul>
        </div>
      </div>
  )
}

export {Menu}