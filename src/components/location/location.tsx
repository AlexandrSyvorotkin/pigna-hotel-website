import img1 from "../../assets/airports/33-jpg.jpg";
import img2 from "../../assets/airports/img2.png";
import img3 from "../../assets/airports/img3.jpg";
import { Image } from "../../ui/img/image";
import map from "../../assets/new-map.png";

import mapRes3 from '../../assets/new-map.png'

import { Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useLocalization } from "../../context/useLocalization";
import { Heading } from "../heading/heading";
import { ResponsiveContentContainer } from "../responsive-content-container/responsive-content-container";

const airportEls = [
  {
    title: "45 KM",
    description: "Monaco",
    textIt: "Monaco"
  },
  {
    title: "60 KM",
    description: "Nice (France)",
    textIt: "Nizza (Francia)"
  },
  {
    title: "110 KM",
    description: "Genoa",
    textIt: "Genova"
  },
];

const airportsImgs = [
  {
    img: img1,
    description:
      "Monaco, a prestigious city-state famous for its wealth and high net worth individuals who will be regular guests of the resort, is only 45 kilometres away.",
    textIt: "Monaco, prestigiosa città-Stato famosa per la sua ricchezza e la presenza di individui ad alto patrimonio netto, che saranno ospiti abituali del resort, dista solo 45 chilometri."
  },
  {
    img: img2,
    description:
      "Nice, a playground for the rich, famous for its glitz and glamour, picturesque promenades and vibrant atmosphere, is 60 kilometres from the hotel.",
      textIt: "Nizza, rinomata per il lusso, le affascinanti promenade e l’atmosfera vibrante, si trova a 60 chilometri dall’hotel."
  },
  {
    img: img3,
    description:
      "The hotel is approximately 20 kilometres from the coast (Italian Riviera) and 35 kilometres from Sanremo, known for its festivals, casino, yacht harbour and a charming old town.",
      textIt: "L’hotel dista circa 20 chilometri dalla costa (Riviera Ligure) e dal terzo porto di Monaco, a Ventimiglia — Cala del Forte; 35 chilometri da Sanremo, famosa per i suoi festival, il casinò, il porto turistico e il suggestivo centro storico."
  },
];

const Location = () => {

const {locale} = useLocalization()

  return (
    <div className="lg:pt-40 sm:pt-20 lg:pb-60 sm:pb-20 w-full bg-loading-color text-main-white" id="location">
      <ResponsiveContentContainer>
        <div className="w-full flex justify-center items-center flex-col gap-2 mb-14">
          <Heading tag='h2' className=" font-patrizia font-normal uppercase">
            {locale === 'ENG' ? "Location" : "Posizione"}
          </Heading>
          <p className="text-responsive text-center md:w-3/4 lg:1/2 sm:w-full  font-helvetica">
          {locale === 'ENG' 
          ? "The hotel is situated in a secluded area that offers excellent transportation links, including a helipad. Nearby cities such as Genoa, Nice, and Monaco are easily accessible." 
          : "L’hotel è situato in una zona appartata con ottimi collegamenti di trasporto, inclusa un’elisuperficie. Città vicine come Genova, Nizza e Monaco sono facilmente raggiungibili."}
          </p>
        </div>
      </ResponsiveContentContainer>
      <Image src={map} alt="map" className="w-full xl:h-[520px] lg:h-[468px] md:h-[350px] sm:hidden md:block object-cover" />
      <Image src={mapRes3} alt="map" className="w-full sm:block md:hidden object-cover" />
      <ResponsiveContentContainer>
      <div className="mt-20 w-full flex justify-center items-center flex-col gap-10">
        <span className="lg:text-[21px] md:text-[18px] sm:text-base font-helvetica font-normal uppercase">
          {locale === 'ENG' ? "The nearby airports:" : "Aeroporti vicini:"}
        </span>
        <div className="flex md:gap-10 sm:gap-4 xl:w-1/2 md:w-3/4 sm:w-full lg:justify-center sm:justify-between items-center md:px-0 ">
          {airportEls.map((el, index) => (
            <div key={index} className="flex items-center">
              <div className="flex flex-col gap-2 justify-center items-center md:w-[110px] sm:w-[80px]">
                <span className="font-normal lg:text-[21px] md:text-[18px] sm:text-base text-center font-helvetica">
                  {locale === 'ENG' ? el.title : el.textIt}
                </span>
                <span className="font-normal text-responsive text-center font-helvetica">
                  {locale === 'ENG' ? el.description : el.textIt}
                </span>
              </div>
              {index !== airportEls.length - 1 && (
                <div className="md:h-[51px] sm:h-8 w-[1px] bg-gray-300 md:ml-10 sm:ml-8"></div>
              )}
            </div>
          ))}
        </div>
        <div className="xl:w-[53%] md:w-3/4 sm:w-11/12">
          <p className="text-responsive text-center font-helvetica ">
          {locale === 'ENG' ?
          "With convenient access to major motorways and railway stations in Ventimiglia and Sanremo, as well as to the third Monaco's port Cala del Forte, the hotel offers well-developed connectivity, making it easy for guests to arrive by car or train."  
          : "Grazie al facile accesso alle principali autostrade e alle stazioni ferroviarie di Ventimiglia e Sanremo, oltre che al terzo porto di Monaco, Cala del Forte, l’hotel gode di un’eccellente connettività, rendendo agevole l’arrivo degli ospiti in auto o in treno."
        }
          </p>
        </div>

        <div className="lg:mt-20 flex w-full justify-center sm:hidden md:block">
          <div className="flex xl:gap-10 md:gap-4 justify-between w-full ">
            {airportsImgs.map((el, index) => (
              <div
                key={index}
                className="flex flex-col gap-3 justify-start items-center w-1/3"
              >
                <Image src={el.img} alt={el.description} className="w-full lg:h-[600px] md:h-[365px]" />
                <p className="text-responsive text-left font-helvetica ">
                  {locale === 'ENG' ? el.description : el.textIt}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative w-full mt-5 sm:block md:hidden bg-loading-color h-[400px]">
          <div className="absolute left-[18px] right-0">
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
              className="!w-full"
            >
              {airportsImgs.map((slide, index) => (
                <SwiperSlide key={index} className="w-[100px]">
                  <Image
                    src={slide.img}
                    alt={slide.description}
                    className="w-full md:h-[465px] sm:h-[300px] hover:opacity-80"
                  />
                  <div className="text-main-white font-helvetica font-normal text-xs text-left leading-5 mt-3 ">
                    {locale === 'ENG' ? slide.description : slide.textIt}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      </ResponsiveContentContainer>
    </div>
  );
};

export { Location };
