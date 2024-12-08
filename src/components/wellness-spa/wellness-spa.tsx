import { useState } from 'react'
import img1 from '../../assets/wellness-spa/img1.png'
import img2 from '../../assets/wellness-spa/img2.png'
import img3 from '../../assets/wellness-spa/img3.png'
import img4 from '../../assets/wellness-spa/img4.png'
import { Image } from '../../ui/img/image'

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
    <div className="pt-40 w-full bg-loading-color pb-44" id="wellness-spa">
      <div className="flex justify-center items-center w-full">
        <div className="flex flex-col gap-4 justify-center items-center text-main-white w-1/2">
          <span className="font-patrizia text-5xl text-center">Wellness & Spa</span>
          <p className="text-lg font-helvetica text-center">Grand Hotel Pigna is conceived as a thermal wellness retreat where every guest can enjoy a full range of spa treatments that restore inner harmony and revitalise. The retreat’s wellness & health concept is based on 4 pillars:</p>
        </div>
      </div>
      <div className='flex justify-center items-center w-full'>
        <div className='flex relative flex-col gap-4 w-[1700px] mt-20'>
          <div className='w-full h-[1px] bg-main-white ' />
          <div
            className='absolute top-0 h-[2px] bg-main-white transition-all duration-300'
            style={{
              width: `${100 / tabs.length}%`,
              left: `${(100 / tabs.length) * activeTab}%`
            }}
          />
          <div className='flex justify-between items-center gap-4 mt-10'>
            {tabs.map((tab, index) => (
              <div
                key={index}
                className={`flex flex-col gap-4 font-helvetica w-[350px] h-[250px] justify-start cursor-pointer transition-all duration-300 text-main-white ${activeTab === index ? 'opacity-100' : 'opacity-50 hover:opacity-75'
                  }`}
                onClick={() => setActiveTab(index)}
              >
                <span className='text-xl font-bold'>{tab.title}</span>
                <p className='text-base'>{tab.description}</p>
              </div>
            ))}
          </div>
          <div className='flex justify-center items-center w-full overflow-hidden'>
            <Image
              key={activeTab}
              src={tabs[activeTab].img}
              alt={tabs[activeTab].title}
              className="w-full animate-fadeIn"
            />
          </div>
          <div className='w-full mt-24'>
            <div className='flex gap-16 justify-center items-center w-3/4 text-main-white'>
              <span className='font-patrizia text-4xl'>Key objectives of the wellness programmes:</span>
              <p className='font-helvetica text-lg'>The hotel holds hospital status, granting us complete freedom to implement a wide range of medical services in developing our spa facilities to the highest standards.</p>
            </div>
            <div className='flex justify-between items-center w-full mt-10 text-main-white'>
              {keyObjectives.map((objective, index) => (
                <span key={index} className='font-helvetica text-xl'>{objective}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export {WellnessSpa}