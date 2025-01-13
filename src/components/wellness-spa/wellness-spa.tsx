import { useEffect, useRef, useState } from "react";
import img1 from "../../assets/wellness-spa/img1.png";
import img2 from "../../assets/wellness-spa/img2.png";
import img3 from "../../assets/wellness-spa/img3.png";
import img4 from "../../assets/wellness-spa/img4.png";
import { Image } from "../../ui/img/image";

//responsive

// import img1Res from "../../assets/wellness-spa/responsive/img1-res.png";
// import img2Res from "../../assets/wellness-spa/responsive/img2-res.png";
// import img3Res from "../../assets/wellness-spa/responsive/img3-res.png";
// import img4Res from "../../assets/wellness-spa/responsive/img4-res.png";
import { useLocalization } from "../../context/useLocalization";
import { Heading } from "../heading/heading";
import { ResponsiveContentContainer } from "../responsive-content-container/responsive-content-container";

// const tabsResponsive = [
//   {
//     title: "Thermal medicine and balneology",
//     description:
//       "The therapeutic benefits of our thermal baths have been known since Roman times. Sulphurous thermal water treats: problems of the musculoskeletal system, cardiovascular system, respiratory system, dermatological and aesthetic problems, obesity; it reduces stress and removes toxins.",
//     img: img1Res,
//     titleIt: "Medicina termale e idroterapia.",
//     descriptionIt:
//       "I benefici terapeutici dei nostri bagni termali sono noti fin dall’epoca romana. L’acqua termale solfurea tratta problemi dell’apparato muscoloscheletrico, del sistema cardiovascolare, dell’apparato respiratorio, problemi dermatologici ed estetici, obesità; riduce lo stress e elimina le tossine.",
//   },
//   {
//     title: "Medical component",
//     description:
//       "Comprehensive diagnostics, a world-class team of doctors and state-of-the-art medical equipment ensure personalised care and tailored treatment plans.",
//     img: img2Res,
//     titleIt: "Componente medica.",
//     descriptionIt:
//       "Diagnostica completa, un team di medici di livello mondiale e attrezzature mediche all’avanguardia garantiscono cure personalizzate e piani di trattamento su misura.",
//   },
//   {
//     title: "Rehabilitation and sports",
//     description:
//       "Dedicated facilities are available for rehabilitation, specifically designed to address sports injuries and musculoskeletal disorders, supporting recovery and strength",
//     img: img3Res,
//     titleIt: "Riabilitazione e sport.",
//     descriptionIt:
//       "Strutture dedicate alla riabilitazione, progettate per affrontare infortuni sportivi e disturbi muscoloscheletrici, favorendo il recupero e il rafforzamento.",
//   },
//   {
//     title: "Holistic wellnesss",
//     description:
//       "Our wellness programmes are based on a blend of Eastern and Western practices, the newest technologies and the latest medical-proved research with a focus on a holistic approach that enhances mental, physical, emotional, and spiritual well-being",
//     img: img4Res,
//     titleIt: "Benessere olistico.",
//     descriptionIt:
//       "I nostri programmi di benessere si basano su una fusione di pratiche orientali e occidentali, sulle tecnologie più nuove e sulle ultime ricerche mediche certificate, con un approccio olistico che migliora il benessere mentale, fisico, emotivo e spirituale.",
//   },
// ];

const tabs = [
  {
    title: "Thermal medicine and balneology",
    description:
      "The therapeutic benefits of our thermal baths have been known since Roman times. Sulphurous thermal water treats: problems of the musculoskeletal system, cardiovascular system, respiratory system, dermatological and aesthetic problems, obesity; it reduces stress and removes toxins.",
    img: img1,
    titleIt: "Medicina termale e idroterapia.",
    descriptionIt:
      "I benefici terapeutici dei nostri bagni termali sono noti fin dall’epoca romana. L’acqua termale solfurea tratta problemi dell’apparato muscoloscheletrico, del sistema cardiovascolare, dell’apparato respiratorio, problemi dermatologici ed estetici, obesità; riduce lo stress e elimina le tossine.",
    isVideo: true
  },
  {
    title: "Medical component",
    description:
      "Comprehensive diagnostics, a world-class team of doctors and state-of-the-art medical equipment ensure personalised care and tailored treatment plans.",
    img: img2,
    titleIt: "Componente medica.",
    descriptionIt:
      "Diagnostica completa, un team di medici di livello mondiale e attrezzature mediche all’avanguardia garantiscono cure personalizzate e piani di trattamento su misura.",
  },
  {
    title: "Rehabilitation and sports",
    description:
      "Dedicated facilities are available for rehabilitation, specifically designed to address sports injuries and musculoskeletal disorders, supporting recovery and strength",
    img: img3,
    titleIt: "Riabilitazione e sport.",
    descriptionIt:
      "Strutture dedicate alla riabilitazione, progettate per affrontare infortuni sportivi e disturbi muscoloscheletrici, favorendo il recupero e il rafforzamento.",
  },
  {
    title: "Holistic wellnesss",
    description:
      "Our wellness programmes are based on a blend of Eastern and Western practices, the newest technologies and the latest medical-proved research with a focus on a holistic approach that enhances mental, physical, emotional, and spiritual well-being",
    img: img4,
    titleIt: "Benessere olistico.",
    descriptionIt:
      "I nostri programmi di benessere si basano su una fusione di pratiche orientali e occidentali, sulle tecnologie più nuove e sulle ultime ricerche mediche certificate, con un approccio olistico che migliora il benessere mentale, fisico, emotivo e spirituale.",
  },
];

const keyObjectives = [
  {
    eng: "Cure",
    it: "Cure",
  },
  {
    eng: "Active & Fitnes",
    it: "Attività & Fitness",
  },
  {
    eng: "Weight Loss",
    it: "Perdita di Peso",
  },
  {
    eng: "Detox",
    it: "Detox",
  },
  {
    eng: "Stress Relief",
    it: "Sollievo dallo Stress",
  },
  {
    eng: "Anti-Ageing",
    it: "Anti-Ageing",
  },
  {
    eng: "Sleep Improvement",
    it: "Miglioramento del Sonno",
  },
  {
    eng: "Restoring Human Energy Potential",
    it: "Ripristino del Potenziale Energetico Umano",
  },
];

const WellnessSpa = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const timerRef = useRef<NodeJS.Timeout>();
  
  useEffect(() => {
    if (autoplay) {

      timerRef.current = setTimeout(() => {
        setActiveTab((prevTab) => (prevTab + 1) % tabs.length);
      }, 5000);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [activeTab, autoplay]);

  const handleTabClick = (index: number) => {
    setAutoplay(false); // Отключаем автопереключение при ручном клике
    setActiveTab(index);
  };

  const { locale } = useLocalization();


  return (
    <div
      className="2lg:pt-40 sm:pt-14 w-full bg-loading-color 2lg:pb-44 pb-24"
      id="wellness-spa"
    >
      <ResponsiveContentContainer>
        <div className="flex justify-center items-center px-[18px]">
          <div className="flex flex-col gap-4 justify-center items-center text-main-white 2lg:w-1/2 sm:w-full">
            <Heading tag="h2" className="font-patrizia text-center uppercase">
              Wellness & Spa
            </Heading>
            <p className="text-responsive font-helvetica text-center opacity-80 w-3/4">
              {locale === "ENG"
                ? "Grand Hotel Pigna is conceived as a thermal wellness retreat where every guest can enjoy a full range of spa treatments that restore inner harmony and revitalise. The retreat’s wellness & health concept is based on 4 pillars:"
                : "Il Grand Hotel Pigna è concepito come un rifugio termale benessere in cui ogni ospite può usufruire di una gamma completa di trattamenti spa per ristabilire l’armonia interiore e rivitalizzarsi. Il concetto di benessere e salute del resort si basa su 4 pilastri:"}
            </p>
          </div>
        </div>
        <div className="justify-center items-center w-full mt-20">
          <div className="flex relative flex-col gap-4 w-full 2lg:mt-20 sm:mt-2">
            <div className="w-full h-[2px] bg-main-white opacity-50 sm:hidden lg:flex" />
            <div
              className="absolute top-0 h-[2px] bg-main-white transition-all duration-300 sm:hidden lg:flex"
              style={{
                width: `${100 / tabs.length}%`,
                left: `${(100 / tabs.length) * activeTab}%`,
              }}
            />
            <div className="flex justify-between items-center gap-4 mt-10 sm:hidden lg:flex">
              {tabs.map((tab, index) => (
                <div
                  key={index}
                  className={`flex flex-col gap-4 font-helvetica w-1/4 h-[250px] justify-start cursor-pointer transition-all duration-300 text-main-white ${
                    activeTab === index
                      ? "opacity-100"
                      : "opacity-50 hover:opacity-75"
                  }`}
                  onClick={() => handleTabClick(index)}
                >
                  <span className="text-xl lg:h-[60px] xl:h-auto uppercase font-helvetica">
                    {locale === "ENG" ? tab.title : tab.titleIt}
                  </span>
                  <p className="text-base font-helvetica">
                    {locale === "ENG" ? tab.description : tab.descriptionIt}
                  </p>
                </div>
              ))}
            </div>
            <div className="justify-center items-center w-full overflow-hidden lg:mt-12 xl:mt-0 sm:hidden lg:flex">
              {activeTab === 0 ? <video width="100%" height="auto" autoPlay muted loop>
                <source src='pool-desktop.mp4' type="video/mp4"/>
              </video> : <Image
                key={activeTab}
                src={tabs[activeTab].img}
                alt={tabs[activeTab].title}
                className="w-full animate-fadeIn"
              />}
            </div>
            {/* responsive */}
            <div className='flex flex-col gap-4 sm:flex lg:hidden'>
            {tabs.map(tab =>
              <div className='flex flex-col gap-4 font-helvetica w-full justify-start cursor-pointer transition-all duration-300 text-main-white'>
                <Image
                  key={tab.title}
                  src={tab.img}
                  alt={tab.title}
                  className='w-full'
                />
                <span className='text-main-white text-base w-full'>{locale === 'ENG' ? tab.title : tab.titleIt}</span>
                <p className='text-main-white text-xs w-full'>{locale === 'ENG' ? tab.description : tab.descriptionIt}</p>
              </div>
            )}
            </div>


            <div className='w-full mt-24 sm:mt-10'>
            <div className='flex 2lg:gap-16 sm:flex-col 2lg:flex-row sm:gap-4 lg:justify-center sm:items-start lg:items-center lg:w-3/5 sm:w-full text-main-white'>
              <span className='font-patrizia lg:text-4xl sm:text-lg sm:text-left lg:w-full sm:w-[90%] uppercase'>{locale === 'ENG' ? 'Key objectives of the wellness programmes:' : 'Obiettivi chiave dei programmi di benessere:'}</span>
              <p className='font-helvetica lg:text-lg sm:text-xs opacity-80'>{locale === 'ENG' ? "The hotel holds hospital status, granting us complete freedom to implement a wide range of medical services in developing our spa facilities to the highest standards." : "L’hotel possiede lo status di struttura ospedaliera, che ci concede la piena libertà di implementare una vasta gamma di servizi medici per sviluppare le nostre strutture spa ai più alti standard."}</p>
            </div>
            <div className='flex justify-between items-center w-full mt-10 text-main-white flex-wrap sm:gap-1 lg:gap-0'>
              {keyObjectives.map((objective, index) => (
                <span key={index} className='font-helvetica lg:text-xl sm:text-base uppercase'>{locale === 'ENG' ? objective.eng : objective.it}</span>
              ))}
            </div>
          </div>
          </div>
        </div>
      </ResponsiveContentContainer>
    </div>
  );
};

export { WellnessSpa };
