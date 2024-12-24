import { Scrollbar, A11y } from "swiper/modules";
import './style.css'

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
import { useLocalization } from "../../context/useLocalization";

const slidesEls = [
  {
    img: img1,
    text: "A legend tells that a farmer who passed by the Lake Pigo with his donkey suffering from eczema, cured his animal due to the beneficial effect of the waters, which made thesewaters famous in the region for centuries.",
    date: 1200,
    textIt: "Una leggenda narra che un contadino, passando vicino al Lago Pigo con il suo asino affetto da eczema, guarì l’animale grazie all’effetto benefico delle acque, che divennero famose nella regione per secoli."
  },
  {
    img: img2,
    text: "A historic peace was signed between the two factions on Pigna's Lago Pigo Bridge, next to Pigna's sulphur thermal springs, which became the dividing line between the territories of Provenza and the Republic of Genoa. Nowadays, the Grand Hotel Pigna is situated right next to the historic bridge.",
    date: 1365,
    textIt: "Una storica pace fu firmata tra due fazioni sul ponte del Lago Pigo a Pigna, accanto alle sorgenti sulfuree, che divennero la linea di confine tra i territori della Provenza e della Repubblica di Genova. Oggi, il Grand Hotel Pigna è situato proprio accanto allo storico ponte."
  },
  {
    img: img3,
    text: "The chemical analysis of water was carried out, stating that it contains sulphur and probably hydrosulfite, carbonic acid, soda sulphate, soda carbonate, sodium chloride, traces of magnesium carbonate, and an organic nitrogenous substance.",
    date: 1839,
    textIt: ""
  },
  {
    img: img4,
    text: "Commercial exploitation of the beneficial thermal waters began. Aroung this time, Claude Monet visited the neighborhood of Pigna - the small hamlet of Dolceacqua, he was so awed by this medieval bridge, he enthused that the structure was ‘a pearl of lightness’ and depicted the bridge in the painting “The Bridge at Dolceacqua”.",
    date: 1884,
    textIt: ""
  },
  {
    img: img5,
    text: "The very first real bathhouse was opened in Pigna. The water was taken from a well presumably with buckets which, tied to a rope, were lowered along a natural cavity reinforced inside by bricks and raised to a height of about twenty metres.",
    date: 1903,
    textIt: ""
  },
  {
    img: img6,
    text: "After the Great War, the lower part of the mill complexes was almost entirely destroyed. Only after the Second World War, Giovanni Battista Manesero, owner of the spring, revived the idea of properly utilising the area’s sulphurous waters.",
    date: 1920,
    textIt: ""
  },
  {
    img: img7,
    text: "The first thermal spa in Pigna was built — the rooms with tubs, in which it was possible to bathe in the sulphurous water. There were about 3,000 Italian and foreign tourists, mostly French, visiting the spa complex at that time. Among the famous customers were the tenor Di Stefano and Princess Grace. The sulphurous water baths operated at full capacity until 1989.",
    date: 1954,
    textIt: ""
  },
  {
    img: img8,
    text: "The modern thermal spa hotel was built and operated as a 4* Grand Hotel Antiche Terme di Pigna. ",
    date: 2000,
    textIt: ""
  },
  {
    img: img9,
    text: "After the change of the hotel ownership, a new concept of the luxury 5* thermal wellness retreat Grand Hotel Pigna was created.",
    date: 2020,
    textIt: ""
  },
  {
    img: img10,
    text: "An exquisite concept of hotel’s interior design and renovation of the Grand Hotel Pigna was created by Alex Kravetz",
    date: 2022,
    textIt: ""
  },
  {
    img: img11,
    text: "The approval documentation, research and planning work have been completed. The project is at the stage of raising investment for the implementation of the renovation plans. ",
    date: 2024,
    textIt: ""
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


  const { locale } = useLocalization()
  return (
    <div className="w-full lg:pt-44 sm:pt-20 bg-loading-color lg:pb-48 sm:pb-20 px-[18px]" id="project-timeline">
      <div className="w-full flex justify-center items-center flex-col gap-4 text-main-white">
        <h2 className="lg:text-4xl sm:text-2xl font-patrizia font-normal uppercase">
          {locale === "ENG" ? "Project Timeline" : "Cronologia del Progetto"}
        </h2>
        <span className="lg:text-xl sm:text-xs font-helvetica font-normal opacity-80 text-center">
          {locale === "ENG" ? "From mediaeval past to a premium wellness destination of the future." : "Dal passato medievale a una destinazione benessere premium del futuro."}
        </span>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="w-full mt-10 px-2 overflow-hidden sm:pb-2 md:mb-0">
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
                slidesPerView: 2.1, // 2.5 слайда на экранах меньше 1024px
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
                  className="w-full md:h-[465px] sm:h-[300px] lg:h-[328px]"
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


          <div className="w-full h-[1px] lg:mt-1 lg:mb-8 sm:mb-0 sm:mt-36" style={{background: "linear-gradient(to right, #FFF 0%, #FFF 70%, rgba(255, 255, 255, 0) 100%)"}}></div>
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
            
            <div className="lg:hidden flex-col gap-4 sm:flex">
            {textItems.map((text, index) => (
                <div key={index} className="flex flex-col gap-4">
                  <p className="text-main-white font-helvetica font-normal lg:text-lg sm:text-xs w-full">
                    {text}
                  </p>
                    {index < textItems.length - 1 && (
                    <div className="h-[1px] w-[24px] bg-main-white opacity-30" />
                  )}
                </div>
            ))}
            </div>

                <div className="sm:w-full h-[81px] flex gap-[26px] lg:w-[450px] sm:hidden lg:flex">
                  <p className="text-main-white font-helvetica lg:w-[400px] lg:text-lg sm:text-xs w-full leading-[25px]">
                    {textItems[0]}
                  </p>
                    <div className="lg:w-[1px] lg:h-[50px] sm:w-[50px] sm:h-[1px] bg-main-white my-4 opacity-80" />
                </div>

                <div className="sm:w-full h-[81px] flex gap-[26px] lg:w-[414px] sm:hidden lg:flex">
                  <p className="text-main-white font-helvetica lg:w-[354px] lg:text-lg sm:text-xs w-full leading-[25px]">
                    {textItems[1]}
                  </p>
                    <div className="lg:w-[1px] lg:h-[50px] sm:w-[50px] sm:h-[1px] bg-main-white my-4 opacity-80" />
                </div>

                <div className="sm:w-full h-[81px] flex gap-[26px] lg:w-[414px] sm:hidden lg:flex">
                  <p className="text-main-white font-helvetica lg:w-[354px] lg:text-lg sm:text-xs w-full leading-[25px]">
                    {textItems[2]}
                  </p>
                    <div className="lg:w-[1px] lg:h-[50px] sm:w-[50px] sm:h-[1px] bg-main-white my-4 opacity-80" />
                </div>

                <div className="sm:w-full h-[81px] flex lg:w-[354px] sm:hidden lg:flex">
                  <p className="text-main-white font-helvetica lg:text-lg sm:text-xs w-full leading-[25px]">
                    {textItems[3]}
                  </p>
                </div>

                <div className="sm:w-full h-[81px] flex lg:w-[610px] gap-[26px] sm:hidden lg:flex">
                  <p className="text-main-white font-helvetica lg:w-[550px] lg:text-lg sm:text-xs w-full leading-[25px]">
                    {textItems[4]}
                  </p>
                  <div className="lg:w-[1px] lg:h-[50px] sm:w-[50px] sm:h-[1px] bg-main-white my-4 opacity-80" />
                </div>

                <div className="sm:w-full h-[81px] flex lg:w-[829px] gap-[26px] sm:hidden lg:flex">
                  <p className="text-main-white font-helvetica lg:w-[779px] lg:text-lg sm:text-xs w-full leading-[25px]">
                    {textItems[5]}
                  </p>
                  <div className="lg:w-[1px] lg:h-[50px] sm:w-[50px] sm:h-[1px] bg-main-white my-4 opacity-80" />
                </div>

                <div className="sm:w-full h-[81px] flex lg:w-[216px] sm:hidden lg:flex">
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
