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
    <Container width={1300}>
      <div className="w-full h-full py-44" id="features">
        <div className="flex justify-center items-center w-full">
          <div className="flex flex-col gap-5 justify-center items-center font-helvetica text-black-main w-7/8">
            <span className=' font-normal text-5xl text-center uppercase'>UNIQUE FEATURES OF THE HOTEL PROJECT</span>
            <p className="font-normal text-lg text-center">Nestled in breathtaking natural surroundings, Grand Hotel Pigna is evolving into a luxurious 5-star wellness retreat, embracing a new medical spa concept that fosters loyalty and encourages repeat visits. It is not merely a luxury destination but also a comprehensive thermal resort offering an extensive range of spa treatments and holistic wellness programmes with use of therapeutic thermal water. </p>
            <p className="font-normal text-lg text-center">This unique combination of luxury, wellness, heritage, and natural beauty attracts travellers from across northern Italy, regular visitors from France and Monaco, as well as guests from all over the world (US, UK, EU, MENA countries) due to its proximity to major international airports.</p>
          </div>
        </div>
        <div className="mt-14 flex justify-center items-center w-full gap-10">
          <Image src={img2} alt="Essence of Pigna" className="w-1/2" />
          <Image src={img1} alt="Essence of Pigna" className="w-1/2" />
        </div>
        <div className="mt-20 flex w-full">
          {descriptionEls.map((el, index) => (
            <div key={index} className="flex items-center w-full">
              <div className="flex flex-col gap-2 justify-center items-center flex-1">
                <span className="font-normal text-xl">{el.title}</span>
                <span className="font-normal text-lg">{el.description}</span>
              </div>
              {index !== descriptionEls.length - 1 && (
                <div className="h-16 w-[1px] bg-gray-300"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

export { Description }