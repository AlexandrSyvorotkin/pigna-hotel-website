// import { Suspense } from 'react'
// import img1 from '../../assets/land-resourses/img1.png'
import img2 from '../../assets/land-resourses/img2.png'
import img3 from '../../assets/waterfall/test.gif'
import { useLocalization } from '../../context/useLocalization'
import { Image } from '../../ui/img/image'


const resoursesEls = [
  {
    title: 'thermal',
    description: 'Used in medical and spa procedures, for the production of mud, inhalations, and cosmetics applied in spa treatments;',
    titleIt: 'Termale',
    descriptionIt: 'utilizzata per trattamenti medici e spa, per la produzione di fanghi, inalazioni e cosmetici utilizzati nei trattamenti spa;'
  },
  {
    title: 'mineral',
    description: 'Available to guests as drinking water. The mineral water spring is located on the hotel grounds',
    titleIt: 'Minerale',
    descriptionIt: 'disponibile per gli ospiti come acqua potabile. La sorgente di acqua minerale si trova all’interno della proprietà dell’hotel;'
  },
  {
    title: 'mountain water',
    description: "Can be used as a sustainable resource for the hotel's internal needs",
    titleIt: 'Acqua di montagna',
    descriptionIt: 'può essere utilizzata come risorsa sostenibile per le necessità interne dell’hotel.'
  }
]

const Resourses = () => {

const {locale} = useLocalization()

  return (
    <div className="lg:mt-60 sm:mt-20 w-full lg:pb-52 sm:pb-4 flex justify-center px-[18px]" id="lands-and-natural-resources">
      <div className='w-[1750px]'>
        <div className="flex flex-col gap-4 justify-start items-center text-black-main">
          <span className="lg:text-[40px] sm:text-[24px] font-patrizia text-left w-full uppercase lg:leading-[56px] sm:leading-[32px]">
            {locale === 'ENG' ? "Lands and Natural Resources" : "Terreni e Risorse Naturali"}
          </span>
        </div>
        <div className="flex sm:flex-col lg:flex-row gap-6 lg:mt-5 sm:mt-4 justify-start">
          <div className="lg:w-4/6 sm:w-full flex flex-col gap-4">
            <Image src={img3} alt="resourses" className="w-full h-[568px]"/>
            <p className="w-full lg:text-lg sm:text-xs font-helvetica">
              {locale === 'ENG' ?
              "The village of Pigna, a historic gateway to Gaul since Roman times, is renowned for its thermal waters. Discovered in the mediaeval period, the unique sulphurous baths feature mineral-rich water from the ancient Madonna Assunta spring, with temperatures between 28 and 32°C. There are 3 types of natural water available for all the hotel’s needs:"
              : "Il villaggio di Pigna, storico passaggio verso la Gallia fin dall’epoca romana, è rinomato per le sue acque termali. Scoperte in epoca medievale, le singolari acque solfuree sgorgano dalla antica sorgente della Madonna Assunta, con temperature tra i 28 e i 32°C. Sono disponibili 3 tipologie di acqua naturale per tutte le esigenze dell’hotel:"}
            </p>
            <div className="flex flex-col gap-2 mt-6">
              {resoursesEls.map((item, index) => (
                <>
                  <div key={index} className="flex gap-4 items-center lg:flex sm:hidden">
                  <span className="lg:text-2xl sm:text-xl font-helvetica uppercase">{locale === 'ENG' ? item.title : item.titleIt}</span>
                  <p className="lg:text-lg sm:text-base font-helvetica">{locale === 'ENG' ? item.description : item.descriptionIt}</p>
                </div>
                <div className="lg:hidden sm:flex">
                  <p className="lg:text-lg sm:text-xs font-helvetica"><span className="lg:text-2xl sm:text-lg font-helvetica">{item.title}</span> - {item.description}</p>
                </div>
                </>
              ))}
            </div>
          </div>
          <div className="lg:w-2/6 sm:w-full flex flex-col gap-4">
            <Image src={img2} alt="resourses" className="w-full h-[677px]" />
            <p className="w-full lg:text-lg sm:text-xs font-helvetica">
              {locale === 'ENG' ?
              "Surrounded by stunning natural beauty, the hotel will be nestled among mountains, the banks of the River Nervia, a blue lake and waterfalls, olive and chestnut groves. Guests can engage in various outdoor activities, including hiking, mountain biking, and exploring the celebrated Cycling Riviera" :
              "Circondato da una splendida bellezza naturale, l’hotel sarà adagiato tra montagne, le rive del fiume Nervia, un lago blu e cascate, uliveti e boschi di castagni. Gli ospiti potranno praticare varie attività all’aperto, tra cui trekking, mountain bike ed esplorare la famosa Cycling Riviera."}
            </p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export { Resourses }