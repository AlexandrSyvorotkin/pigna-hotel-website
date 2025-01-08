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
import { useLocalization } from "../../context/useLocalization";

const imgArr = [
  {
    img: img_1,
    text: "Tennis courts (possibly operated in collaboration with the a famous regional tennis academy), gyms, yoga studios, outdoor fitness facilities, a swimming pool, and a thermal pool for rehabilitation will be among the resort's sports facilities.",
    textIt: "Campi da tennis (possibilmente gestiti in collaborazione con una famosa accademia tennistica regionale), palestre, studi di yoga, strutture fitness all’aperto, una piscina e una piscina termale per la riabilitazione faranno parte delle strutture sportive del resort."
  },
  {
    img: img_2,
    text: "The hotel will offer a variety of accommodation options, including spacious suites and deluxe rooms. As part of the renovation, the room count will decrease from 96 to 68, ensuring larger and more luxurious suites: Junior Suite, Executive Suite, Diplomatic Suite, Presidential Suite.",
    textIt: "L’hotel offrirà varie opzioni di alloggio, incluse spaziose suite e camere deluxe. Come parte della ristrutturazione, il numero di camere diminuirà da 96 a 68, garantendo suite più ampie e lussuose: Junior Suite, Executive Suite, Diplomatic Suite, Presidential Suite."
  },
  {
    img: img_3,
    text: "A long-term lease of 2 hectares adjacent to the hotel is planned, where a park, helipad, and tennis courts will be developed.",
    textIt: "È previsto un contratto di affitto a lungo termine di 2 ettari adiacenti all’hotel, dove verranno sviluppati un parco, un’elisuperficie e campi da tennis."
  },
  {
    img: img_4,
    text: "The resort consists of three buildings: the main hotel & thermal spa building, the historic Terme building with a restaurant serving traditional Ligurian cuisine, and a historic mill.",
    textIt: "Il resort si compone di tre edifici: l’edificio principale dell’hotel & spa termale, l’edificio storico delle Terme con un ristorante di cucina tradizionale ligure e un antico mulino."
  },
  {
    img: img_5,
    text: "The spa area will be expanded to 5,000 square metres, creating a vast space for wellness retreat. The space of the hotel buildings and restaurants will be expanded by 1,300 square metres.",
    textIt: "L’area spa sarà ampliata fino a 5.000 metri quadrati, creando un vasto spazio dedicato al benessere. Lo spazio degli edifici dell’hotel e dei ristoranti sarà ampliato di 1.300 metri quadrati."
  },
  {
    img: img_6,
    text: "Although the hotel was built in 2000, its architecture and interiors reflect timeless elegance. The hotel structure complies with modern construction standards and regulations.",
    textIt: "Sebbene l’hotel sia stato costruito nel 2000, la sua architettura e i suoi interni riflettono un’eleganza senza tempo. La struttura dell’hotel rispetta gli standard e le normative edilizie moderne."
  },
];

const BuildingTerritory = () => {
  const { locale } = useLocalization();

  return (
    <div className="w-full flex justify-center items-center bg-loading-color mt-40 pb-40">
      <div
      className="lg:pt-20 sm:pt-10 pb-20 sm:pb-10 w-[1750px] flex sm:flex-col lg:flex-row justify-between text-main-white bg-loading-color"
      id="building-territory"
    >
      <div className="flex flex-col gap-4 lg:w-[27%] sm:w-full">
        <h2 className="sm:text-2xl lg:text-5xl font-patrizia font-normal sm:text-center lg:text-left uppercase">
          {locale === "ENG" ? "Building & Territory" : "Edificio & Territorio"}
        </h2>
        <p className="lg:text-lg sm:text-xs font-helvetica font-norma sm:text-center lg:text-left sm:hidden md:block">
          {locale === "ENG"
            ? <p>Grand Hotel Pigna is being transformed into a luxury <br/> 5-star wellness retreat, embracing a new medical spa concept and abundant outdoor and indoor sport facilities.</p>
            : "Il Grand Hotel Pigna si trasforma in un lussuoso rifugio benessere a 5 stelle, abbracciando un nuovo concetto di medical spa e abbondanti strutture sportive all’aperto e al coperto."}
        </p>
        <p className="md:hidden sm:bloc text-xs text-center">
          {locale === "ENG"
            ? "Grand Hotel Pigna is being transformed into a luxury 5-star wellness retreat, embracing a new medical spa concept and abundant outdoor and indoor sport facilities. As part of the renovation project, the hotel's building & facilities areas will be expanded. "
            : "Il Grand Hotel Pigna si sta trasformando in un lussuoso rifugio benessere a 5 stelle, abbracciando un nuovo concetto di spa medica e abbondanti strutture sportive all'aperto e al coperto. Come parte del progetto di ristrutturazione, le aree dell'edificio e delle strutture dell'hotel saranno ampliate."}
        </p>
        {locale === "ENG" ? (
          <p className="text-lg sm:hidden lg:block font-helvetica font-normal">
            As part of the renovation project, the hotel's building <br /> &
            facilities areas will be expanded.
          </p>
        ) : (
          <p className="text-lg sm:hidden lg:block font-helvetica font-normal">
            Come parte del progetto di ristrutturazione, l’edificio dell’hotel e
            le relative strutture saranno ampliati.
          </p>
        )}

        <div className="flex flex-col md:gap-6 sm:gap-3">
          <div className="flex flex-col lg:mt-[36px] sm:mt-0">
            <span className="lg:text-xl sm:text-base">{locale === 'ENG' ? 'MAIN HOTEL BUILDING' : 'EDIFICIO PRINCIPALE DELL’HOTEL'}</span>
            <p className="lg:text-lg sm:text-xs mt-3">
              {locale === 'ENG' ? '10 000 sqm — before the renovation' : '10.000 mq — prima della ristrutturazione '}
            </p>
            <p className="lg:text-lg sm:text-xs">
              {locale === 'ENG' ? '13 000 sqm - after the renovation' : '13.000 mq — dopo la ristrutturazione'}
            </p>
          </div>

          <div className="w-1/12 h-[1px] bg-black-main lg:mt-5 sm:mt-0 opacity-30"></div>

          <div className="flex flex-col sm:mt-0">
            <span className="md:mt-5 lg:text-xl sm:text-base sm:mt-0">
              {locale === 'ENG' ? 'SPA AREAS' : 'AREE SPA'}
            </span>
            <p className="lg:text-lg sm:text-xs mt-3 ">
              {locale === 'ENG' ? '2 200 sqm — before the renovation' : '2.200 mq — prima della ristrutturazione '}
            </p>
            <p className="lg:text-lg sm:text-xs">
              {locale === 'ENG' ? "5 000 sqm — after the renovation" : "5.000 mq — dopo la ristrutturazione"}
            </p>
          </div>

          <div className="w-1/12 h-[1px] bg-black-main md:mt-5 sm:mt-0 opacity-30"></div>

          <div className="flex flex-col sm:mt-0">
            <span className="md:mt-5 sm:mt-0 lg:text-xl sm:text-base">
              {locale === 'ENG' ? '2 NEW BUILDINGS' : '2 NUOVI EDIFICI'}
            </span>
            <p className="w-[70%] mt-3 sm:text-xs md:text-lg">
              {locale === "ENG" ? "Are included in the resort territory as a part of the renovation plan:"
              : "Inclusi nel territorio del resort come parte del piano di ristrutturazione:"
            }
            </p>
            <p className="lg:text-lg sm:text-xs w-[74%] md:mt-6 sm:mt-2">
              {locale === 'ENG' ? "Terme Restaurant with 878 sqm (increased to 1300 sqm in the newproject) of the internal area and 3000 sqm of the territory;" : 
              "Terme Restaurant con 878 mq (aumentati a 1.300 mq nel nuovo progetto) di area interna e 3.000 mq di territorio;"}
            </p>
            <p className="lg:text-lg sm:text-xs w-[75%] mt-2">
              {locale === 'ENG' ? "The Mill with 371 sqm of the internal area and 407 sqm of theterritory." 
              : "Il Mulino con 371 mq di area interna e 407 mq di territorio."} 
            </p>
          </div>

          <div className="w-1/12 h-[1px] bg-black-main lg:mt-5 sm:mt-0 opacity-30"></div>

          <div className="flex flex-col sm:mt-0 gap-3">
            <span className="md:mt-5 sm:mt-0 lg:text-xl sm:text-base">
              {locale === 'ENG' ? "SUITES" : "SUITE"}
            </span>
            <p className="lg:text-lg sm:text-xs w-[80%]">
              {locale === 'ENG' ? "15 suites with an area from 24 to 37 sqm before the renovation;" : "15 suite da 24 a 37 mq prima della ristrutturazione;"}
            </p>
            <p className="lg:text-lg sm:text-xs w-[80%]">
              {locale === 'ENG' ? "36 suites with an area from 24 to 280 sqm after the renovation." : "36 suite da 24 a 280 mq dopo la ristrutturazione."}
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
              className="w-full h-[320px] hover:opacity-80"
              key={index}
            />
            <p className="lg:text-lg sm:text-xs font-helvetica font-normal w-full">
              {locale === 'ENG' ? item.text : item.textIt}
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
                  className="w-[240px] h-[304px] hover:opacity-80"
                />
                <p className="text-xs font-helvetica font-normal max-w-full">
                  {locale === 'ENG' ? slide.text : slide.textIt}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
    </div>
    
  );
};

export { BuildingTerritory };
