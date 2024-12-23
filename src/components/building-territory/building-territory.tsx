import { Scrollbar, A11y } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Image } from "../../ui/img/image";
import img_1 from "../../assets/building-territory/img-1.png";
import img_2 from "../../assets/building-territory/img-2.png";
import img_3 from "../../assets/building-territory/img-3.png";
import img_4 from "../../assets/building-territory/img-4.png";
import img_5 from "../../assets/building-territory/img-5.png";
import img_6 from "../../assets/building-territory/img-6.png";

const imgArr = [
  {
    img: img_1,
    text: "Tennis courts (possibly operated in collaboration with the a famous regional tennis academy), gyms, yoga studios, outdoor fitness facilities, a swimming pool, and a thermal pool for rehabilitation will be among the resort's sports facilities.",
  },
  {
    img: img_2,
    text: "The hotel will offer a variety of accommodation options, including spacious suites and deluxe rooms. As part of the renovation, the room count will decrease from 96 to 68, ensuring larger and more luxurious suites: Junior Suite, Executive Suite, Diplomatic Suite, Presidential Suite.",
  },
  {
    img: img_3,
    text: "A long-term lease of 2 hectares adjacent to the hotel is planned, where a park, helipad, and tennis courts will be developed.",
  },
  {
    img: img_4,
    text: "The resort consists of three buildings: the main hotel & thermal spa building, the historic Terme building with a restaurant serving traditional Ligurian cuisine, and a historic mill.",
  },
  {
    img: img_5,
    text: "The spa area will be expanded to 5,000 square metres, creating a vast space for wellness retreat. The space of the hotel buildings and restaurants will be expanded by 1,300 square metres.",
  },
  {
    img: img_6,
    text: "Although the hotel was built in 2000, its architecture and interiors reflect timeless elegance. The hotel structure complies with modern construction standards and regulations.",
  },
];

const BuildingTerritory = () => {
  return (
    <div
      className="lg:mt-64 sm:mt-10 w-full flex sm:flex-col lg:flex-row justify-between"
      id="building-territory"
    >
      <div className="flex flex-col gap-4 lg:w-[27%] sm:w-full">
        <h2 className="text-black-main sm:text-2xl lg:text-5xl font-patrizia font-normal sm:text-center lg:text-left uppercase">
          Building & Territory
        </h2>
        <p className="text-black-main lg:text-lg sm:text-xs font-helvetica font-norma sm:text-center lg:text-left sm:hidden md:block">
          Grand Hotel Pigna is being transformed into a luxury <br/> 5-star wellness
          retreat, embracing a new medical spa concept and abundant outdoor and
          indoor sport facilities.
        </p>
        <p className="md:hidden sm:bloc text-xs text-center">Grand Hotel Pigna is being transformed into a luxury 
        5-star wellness retreat, embracing a new medical spa concept and abundant outdoor and indoor sport facilities. As part of the renovation project, the hotel's building & facilities areas will be expanded. </p>
        <p className="text-black-main text-lg sm:hidden lg:block font-helvetica font-normal">
          As part of the renovation project, the hotel's building <br /> &
          facilities areas will be expanded.{" "}
        </p>
        <div className="flex flex-col md:gap-6 sm:gap-3">
          <div className="flex flex-col lg:mt-[36px] sm:mt-0">
            <span className="lg:text-xl sm:text-base">MAIN HOTEL BUILDING</span>
            <p className="lg:text-lg sm:text-xs mt-3">
            10 000 sqm — before the renovation
            </p>
            <p className="lg:text-lg sm:text-xs">
              13 000 sqm - after the renovation
            </p>
          </div>

          <div className="w-1/12 h-[1px] bg-black-main lg:mt-5 sm:mt-0 opacity-30"></div>

          <div className="flex flex-col sm:mt-0">
            <span className="md:mt-5 lg:text-xl sm:text-base sm:mt-0">SPA areas</span>
            <p className="lg:text-lg sm:text-xs mt-3 ">
              2 200 sqm — before the renovation
            </p>
            <p className="lg:text-lg sm:text-xs">
              5 000 sqm — after the renovation
            </p>
          </div>

          <div className="w-1/12 h-[1px] bg-black-main md:mt-5 sm:mt-0 opacity-30"></div>

          <div className="flex flex-col sm:mt-0">
            <span className="md:mt-5 sm:mt-0 lg:text-xl sm:text-base">2 NEW BUILDINGS</span>
            <p className="w-[70%] mt-3 sm:text-xs md:text-lg">
              Are included in the resort territory as a part of the renovation
              plan:
            </p>
            <p className="lg:text-lg sm:text-xs w-[74%] md:mt-6 sm:mt-2">
              Terme Restaurant with 878 sqm (increased to 1300 sqm in the new
              project) of the internal area and 3000 sqm of the territory;
            </p>
            <p className="lg:text-lg sm:text-xs w-[75%] mt-2">
              The Mill with 371 sqm of the internal area and 407 sqm of the
              territory.
            </p>
          </div>

          <div className="w-1/12 h-[1px] bg-black-main lg:mt-5 sm:mt-0 opacity-30"></div>

          <div className="flex flex-col sm:mt-0 gap-3">
            <span className="md:mt-5 sm:mt-0 lg:text-xl sm:text-base">SUITES</span>
            <p className="lg:text-lg sm:text-xs w-[80%]">
              15 suites with an area from 24 to 37 sqm before the renovation;
            </p>
            <p className="lg:text-lg sm:text-xs w-[80%]">
              36 suites with an area from 24 to 280 sqm after the renovation.
            </p>
          </div>
        </div>
      </div>

      <div className="lg:flex gap-6 w-[75%] flex-wrap justify-end sm:hidden">
        {imgArr.map((item, index) => (
          <div className="flex flex-col gap-2 w-[40%]">
            <Image
              src={item.img}
              alt="img"
              className="w-full h-[320px]"
              key={index}
            />
            <p className="text-black-main lg:text-lg sm:text-xs font-helvetica font-normal w-full">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      <div className="lg:hidden sm:block sm:w-[320px] md:w-[500px] mt-10">
        <Swiper
          modules={[Scrollbar, A11y]}
          spaceBetween={10}
          breakpoints={{
            360: {
              slidesPerView: 1.3, // 1 слайд на экранах меньше 640px
            },
            600: {
              slidesPerView: 2,
            },
          }}
        >
          {imgArr.map((slide, index) => (
            <SwiperSlide key={index} className="w-[240px]">
              <div className="flex flex-col gap-2">
                <Image
                  src={slide.img}
                  alt={slide.text}
                  className="w-[240px] h-[304px]"
                />
                <p className="text-black-main text-xs font-helvetica font-normal max-w-full">
                  {slide.text}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export { BuildingTerritory };
