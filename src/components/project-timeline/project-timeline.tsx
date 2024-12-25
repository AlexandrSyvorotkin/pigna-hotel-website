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
    textIt: "Fu eseguita un’analisi chimica delle acque, che rilevò la presenza di zolfo e probabilmente idrosolfiti, acido carbonico, solfato di soda, carbonato di soda, cloruro di sodio, tracce di carbonato di magnesio e una sostanza organica azotata."
  },
  {
    img: img4,
    text: "Commercial exploitation of the beneficial thermal waters began. Aroung this time, Claude Monet visited the neighborhood of Pigna - the small hamlet of Dolceacqua, he was so awed by this medieval bridge, he enthused that the structure was ‘a pearl of lightness’ and depicted the bridge in the painting “The Bridge at Dolceacqua”.",
    date: 1884,
    textIt: "Iniziò lo sfruttamento commerciale delle benefiche acque termali. In questo periodo Claude Monet visitò i dintorni di Pigna — il piccolo borgo di Dolceacqua. Così impressionato da questo ponte medievale, lo definì una “perla di leggerezza” e lo ritrasse nel dipinto “Il Ponte di Dolceacqua”."
  },
  {
    img: img5,
    text: "The very first real bathhouse was opened in Pigna. The water was taken from a well presumably with buckets which, tied to a rope, were lowered along a natural cavity reinforced inside by bricks and raised to a height of about twenty metres.",
    date: 1903,
    textIt: "Fu aperto il primo vero stabilimento balneare a Pigna. L’acqua veniva prelevata da un pozzo presumibilmente con secchi legati a una corda, calati lungo una cavità naturale rinforzata internamente con mattoni e issati per circa venti metri."
  },
  {
    img: img6,
    text: "After the Great War, the lower part of the mill complexes was almost entirely destroyed. Only after the Second World War, Giovanni Battista Manesero, owner of the spring, revived the idea of properly utilising the area’s sulphurous waters.",
    date: 1920,
    textIt: "Dopo la Grande Guerra, la parte inferiore dei complessi del mulino fu quasi interamente distrutta. Solo dopo la Seconda Guerra Mondiale, Giovanni Battista Manesero, proprietario della sorgente, rilanciò l’idea di utilizzare adeguatamente le acque sulfuree della zona."
  },
  {
    img: img7,
    text: "The first thermal spa in Pigna was built — the rooms with tubs, in which it was possible to bathe in the sulphurous water. There were about 3,000 Italian and foreign tourists, mostly French, visiting the spa complex at that time. Among the famous customers were the tenor Di Stefano and Princess Grace. The sulphurous water baths operated at full capacity until 1989.",
    date: 1954,
    textIt: "Fu costruita la prima spa termale a Pigna — stanze con vasche dove era possibile immergersi nell’acqua sulfurea. All’epoca erano circa 3.000 i turisti italiani e stranieri, per lo più francesi, che visitavano il complesso termale. Tra i clienti famosi vi erano il tenore Di Stefano e la Principessa Grace. I bagni di acqua solfurea operarono a pieno regime fino al 1989."
  },
  {
    img: img8,
    text: "The modern thermal spa hotel was built and operated as a 4* Grand Hotel Antiche Terme di Pigna.",
    date: 2000,
    textIt: "Fu costruito e gestito come hotel termale moderno a 4* — il Grand Hotel Antiche Terme di Pigna."
  },
  {
    img: img9,
    text: "After the change of the hotel ownership, a new concept of the luxury 5* thermal wellness retreat Grand Hotel Pigna was created.",
    date: 2020,
    textIt: "Fu costruito e gestito come hotel termale moderno a 4* — il Grand Hotel Antiche Terme di Pigna."
  },
  {
    img: img10,
    text: "An exquisite concept of hotel’s interior design and renovation of the Grand Hotel Pigna was created by Alex Kravetz",
    date: 2022,
    textIt: "Dopo il cambio di proprietà dell’hotel, fu creato un nuovo concetto di rifugio termale di lusso a 5* — il Grand Hotel Pigna.Un raffinato concept per il design degli interni e la ristrutturazione del Grand Hotel Pigna fu ideato da Alex Kravetz."
  },
  {
    img: img11,
    text: "The approval documentation, research and planning work have been completed. The project is at the stage of raising investment for the implementation of the renovation plans. ",
    date: 2024,
    textIt: "Sono stati completati i documenti di approvazione, le ricerche e i lavori di pianificazione. Il progetto è in fase di raccolta investimenti per l’attuazione dei piani di ristrutturazione."
  },
];


const textItems = [
  {
    eng: "Obtaining a principal agreement for the helicopter pad, the location of which has already been chosen and approved with the local authorities.",
    it: "Ottenimento di un accordo di massima per l’elisuperficie, la cui posizione è stata già scelta e approvata dalle autorità locali. "
  },
  {
    eng: "The architectural project has been finalised. All necessary permissions at local and regional levels have been obtained.",
    it: "Il progetto architettonico è stato finalizzato. Tutte le necessarie autorizzazioni a livello locale e regionale sono state ottenute."
  },
  {
    eng: "The required structural, hydraulic and other research has been conducted. The thermal water concession has been obtained.",
    it: " Sono state condotte le ricerche strutturali, idrauliche e di altro tipo. È stata ottenuta la concessione delle acque termali."
  },
  {
    eng: "The process of obtaining a long-term lease from the municipality for the 2 hectares of land in front of the hotel is in progress.",
    it: "È in corso il procedimento per ottenere un contratto di affitto a lungo termine dal comune per i 2 ettari di terreno di fronte all’hotel."
  },
  {
    eng: "The transaction of all real estate assets and land has been completely finalised. There are no financial debts or liabilities with the former personnel or the hotel and no outstanding responsibilities.",
    it: "La transazione di tutti gli asset immobiliari e terreni è stata completamente finalizzata. Non ci sono debiti finanziari o pendenze con il precedente personale o con l’hotel, né responsabilità in sospeso."
  },
  {
    eng: 'The project is considered to be of strategic importance for the region and has the personal, highly regarded support of the Ligurian Government with a scope of 20% state financial support in accordance with the national funding conditions for "Big Investments — Development Contracts".',
    it: "Il progetto è considerato di importanza strategica per la regione e gode del sostegno personale e molto apprezzato del Governo Ligure, con una quota di sostegno statale del 20% in base alle condizioni nazionali di finanziamento per i “Grandi Investimenti — Contratti di Sviluppo”."
  },
  {
    eng: "An architectural replanning project for the restaurant building is in the works.",
    it: "È in corso un progetto di riqualificazione architettonica per l’edificio ristorante."
  },
]



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
                  {locale === "ENG" ? slide.text : slide.textIt}
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
              {locale === "ENG" ? "Project status. Documents and permits obtained" : "Stato del progetto. Documenti e permessi ottenuti"}
            </span>
            <div className="w-full flex justify-center items-center">
              <p className="text-main-white font-helvetica font-normal text-lg text-center mt-3 opacity-80 lg:w-[42%] sm:w-full">
                {locale === 'ENG' ? " The approval documentation, research and planning work have been completed. The project is at the stage of raising investment forthe implementation of the renovation plans:" 
                : "Sono stati completati i documenti di approvazione, le ricerche e i lavori di pianificazione. Il progetto è in fase di raccolta investimenti per la realizzazione dei piani di ristrutturazione:"} 
               
              </p>
            </div>
          </div>
          <div className="lg:mt-20 sm:mt-10 justify-center flex flex-wrap lg:gap-6 sm:gap-1 sm:flex-col lg:flex-row">
            
            <div className="lg:hidden flex-col gap-4 sm:flex">
            {textItems.map((text, index) => (
                <div key={index} className="flex flex-col gap-4">
                  <p className="text-main-white font-helvetica font-normal lg:text-lg sm:text-xs w-full">
                    {locale === "ENG" ? text.eng : text.it}
                  </p>
                    {index < textItems.length - 1 && (
                    <div className="h-[1px] w-[24px] bg-main-white opacity-30" />
                  )}
                </div>
            ))}
            </div>

                <div className="sm:w-full h-[81px] flex gap-[26px] lg:w-[450px] sm:hidden lg:flex">
                  <p className="text-main-white font-helvetica lg:w-[400px] lg:text-lg sm:text-xs w-full leading-[25px]">
                    {locale === "ENG" ? textItems[0].eng : textItems[0].it}
                  </p>
                    <div className="lg:w-[1px] lg:h-[50px] sm:w-[50px] sm:h-[1px] bg-main-white my-4 opacity-80" />
                </div>

                <div className="sm:w-full h-[81px] flex gap-[26px] lg:w-[414px] sm:hidden lg:flex">
                  <p className="text-main-white font-helvetica lg:w-[354px] lg:text-lg sm:text-xs w-full leading-[25px]">
                    {locale === "ENG" ? textItems[1].eng : textItems[1].it}
                  </p>
                    <div className="lg:w-[1px] lg:h-[50px] sm:w-[50px] sm:h-[1px] bg-main-white my-4 opacity-80" />
                </div>

                <div className="sm:w-full h-[81px] flex gap-[26px] lg:w-[414px] sm:hidden lg:flex">
                  <p className="text-main-white font-helvetica lg:w-[354px] lg:text-lg sm:text-xs w-full leading-[25px]">
                    {locale === "ENG" ? textItems[2].eng : textItems[2].it}
                  </p>
                    <div className="lg:w-[1px] lg:h-[50px] sm:w-[50px] sm:h-[1px] bg-main-white my-4 opacity-80" />
                </div>

                <div className="sm:w-full h-[81px] flex lg:w-[354px] sm:hidden lg:flex">
                  <p className="text-main-white font-helvetica lg:text-lg sm:text-xs w-full leading-[25px]">
                    {locale === "ENG" ? textItems[3].eng : textItems[3].it}
                  </p>
                </div>

                <div className="sm:w-full h-[81px] flex lg:w-[610px] gap-[26px] sm:hidden lg:flex">
                  <p className="text-main-white font-helvetica lg:w-[550px] lg:text-lg sm:text-xs w-full leading-[25px]">
                    {locale === "ENG" ? textItems[4].eng : textItems[4].it}
                  </p>
                  <div className="lg:w-[1px] lg:h-[50px] sm:w-[50px] sm:h-[1px] bg-main-white my-4 opacity-80" />
                </div>

                <div className="sm:w-full h-[81px] flex lg:w-[829px] gap-[26px] sm:hidden lg:flex">
                  <p className="text-main-white font-helvetica lg:w-[779px] lg:text-lg sm:text-xs w-full leading-[25px]">
                    {locale === "ENG" ? textItems[5].eng : textItems[5].it}
                  </p>
                  <div className="lg:w-[1px] lg:h-[50px] sm:w-[50px] sm:h-[1px] bg-main-white my-4 opacity-80" />
                </div>

                <div className="sm:w-full h-[81px] flex lg:w-[216px] sm:hidden lg:flex">
                  <p className="text-main-white font-helvetica  lg:text-lg sm:text-xs w-full leading-[25px]">
                    {locale === "ENG" ? textItems[6].eng : textItems[6].it}
                  </p>
                </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export { ProjectTimeline };
