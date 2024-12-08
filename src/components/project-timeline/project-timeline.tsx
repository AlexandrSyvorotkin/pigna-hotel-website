import { Scrollbar, A11y } from "swiper/modules";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Image } from "../../ui/img/image";

import img1 from "../../assets/project-timeline/img1.png";
import img2 from "../../assets/project-timeline/img2.png";

const slidesEls = [
  {
    img: img1,
    text: "A legend tells that a farmer who passed by the Lake Pigo with his donkey suffering from eczema, cured his animal due to the beneficial effect of the waters, which made thesewaters famous in the region for centuries.",
  },
  {
    img: img2,
    text: "A historic peace was signed between the two factions on Pigna's Lago Pigo Bridge, next to Pigna's sulphur thermal springs, which became the dividing line between the territories of Provenza and the Republic of Genoa. Nowadays, the Grand Hotel Pigna is situated right next to the historic bridge.",
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
    <div className="w-full pt-44 bg-loading-color pb-48" id="project-timeline">
      <div className="w-full flex justify-center items-center flex-col gap-4 text-main-white">
        <h2 className="text-4xl font-patrizia font-normal uppercase">
          Project Timeline
        </h2>
        <span className="text-xl font-helvetica font-normal">
          From mediaeval past to a premium wellness destination of the future.
        </span>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="w-[1750px] mt-10 px-2">
          <Swiper
            // install Swiper modules
            modules={[Scrollbar, A11y]}
            spaceBetween={24}
            slidesPerView={2}
            // navigation
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {slidesEls.map((slide, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={slide.img}
                  alt={slide.text}
                  className="w-[864px] h-[465px]"
                />
                <div className="text-main-white font-helvetica font-normal text-lg text-left leading-5 mt-3">
                  {slide.text}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="mt-36 w-full flex justify-center">
        <div className="w-[1750px]">
          <div className="flex flex-col gap-4">
            <span className="text-main-white font-helvetica font-normal text-lg text-center">
              Project status. Documents and permits obtained
            </span>
            <p className="text-main-white font-helvetica font-normal text-lg text-center mt-3">
              The approval documentation, research and planning work have been
              completed. The project is at the stage of raising investment for
              the implementation of the renovation plans:
            </p>
          </div>
          <div className="mt-36 flex flex-wrap gap-5">
            {textItems.map((text, index) => (
              <React.Fragment key={index}>
                <p className="text-main-white font-helvetica font-normal text-lg w-[550px]">
                  {text}
                </p>
                {index < textItems.length - 1 && (
                  <div className="w-[1px] h-[full] bg-main-white my-4" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProjectTimeline };
