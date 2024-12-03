import img1 from '../../assets/cuisine/img1.png'
import img2 from '../../assets/cuisine/img2.png'
import img3 from '../../assets/cuisine/img3.png'
import img4 from '../../assets/cuisine/img4.png'
import { Image } from '../../ui/img/image'

import img_1 from '../../assets/building-territory/img-1.png'
import img_2 from '../../assets/building-territory/img-2.png'
import img_3 from '../../assets/building-territory/img-3.png'
import img_4 from '../../assets/building-territory/img-4.png'
import img_5 from '../../assets/building-territory/img-5.png'
import img_6 from '../../assets/building-territory/img-6.png'

const imgArr = [
  {
    img: img_1,
    text: "Tennis courts (possibly operated in collaboration with the a famous regional tennis academy), gyms, yoga studios, outdoor fitness facilities, a swimming pool, and a thermal pool for rehabilitation will be among the resort's sports facilities."
  },
  {
    img: img_2,
    text: "The hotel will offer a variety of accommodation options, including spacious suites and deluxe rooms. As part of the renovation, the room count will decrease from 96 to 68, ensuring larger and more luxurious suites: Junior Suite, Executive Suite, Diplomatic Suite, Presidential Suite."
  },
  {
    img: img_3,
    text: "A long-term lease of 2 hectares adjacent to the hotel is planned, where a park, helipad, and tennis courts will be developed."
  },
  {
    img: img_4,
    text: "The resort consists of three buildings: the main hotel & thermal spa building, the historic Terme building with a restaurant serving traditional Ligurian cuisine, and a historic mill."
  },
  {
    img: img_5,
    text: "The spa area will be expanded to 5,000 square metres, creating a vast space for wellness retreat. The space of the hotel buildings and restaurants will be expanded by 1,300 square metres."
  },
  {
    img: img_6,
    text: "Although the hotel was built in 2000, its architecture and interiors reflect timeless elegance. The hotel structure complies with modern construction standards and regulations."
  },
]

const Cuisine = () => {
  return (
    <div className='w-full mt-44 flex justify-center items-center'>
      <div className='w-[1750px]'>
        <div className='flex flex-col gap-6 justify-center items-center'>
          <h3 className='text-black-main text-[48px] font-patrizia font-normal text-center'>Cuisine</h3>
          <p className='text-black-main text-[18px] font-helvetica font-normal text-center w-1/2'>By embracing a "Zero Kilometre" supply chain, the hotel’s restaurants proudly showcase the finest and freshest local ingredients. Local produce — easily digestible white pigna beans, olive oil and all olive products — form a plant-based dietary cuisine with a nutritional programme tailored to the needs of each client.</p>
        </div>
        <div className='mt-12 flex gap-6 justify-center'>
          <div className='flex flex-col gap-6'>
            <div className='flex gap-6'>
              <Image src={img1} alt='img1' className='w-[420px] h-[476px]' />
              <Image src={img2} alt='img1' className='w-[420px] h-[476px]' />
            </div>
            <p className='text-black-main text-[18px] font-helvetica font-normal'>The hotel’s own kitchen and restaurant feature only the finest, nutrient-rich products, carefully sourced from local farmers who share our passion for quality.The region boasts over 250 welcoming farmhouses, each offering immersive tours.</p>
          </div>
          <div className='flex gap-6'>
            <Image src={img3} alt='img3' className='w-[420px] h-[476px]' />
          </div>
          <div className='flex gap-6 flex-col'>
            <Image src={img4} alt='img4' className='w-[420px] h-[476px]' />
            <p className='text-black-main text-[18px] font-helvetica font-normal'>Under the guidance of our chef, every dish is a perfect balance of wholesome ingredients, health benefits, and culinary artistry</p>
          </div>
        </div>
        <div className='mt-64 w-[1750px] flex justify-between'>
          <div className='flex flex-col gap-6 w-1/5'>
            <h2 className='text-black-main text-[48px] font-patrizia font-normal'>Building & Territory</h2>
            <p className='text-black-main text-[18px] font-helvetica font-normal'>Grand Hotel Pigna is being transformed into a luxury 
            5-star wellness retreat, embracing a new medical spa concept and abundant outdoor and indoor sport facilities.</p>
            <p className='text-black-main text-[18px] font-helvetica font-normal'>As part of the renovation project, the hotel's building & facilities areas will be expanded. </p>
            <div className="flex flex-col g-4">
              <div className='flex flex-col gap-4'>
                <span>MAIN HOTEL BUILDING</span>
                <p>2 200 sqm - before the renovation</p>
                <p>5 000 sqm - after the renovation</p>
                <div className='w-1/12 h-[1px] bg-black-main mt-5'></div>
              </div>
              <div className='flex flex-col mt-5'>
                <span className="mt-5">SPA  areas</span>
                <p>10 000 sqm — before the renovation</p>
                <p>13 000 sqm — after the renovation</p>
                <div className='w-1/12 h-[1px] bg-black-main mt-5'></div>
              </div>
              <div className='flex flex-col mt-5 gap-3'>
                <span className="mt-5">2 NEW BUILDINGS</span>
                <p>are included in the resort territory as a part of the renovation plan: Terme Restaurant with 878 sqm (increased to 1300 sqm in the new project) of the internal area and 3000 sqm of the territory;</p>
                <p>The Mill with 371 sqm of the internal area and 407 sqm of the territory.</p>
                <div className='w-1/12 h-[1px] bg-black-main mt-5'></div>
              </div>
              <div className='flex flex-col mt-5 gap-3'>
                <span className="mt-5">SUITES</span>
                <p>15 suites with an area from 24 to 37 sqm before the renovation;
                36 suites with an area from 24 to 280 sqm after the renovation.</p>
              </div>
            </div>
          </div>
          <div className='flex gap-6 w-4/6 flex-wrap'>
            {imgArr.map((item, index) => (
              <div className="flex flex-col gap-4">
                <Image src={item.img} alt='img' className='w-[568px] h-[327px]' key={index} />
                <p className='text-black-main text-[18px] font-helvetica font-normal w-[568px]'>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export { Cuisine }