import img1 from "../../assets/airports/img1.png";
import img2 from "../../assets/airports/img2.png";
import img3 from "../../assets/airports/img3.jpg";
import { Image } from "../../ui/img/image";
import map from "../../assets/mapSvg.svg";
import mapRes from '../../assets/mapSvgResponsive.svg'
import mapRes2 from '../../assets/mapPngResponsive.png'

import { Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const airportEls = [
  {
    title: "45 KM",
    description: "Monaco",
  },
  {
    title: "60 KM",
    description: "Nice (France)",
  },
  {
    title: "110 KM",
    description: "Genoa",
  },
];

const airportsImgs = [
  {
    img: img1,
    description:
      "Monaco, a prestigious city-state famous for its wealth and high net worth individuals who will be regular guests of the resort, is only 45 kilometres away.",
  },
  {
    img: img2,
    description:
      "Nice, a playground for the rich, famous for its glitz and glamour, picturesque promenades and vibrant atmosphere, is 60 kilometres from the hotel.",
  },
  {
    img: img3,
    description:
      "The hotel is approximately 20 kilometres from the coast (Italian Riviera) and 35 kilometres from Sanremo, known for its festivals, casino, yacht harbour and a charming old town.",
  },
];

const Location = () => {
  return (
    <div className="lg:mt-60 sm:mt-20 w-full" id="location">
      <div className="w-full flex justify-center items-center flex-col gap-2 mb-14 px-[18px]">
        <span className="text-black-main lg:text-5xl sm:text-2xl font-patrizia font-normal uppercase">
          Location
        </span>
        <p className="lg:text-lg text-center lg:w-1/2 sm:text-xs sm:w-full">
        The hotel is situated in a secluded area that offers excellent transportation links, including a helipad. Nearby cities such as Genoa, Nice, and Monaco are easily accessible.
        </p>
      </div>
      <Image src={map} alt="map" className="w-full h-[460px] sm:hidden md:block" />
      {/* <div className="w-full h-[228px] sm:block md:hidden bg-cover bg-center" style={{ backgroundImage: `url(${mapRes})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}></div> */}
      <img src={mapRes} alt="map" className="w-full h-[228px] sm:block md:hidden object-cover" />
      <div className="mt-20 w-full flex justify-center items-center flex-col gap-10">
        <span className="text-black-main lg:text-2xl sm:text- font-helvetica font-normal uppercase">
          the nearby airports:
        </span>
        <div className="flex md:gap-10 sm:gap-4 xl:w-1/2 md:w-3/4 sm:w-full justify-center items-center sm:px-[18px] md:px-0">
          {airportEls.map((el, index) => (
            <div key={index} className="flex items-center">
              <div className="flex flex-col gap-2 justify-center items-center md:w-[100px] sm:w-[80px]">
                <span className="font-normal lg:text-xl sm:text-base text-center">
                  {el.title}
                </span>
                <span className="font-normal text-lg sm:text-xs text-center">
                  {el.description}
                </span>
              </div>
              {index !== airportEls.length - 1 && (
                <div className="md:h-16 sm:h-8 w-[1px] bg-gray-300 md:ml-10 sm:ml-4"></div>
              )}
            </div>
          ))}
        </div>
        <div className="xl:w-[53%] md:w-3/4 sm:w-11/12">
          <p className="lg:text-lg sm:text-xs text-center font-helvetica">
          With convenient access to major motorways and railway stations in Ventimiglia and Sanremo, as well as to the third Monaco's port Cala del Forte, the hotel offers well-developed connectivity, making it easy for guests to arrive by car or train.
          </p>
        </div>

        <div className="lg:mt-20 sm:hidden lg:block px-20 w-11/12 justify-center">
          <div className="flex gap-10 justify-between w-full">
            {airportsImgs.map((el, index) => (
              <div
                key={index}
                className="flex flex-col gap-3 justify-start items-center w-1/3"
              >
                <Image src={el.img} alt={el.description} className="w-full" />
                <p className="lg:text-lg sm:text-xs text-left font-helvetica">
                  {el.description}
                </p>
              </div>
            ))}
          </div>
        </div>
            {/* Responsive */}
        <div className="w-full mt-5 pl-[18px] sm:block lg:hidden">
          <Swiper
            // install Swiper modules
            modules={[Scrollbar, A11y]}
            spaceBetween={12}
            breakpoints={{
              360: {
                slidesPerView: 1.3, // 1 слайд на экранах меньше 640px
              },
            }}
            // navigation
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {airportsImgs.map((slide, index) => (
              <SwiperSlide key={index} className="w-5/12">
                <Image
                  src={slide.img}
                  alt={slide.description}
                  className="w-full md:h-[465px] sm:h-[300px]"
                />
                <div className="text-black-main font-helvetica font-normal text-xs text-left leading-5 mt-3">
                  {slide.description}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export { Location };
