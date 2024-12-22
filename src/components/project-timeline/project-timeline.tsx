import { Scrollbar, A11y } from "swiper/modules";
import './style.css'
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Image } from "../../ui/img/image";

import img1 from "../../assets/project-timeline/img1.png";
import img2 from "../../assets/project-timeline/img2.png";
import img3 from "../../assets/project-timeline/img3.png";
import img4 from "../../assets/project-timeline/img4.png";
import img5 from "../../assets/project-timeline/img5.png";
import img6 from "../../assets/project-timeline/img6.png";
import img7 from "../../assets/project-timeline/img7.png";
import img8 from "../../assets/project-timeline/img8.png";
import img9 from "../../assets/project-timeline/img9.png";
import img10 from "../../assets/project-timeline/img10.png";
import img11 from "../../assets/project-timeline/img11.png";

const slidesEls = [
  {
    img: img1,
    text: "A legend tells that a farmer who passed by the Lake Pigo with his donkey suffering from eczema, cured his animal due to the beneficial effect of the waters, which made thesewaters famous in the region for centuries.",
    date: 1200,
  },
  {
    img: img2,
    text: "A historic peace was signed between the two factions on Pigna's Lago Pigo Bridge, next to Pigna's sulphur thermal springs, which became the dividing line between the territories of Provenza and the Republic of Genoa. Nowadays, the Grand Hotel Pigna is situated right next to the historic bridge.",
    date: 1365,
  },
  {
    img: img3,
    text: "A legend tells that a farmer who passed by the Lake Pigo with his donkey suffering from eczema, cured his animal due to the beneficial effect of the waters, which made thesewaters famous in the region for centuries.",
    date: 1839,
  },
  {
    img: img4,
    text: "A historic peace was signed between the two factions on Pigna's Lago Pigo Bridge, next to Pigna's sulphur thermal springs, which became the dividing line between the territories of Provenza and the Republic of Genoa. Nowadays, the Grand Hotel Pigna is situated right next to the historic bridge.",
    date: 1884,
  },
  {
    img: img5,
    text: "A legend tells that a farmer who passed by the Lake Pigo with his donkey suffering from eczema, cured his animal due to the beneficial effect of the waters, which made thesewaters famous in the region for centuries.",
    date: 1903,
  },
  {
    img: img6,
    text: "A historic peace was signed between the two factions on Pigna's Lago Pigo Bridge, next to Pigna's sulphur thermal springs, which became the dividing line between the territories of Provenza and the Republic of Genoa. Nowadays, the Grand Hotel Pigna is situated right next to the historic bridge.",
    date: 1920,
  },
  {
    img: img7,
    text: "A legend tells that a farmer who passed by the Lake Pigo with his donkey suffering from eczema, cured his animal due to the beneficial effect of the waters, which made thesewaters famous in the region for centuries.",
    date: 1954,
  },
  {
    img: img8,
    text: "A historic peace was signed between the two factions on Pigna's Lago Pigo Bridge, next to Pigna's sulphur thermal springs, which became the dividing line between the territories of Provenza and the Republic of Genoa. Nowadays, the Grand Hotel Pigna is situated right next to the historic bridge.",
    date: 2000,
  },
  {
    img: img9,
    text: "A legend tells that a farmer who passed by the Lake Pigo with his donkey suffering from eczema, cured his animal due to the beneficial effect of the waters, which made thesewaters famous in the region for centuries.",
    date: 2020,
  },
  {
    img: img10,
    text: "A historic peace was signed between the two factions on Pigna's Lago Pigo Bridge, next to Pigna's sulphur thermal springs, which became the dividing line between the territories of Provenza and the Republic of Genoa. Nowadays, the Grand Hotel Pigna is situated right next to the historic bridge.",
    date: 2022,
  },
  {
    img: img11,
    text: "A legend tells that a farmer who passed by the Lake Pigo with his donkey suffering from eczema, cured his animal due to the beneficial effect of the waters, which made thesewaters famous in the region for centuries.",
    date: 2024,
  },
];

const textItems = [
  "Obtaining a principal agreement for the helicopter pad, the location of which has already been chosen and approved with the local authorities. ",
  "The architectural project has been finalised. All necessary permissions at local and regional levels have been obtained.",
  "The required structural, hydraulic and other research has been conducted. The thermal water concession has been obtained.",
  "The process of obtaining a long-term lease from the municipality for the 2 hectares of land in front of the hotel is in progress.",
  "The transaction of all real estate assets and land has been completely finalised. There are no financial debts or liabilities with the former personnel or the hotel and no outstanding responsibilities.",
  'The project is considered to be of strategic importance for the region and has the personal, highly regarded support of the Ligurian Government with a scope of 20% state financial support in accordance with the national funding conditions for "Big Investments — Development Contracts".',
  "An architectural replanning project for the restaurant building is in the works.",
];



const ProjectTimeline = () => {
  return (
    <div className="w-full lg:pt-44 sm:pt-20 bg-loading-color pb-48 px-[18px]" id="project-timeline">
      <div className="w-full flex justify-center items-center flex-col gap-4 text-main-white">
        <h2 className="lg:text-4xl sm:text-2xl font-patrizia font-normal uppercase">
          Project Timeline
        </h2>
        <span className="lg:text-xl sm:text-xs font-helvetica font-normal opacity-80">
          From mediaeval past to a premium wellness destination of the future.
        </span>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="w-full mt-10 px-2 overflow-hidden">
          <Swiper
            // install Swiper modules
            modules={[Scrollbar, A11y]}
            // injectStyles={['overflow-x: hidden !important', 'overflow-y: visible !important']}
            style={{
              overflow: 'visible',
              // overflowX: 'hidden',
              // overflowY: 'visible',
            }}
            spaceBetween={24}
            breakpoints={{
              360: {
                slidesPerView: 1.4, // 1 слайд на экранах меньше 640px
              },
              768: {
                slidesPerView: 2, // 2 слайда на экранах меньше 768px
              },
              1024: {
                slidesPerView: 2.3, // 2.5 слайда на экранах меньше 1024px
              },
            }}
            // navigation
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {slidesEls.map((slide, index) => (
              <SwiperSlide key={index} className="w-5/12 relative swiper-slider-element">
                <Image
                  src={slide.img}
                  alt={slide.text}
                  className="w-full md:h-[465px] sm:h-[300px] lg:w-[800px] lg:h-[328px]"
                />
                <div className="text-main-white font-helvetica font-normal md:text-lg sm:text-xs text-left leading-5 mt-3">
                  {slide.text}
                </div>
                <div className='slide-mark'>
                  <div className='slide-mark__date'>{slide.date}</div>
                  <div className='slide-mark__line-container'>
                    <div className='slide-mark__dashed'></div>
                    <div className='slide-mark__line'></div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>


          <div className="w-full h-[1px] mt-1 mb-8" style={{background: "linear-gradient(to right, #FFF 0%, #FFF 70%, rgba(255, 255, 255, 0) 100%)"}}></div>
        </div>
      </div>

      <div className="lg:mt-36 sm:mt-10 w-full flex justify-center">
        <div className="w-[1750px]">
          <div className="flex flex-col gap-4 w-full">
            <span className="text-main-white font-helvetica font-normal text-2xl text-center uppercase">
              Project status. Documents and permits obtained
            </span>
            <div className="w-full flex justify-center items-center">
              <p className="text-main-white font-helvetica font-normal text-lg text-center mt-3 opacity-80 lg:w-[42%] sm:w-full">
                The approval documentation, research and planning work have been
                completed. The project is at the stage of raising investment for
                the implementation of the renovation plans:
              </p>
            </div>
          </div>
          <div className="lg:mt-20 sm:mt-10 justify-center flex flex-wrap lg:gap-6 sm:gap-1 sm:flex-col lg:flex-row">
            {/* {textItems.map((text, index) => (
                <div key={index} className="min-w-[250px] max-w-[800px] sm:w-full lg:h-[80px] sm:h-auto flex gap-[26px]">
                  <p className="text-main-white font-helvetica font-normal lg:text-lg sm:text-xs w-full">
                    {text}
                  </p>
                    {index < textItems.length - 1 && (
                    <div className="lg:w-[1px] lg:h-[50px] sm:w-[50px] sm:h-[1px] bg-main-white my-4 opacity-80" />
                  )}
                </div>
            ))} */}

                <div className="sm:w-full h-[81px] flex gap-[26px] lg:w-[450px]">
                  <p className="text-main-white font-helvetica lg:w-[400px] lg:text-lg sm:text-xs w-full leading-[25px]">
                    {textItems[0]}
                  </p>
                    <div className="lg:w-[1px] lg:h-[50px] sm:w-[50px] sm:h-[1px] bg-main-white my-4 opacity-80" />
                </div>

                <div className="sm:w-full h-[81px] flex gap-[26px] lg:w-[414px]">
                  <p className="text-main-white font-helvetica lg:w-[354px] lg:text-lg sm:text-xs w-full leading-[25px]">
                    {textItems[1]}
                  </p>
                    <div className="lg:w-[1px] lg:h-[50px] sm:w-[50px] sm:h-[1px] bg-main-white my-4 opacity-80" />
                </div>

                <div className="sm:w-full h-[81px] flex gap-[26px] lg:w-[414px]">
                  <p className="text-main-white font-helvetica lg:w-[354px] lg:text-lg sm:text-xs w-full leading-[25px]">
                    {textItems[2]}
                  </p>
                    <div className="lg:w-[1px] lg:h-[50px] sm:w-[50px] sm:h-[1px] bg-main-white my-4 opacity-80" />
                </div>

                <div className="sm:w-full h-[81px] flex lg:w-[354px]">
                  <p className="text-main-white font-helvetica lg:text-lg sm:text-xs w-full leading-[25px]">
                    {textItems[3]}
                  </p>
                </div>

                <div className="sm:w-full h-[81px] flex lg:w-[610px] gap-[26px]">
                  <p className="text-main-white font-helvetica lg:w-[550px] lg:text-lg sm:text-xs w-full leading-[25px]">
                    {textItems[4]}
                  </p>
                  <div className="lg:w-[1px] lg:h-[50px] sm:w-[50px] sm:h-[1px] bg-main-white my-4 opacity-80" />
                </div>

                <div className="sm:w-full h-[81px] flex lg:w-[829px] gap-[26px]">
                  <p className="text-main-white font-helvetica lg:w-[779px] lg:text-lg sm:text-xs w-full leading-[25px]">
                    {textItems[5]}
                  </p>
                  <div className="lg:w-[1px] lg:h-[50px] sm:w-[50px] sm:h-[1px] bg-main-white my-4 opacity-80" />
                </div>

                <div className="sm:w-full h-[81px] flex lg:w-[216px]">
                  <p className="text-main-white font-helvetica  lg:text-lg sm:text-xs w-full leading-[25px]">
                    {textItems[6]}
                  </p>
                </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export { ProjectTimeline };
