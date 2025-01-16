// import { Suspense } from 'react'
// import img1 from '../../assets/land-resourses/img1.png'
import img2 from '../../assets/land-resourses/img2.png'
// import img3 from '../../assets/waterfall/Waterfall desctop.gif'
import { useLocalization } from '../../context/useLocalization'
import { Image } from '../../ui/img/image'
import { ResponsiveContentContainer } from '../responsive-content-container/responsive-content-container'


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
    <ResponsiveContentContainer>
      <div className="lg:mt-60 sm:mt-20 w-full lg:pb-52 sm:pb-4 flex justify-center text-black-main" id="lands-and-natural-resources">
        <div className='w-full'>
          <div className="flex flex-col gap-4 justify-start items-center text-black-main">
            <span className="lg:text-[40px] sm:text-[24px] font-patrizia text-left w-full uppercase lg:leading-[56px] sm:leading-[32px]">
              {locale === 'ENG' ? "Lands and Natural Resources" : "Terreni e Risorse Naturali"}
            </span>
          </div>
          <div className="flex sm:flex-col lg:flex-row gap-6 lg:mt-5 sm:mt-4 justify-start">
            <div className="lg:w-4/6 sm:w-full flex flex-col gap-4">
              <video width="100%" height="auto" autoPlay muted loop playsInline
                controls={false}
                webkit-playsinline="true"
                disablePictureInPicture
                controlsList="nodownload noplaybackrate"
                style={{
                  objectFit: 'cover',
                  WebkitUserSelect: 'none',
                  msUserSelect: 'none',
                  userSelect: 'none',
                }}>
                <source src='/waterfall-desktop.mp4' type="video/mp4"/>
              </video>
              <p className="w-full text-responsive font-helvetica ">
                {locale === 'ENG' ?
                "The village of Pigna, a historic gateway to Gaul since Roman times, is renowned for its thermal waters. Discovered in the mediaeval period, the unique sulphurous baths feature mineral-rich water from the ancient Madonna Assunta spring, with temperatures between 28 and 32°C. There are 3 types of natural water available for all the hotel’s needs:"
                : "Il villaggio di Pigna, storico passaggio verso la Gallia fin dall’epoca romana, è rinomato per le sue acque termali. Scoperte in epoca medievale, le singolari acque solfuree sgorgano dalla antica sorgente della Madonna Assunta, con temperature tra i 28 e i 32°C. Sono disponibili 3 tipologie di acqua naturale per tutte le esigenze dell’hotel:"}
              </p>
              <div className="flex flex-col gap-2 lg:mt-6 sm:mt-0">
                {resoursesEls.map((item, index) => (
                  <>
                    <div key={index} className="flex xl:gap-4 lg:gap-1 xl:items-center lg:items-start xl:flex-row sm:flex-col sm:hidden lg:flex">
                    <span className="xl:text-2xl lg:text-[20px] sm:text-xl font-helvetica uppercase">{locale === 'ENG' ? item.title : item.titleIt}</span>
                    <p className="text-responsive font-helvetica">{locale === 'ENG' ? item.description : item.descriptionIt}</p>
                  </div>
                  <div className="lg:hidden sm:flex">
                    <p className="text-responsive font-helvetica"><span className="lg:text-2xl sm:text-base font-helvetica uppercase">{item.title}</span> - {item.description}</p>
                  </div>
                  </>
                ))}
              </div>
            </div>
            <div className="lg:w-2/6 sm:w-full flex flex-col gap-4">
              <Image src={img2} alt="resourses" className="w-full xl:h-[677px] md:h-[500px] sm:h-[300px]" />
              <p className="w-full text-responsive font-helvetica">
                {locale === 'ENG' ?
                "Surrounded by stunning natural beauty, the hotel will be nestled among mountains, the banks of the River Nervia, a blue lake and waterfalls, olive and chestnut groves. Guests can engage in various outdoor activities, including hiking, mountain biking, and exploring the celebrated Cycling Riviera" :
                "Circondato da una splendida bellezza naturale, l’hotel sarà adagiato tra montagne, le rive del fiume Nervia, un lago blu e cascate, uliveti e boschi di castagni. Gli ospiti potranno praticare varie attività all’aperto, tra cui trekking, mountain bike ed esplorare la famosa Cycling Riviera."}
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </ResponsiveContentContainer>
  )
}

export { Resourses }