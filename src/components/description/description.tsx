import { Container } from "../container/container"
import img1 from '../../assets/hotel/img/img1.png'
import img2 from '../../assets/hotel/img/img2.png'
import { Image } from '../../ui/img/image'

const descriptionEls = [
  {
    title: '13 000 sq. m.',
    description: 'Hotel area',
  },
  {
    title: '4',
    description: 'Restaurants',
  },
  {
    title: '20 000 sq. m.',
    description: 'Land area',
  },
  {
    title: '3',
    description: 'Buildings',
  },
  {
    title: '5000 sq. m.',
    description: 'SPA & Medical area',
  },
  {
    title: '68',
    description: 'Suites',
  }
]

const Description = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="h-full py-44 2lg:py-20 sm:py-10 w-[1500px] 2xl:w-[1400px] xl:w-[1200px] 2lg:w-[950px] lg:w-[700px] sm:w-4/5" id="features">
        <div className="flex justify-center items-center">
          <div className="flex flex-col gap-5 justify-center items-center font-helvetica text-black-main w-[1200px]">
            <span className='font-normal xl:text-5xl sm:text-2xl text-center uppercase font-patrizia '>UNIQUE FEATURES OF THE HOTEL PROJECT</span>
            <p className="font-normal xl:text-lg sm:text-xs text-center">Nestled in breathtaking natural surroundings, Grand Hotel Pigna is evolving into a luxurious 5-star wellness retreat, embracing a new medical spa concept that fosters loyalty and encourages repeat visits. It is not merely a luxury destination but also a comprehensive thermal resort offering an extensive range of spa treatments and holistic wellness programmes with use of therapeutic thermal water. </p>
            <p className="font-normal xl:text-lg sm:text-xs text-center">This unique combination of luxury, wellness, heritage, and natural beauty attracts travellers from across northern Italy, regular visitors from France and Monaco, as well as guests from all over the world (US, UK, EU, MENA countries) due to its proximity to major international airports.</p>
          </div>
        </div>
        <div className="mt-14 flex justify-center items-center w-full xl:gap-10 sm:gap-2">
          <Image src={img2} alt="Essence of Pigna" className="w-1/2 sm:h-[220px] lg:h-full" />
          <Image src={img1} alt="Essence of Pigna" className="w-1/2 sm:h-[220px] lg:h-full" />
        </div>
        <div className="mt-20 flex w-full 2lg:justify-between 2lg:flex-nowrap sm:flex-wrap sm:justify-center sm:gap-2 2lg:gap-0">
          {descriptionEls.map((el, index) => (
            <div key={index} className="flex items-center">
              <div className="flex flex-col gap-2 justify-center items-center">
                <span className="font-normal xl:text-xl sm:text-base">{el.title}</span>
                <span className="font-normal xl:text-lg sm:text-xs">{el.description}</span>
              </div>
              {index !== descriptionEls.length - 1 && (
                <div className="h-full w-[1px] bg-gray-300 ml-16"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export { Description }