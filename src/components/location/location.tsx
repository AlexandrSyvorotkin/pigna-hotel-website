import img1 from '../../assets/airports/img1.png'
import img2 from '../../assets/airports/img2.png'
import img3 from '../../assets/airports/img3.png'
import { Image } from '../../ui/img/image'
import map from '../../assets/bg/bg-map.png'

const airportEls = [
  {
    title: '45 KM',
    description: 'Monaco',
  },
  {
    title: '60 KM',
    description: 'Nice (France)',
  },
  {
    title: '110 KM',
    description: 'Genoa',
  }
]

const airportsImgs = [
  {
    img: img1,
    description: 'Monaco, a prestigious city-state famous for its wealth and high net worth individuals who will be regular guests of the resort, is only 45 kilometres away.',
  },
  {
    img: img2,
    description: 'Nice, a playground for the rich, famous for its glitz and glamour, picturesque promenades and vibrant atmosphere, is 60 kilometres from the hotel.',
  },
  {
    img: img3,
    description: 'The hotel is approximately 20 kilometres from the coast (Italian Riviera) and 35 kilometres from Sanremo, known for its festivals, casino, yacht harbour and a charming old town.',
  }
]

const Location = () => {
    return (
        <div className="mt-60 w-full" id="location">
          <div className="w-full flex justify-center items-center flex-col gap-5 mb-14">
            <span className="text-black-main text-5xl font-patrizia font-normal uppercase">Location</span>
            <p className="text-lg text-center w-1/2">The hotel is situated in a secluded area that offers excellent transportation links, including a helipad. Nearby cities such as Genoa, Nice, and Monaco are easily accessible.</p>
          </div>
          <Image src={map} alt="map" className="w-full h-[460px]"/>
          <div className="mt-20 w-full flex justify-center items-center flex-col gap-10">
            <span className="text-black-main text-2xl font-helvetica font-normal uppercase">the nearby airports</span>
            <div className="flex gap-10 w-1/2">
              {airportEls.map((el, index) => (
                <div key={index} className="flex items-center w-full">
                  <div className="flex flex-col gap-2 justify-center items-center flex-1">
                    <span className="font-normal text-xl">{el.title}</span>
                    <span className="font-normal text-lg">{el.description}</span>
                  </div>
                  {index !== airportEls.length - 1 && (
                    <div className="h-16 w-[1px] bg-gray-300"></div>
                  )}
                </div>
              ))}
            </div>
            <div className="w-1/2">
            <p className="text-lg text-center font-helvetica">
              The hotel is approximately 20 kilometres from the coast (Italian Riviera) and 35 kilometres from Sanremo, known for its festivals, casino, yacht harbour and a charming old town.With convenient access to major motorways and railway stations in Ventimiglia and Sanremo, the hotel offers well-developed connectivity, making it easy for guests to arrive by car or train.
            </p>
            </div>
            <div className="mt-20 flex gap-10 px-20 w-full justify-center">
              {airportsImgs.map((el, index) => (
                <div key={index} className="flex flex-col gap-6 justify-center items-center flex-1 max-w-[568px]">
                  <Image src={el.img} alt={el.description} className="w-[568px] h-[787px]"/>
                  <p className="text-lg text-left font-helvetica w-full">{el.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
    )
}

export {Location}