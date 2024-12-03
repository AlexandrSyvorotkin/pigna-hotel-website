import menu_img from '../../assets/bg/bg-menu.png'
import { Image } from '../img/image'

const items = [
  {
    title: 'Essence of Pigna',
    href: '/'
  },
  {
    title: 'Region',
    href: '/'
  },
  {
    title: 'Location',
    href: '/'
  },
  {
    title: 'Lands and Natural Resources',
    href: '/'
  },
  {
    title: 'Wellness & Spa',
    href: '/'
  },
  {
    title: 'Cuisine',
    href: '/'
  },
  {
    title: 'Building & Territory',
    href: '/'
  },
  {
    title: 'Interior Design and Architecture',
    href: '/'
  },
  {
    title: 'Project Timeline',
    href: '/'
  },
  {
    title: 'Investment opportunities',
    href: '/'
  },
  {
    title: 'Contact details',
    href: '/'
  }
]

const Menu = ({isMenuOpen, setIsMenuOpen}: {isMenuOpen: boolean, setIsMenuOpen: (isMenuOpen: boolean) => void}) => {
  return (
      <div className={`fixed top-20 left-0 w-full h-[calc(100vh-80px)] flex transform transition-transform duration-300 ease-in-out bg-loading-color ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-[calc(100%+80px)]'
      }`}>
        <Image src={menu_img} alt='menu' className='w-2/5 h-full'/>
        <div className='w-3/5 h-full flex pl-60 items-center relative'>
          <div className='flex justify-end items-end absolute top-10 right-20'>
            <button className='text-main-white text-4xl font-patrizia' onClick={() => setIsMenuOpen(false)}>X</button>
          </div>
          <ul className='flex flex-col justify-start items-start gap-8'>
            {items.map((item, index) => (
              <li key={index} className='text-main-white text-4xl font-patrizia'>{item.title}</li>
            ))}
          </ul>
        </div>
      </div>
  )
}

export {Menu}