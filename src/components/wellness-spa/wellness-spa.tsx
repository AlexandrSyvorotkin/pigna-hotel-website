import { useState } from 'react'
import img1 from '../../assets/wellness-spa/img1.png'
import img2 from '../../assets/wellness-spa/img2.png'
import img3 from '../../assets/wellness-spa/img3.png'
import img4 from '../../assets/wellness-spa/img4.png'
import { Image } from '../../ui/img/image'

//responsive

import img1Res from '../../assets/wellness-spa/responsive/img1-res.png'
import img2Res from '../../assets/wellness-spa/responsive/img2-res.png'
import img3Res from '../../assets/wellness-spa/responsive/img3-res.png'
import img4Res from '../../assets/wellness-spa/responsive/img4-res.png'

const tabsResponsive = [
  {
    title: 'Thermal medicine and balneology',
    description: 'The therapeutic benefits of our thermal baths have been known since Roman times. Sulphurous thermal water treats: problems of the musculoskeletal system, cardiovascular system, respiratory system, dermatological and aesthetic problems, obesity; it reduces stress and removes toxins.',
    img: img1Res,
  },
  {

    title: 'Medical component',
    description: 'Comprehensive diagnostics, a world-class team of doctors and state-of-the-art medical equipment ensure personalised care and tailored treatment plans.',
    img: img2Res,
  },
  {

    title: 'Rehabilitation and sports',
    description: 'Dedicated facilities are available for rehabilitation, specifically designed to address sports injuries and musculoskeletal disorders, supporting recovery and strength',
    img: img3Res,
  },
  {
    title: 'Holistic wellnesss',
    description: 'Our wellness programmes are based on a blend of Eastern and Western practices, the newest technologies and the latest medical-proved research with a focus on a holistic approach that enhances mental, physical, emotional, and spiritual well-being',
    img: img4Res,
  },
]

const tabs = [
  {
    title: 'Thermal medicine and balneology',
    description: 'The therapeutic benefits of our thermal baths have been known since Roman times. Sulphurous thermal water treats: problems of the musculoskeletal system, cardiovascular system, respiratory system, dermatological and aesthetic problems, obesity; it reduces stress and removes toxins.',
    img: img1,
  },
  {

    title: 'Medical component',
    description: 'Comprehensive diagnostics, a world-class team of doctors and state-of-the-art medical equipment ensure personalised care and tailored treatment plans.',
    img: img2,
  },
  {

    title: 'Rehabilitation and sports',
    description: 'Dedicated facilities are available for rehabilitation, specifically designed to address sports injuries and musculoskeletal disorders, supporting recovery and strength',
    img: img3,
  },
  {
    title: 'Holistic wellnesss',
    description: 'Our wellness programmes are based on a blend of Eastern and Western practices, the newest technologies and the latest medical-proved research with a focus on a holistic approach that enhances mental, physical, emotional, and spiritual well-being',
    img: img4,
  },
]

const keyObjectives = ['Cure', 'Active & Fitnes', 'Weight Loss', 'Detox', 'Stress Relief', 'Anti-Ageing', 'Sleep Improvement', 'Restoring Human Energy Potential']


const WellnessSpa = () => {


  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="2lg:pt-40 sm:pt-14 w-full bg-loading-color 2lg:pb-44 pb-24" id="wellness-spa">
      <div className="flex justify-center items-center px-[18px]">
        <div className="flex flex-col gap-4 justify-center items-center text-main-white 2lg:w-1/2 sm:w-full">
          <span className="font-patrizia lg:text-5xl sm:text-2xl text-center uppercase">Wellness & Spa</span>
          <p className="lg:text-lg sm:text-xs font-helvetica text-center opacity-80">Grand Hotel Pigna is conceived as a thermal wellness retreat where every guest can enjoy a full range of spa treatments that restore inner harmony and revitalise. The retreat’s wellness & health concept is based on 4 pillars:</p>
        </div>
      </div>
      <div className='flex justify-center items-center w-full px-[18px]'>
        <div className='flex relative flex-col gap-4 w-[1750px] 2lg:mt-20 sm:mt-2'>
          <div className='w-full h-[2px] bg-main-white sm:hidden 2lg:block opacity-50' />
          <div
            className='absolute top-0 h-[2px] bg-main-white transition-all duration-300 sm:hidden 2lg:block'
            style={{
              width: `${100 / tabs.length}%`,
              left: `${(100 / tabs.length) * activeTab}%`
            }}
          />
          <div className='2lg:flex sm:hidden justify-between items-center gap-4 mt-10'>
            {tabs.map((tab, index) => (
              <div
                key={index}
                className={`flex flex-col gap-4 font-helvetica w-1/4 h-[250px] justify-start cursor-pointer transition-all duration-300 text-main-white ${activeTab === index ? 'opacity-100' : 'opacity-50 hover:opacity-75'
                  }`}
                onClick={() => setActiveTab(index)}
              >
                <span className='2xl:text-xl uppercase font-helvetica'>{tab.title}</span>
                <p className='2xl:text-base font-helvetica'>{tab.description}</p>
              </div>
            ))}
          </div>
          <div className='2lg:flex sm:hidden justify-center items-center w-full overflow-hidden lg:mt-12 xl:mt-0'>
            <Image
              key={activeTab}
              src={tabs[activeTab].img}
              alt={tabs[activeTab].title}
              className="w-full animate-fadeIn"
            />
          </div>
          {/* responsive */}
          <div className='md:flex flex-col gap-4 sm:hidden 2lg:hidden'>
            {tabs.map(tab =>
              <div className='flex flex-col gap-4 font-helvetica w-full justify-start cursor-pointer transition-all duration-300 text-main-white'>
                <Image
                  key={tab.title}
                  src={tab.img}
                  alt={tab.title}
                  className='w-full'
                />
                <span className='text-main-white text-base w-full'>{tab.title}</span>
                <p className='text-main-white text-xs w-full'>{tab.description}</p>
              </div>
            )}
          </div>
          
          {/* responsive */}
          <div className='sm:flex flex-col gap-4 md:hidden'>
            {tabsResponsive.map(tab =>
              <div className='flex flex-col gap-4 font-helvetica w-full justify-start cursor-pointer transition-all duration-300 text-main-white'>
                <Image
                  key={tab.title}
                  src={tab.img}
                  alt={tab.title}
                  className='w-full h-[324px]'
                />
                <span className='text-main-white text-base w-full uppercase'>{tab.title}</span>
                <p className='text-main-white text-xs w-full'>{tab.description}</p>
              </div>
            )}
          </div>

          <div className='w-full mt-24 sm:mt-10'>
            <div className='flex 2lg:gap-16 sm:flex-col 2lg:flex-row sm:gap-4 lg:justify-center sm:items-start lg:items-center lg:w-3/5 sm:w-full text-main-white'>
              <span className='font-patrizia lg:text-4xl sm:text-lg sm:text-left lg:w-full sm:w-[90%] uppercase'>Key objectives of the wellness programmes:</span>
              <p className='font-helvetica lg:text-lg sm:text-xs opacity-80'>The hotel holds hospital status, granting us complete freedom to implement a wide range of medical services in developing our spa facilities to the highest standards.</p>
            </div>
            <div className='flex justify-between items-center w-full mt-10 text-main-white flex-wrap sm:gap-1 lg:gap-0'>
              {keyObjectives.map((objective, index) => (
                <span key={index} className='font-helvetica lg:text-xl sm:text-base uppercase'>{objective}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export {WellnessSpa}