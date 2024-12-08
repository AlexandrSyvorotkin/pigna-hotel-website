import img1 from '../../assets/land-resourses/img1.png'
import img2 from '../../assets/land-resourses/img2.png'
import { Image } from '../../ui/img/image'


const resoursesEls = [
  {
    title: 'thermal',
    description: 'Used in medical and spa procedures, for the production of mud, inhalations, and cosmetics applied in spa treatments;',
  },
  {
    title: 'mineral',
    description: 'Available to guests as drinking water. The mineral water spring is located on the hotel grounds',
  },
  {
    title: 'mountain water',
    description: "Can be used as a sustainable resource for the hotel's internal needs",
  }
]

const Resourses = () => {
  return (
    <div className="mt-60 w-full pb-52 flex justify-center" id="lands-and-natural-resources">
      <div className='w-[1750px]'>
        <div className="flex flex-col gap-4 justify-start items-center text-black-main">
          <span className="text-5xl font-helvetica text-left w-full">Lands and Natural Resources</span>
        </div>
        <div className="flex gap-6 mt-16 justify-start">
          <div className="w-4/6 flex flex-col gap-4">
            <Image src={img1} alt="resourses" className="w-full h-[568px]" />
            <p className="w-full">The village of Pigna, a historic gateway to Gaul since Roman times, is renowned for its thermal waters. Discovered in the mediaeval period, the unique sulphurous baths feature mineral-rich water from the ancient Madonna Assunta spring, with temperatures between 28 and 32°C. There are 3 types of natural water available for all the hotel’s needs:</p>
            {resoursesEls.map((item, index) => (
              <div key={index} className="flex gap-4">
                <span className="text-2xl font-helvetica">~ {item.title}</span>
                <p className="text-lg font-helvetica">- {item.description}</p>
              </div>
            ))}
          </div>
          <div className="w-2/6 flex flex-col gap-4">
            <Image src={img2} alt="resourses" className="w-full h-[677px]" />
            <p className="w-full">Surrounded by stunning natural beauty, the hotel will be nestled among mountains, the banks of the River Nervia, a blue lake and waterfalls, olive and chestnut groves. Guests can engage in various outdoor activities, including hiking, mountain biking, and exploring the celebrated Cycling Riviera</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export { Resourses }