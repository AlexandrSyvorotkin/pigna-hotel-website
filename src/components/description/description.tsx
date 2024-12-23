// import { Container } from "../container/container"
import img1 from '../../assets/hotel/img/img1.png'
import img2 from '../../assets/hotel/img/img2.png'
import { Image } from '../../ui/img/image'
import { useLocalization } from '../../context/useLocalization.tsx';

const descriptionEls = [
  {
    title: '13 000 sq. m.',
    description: 'Hotel area',
    titleIt: "13.000 mq ",
    descriptionIt: "Area dell’hotel"
  },
  {
    title: '4',
    description: 'Restaurants',
    titleIt: "Ristoranti",
    descriptionIt: "4"
  },
  {
    title: '20 000 sq. m.',
    description: 'Land area',
    titleIt: "Area del terreno",
    descriptionIt: "20 000 mq"
  },
  {
    title: '3',
    description: 'Buildings',
    titleIt: "Edifici",
    descriptionIt: "3"
  },
  {
    title: '5000 sq. m.',
    description: 'SPA & Medical area',
    titleIt: "Area SPA & Medical",
    descriptionIt: "5000 mq"
  },
  {
    title: '68',
    description: 'Suites',
    titleIt: "Suite",
    descriptionIt: "68"
  }
]

const Description = () => {

  const { locale } = useLocalization();


  return (
    <div className="w-full flex justify-center items-center px-[18px]">
      <div className="h-full xl:py-44 2lg:py-20 sm:py-10 w-[1500px] 2xl:w-[1450px] xl:w-[1200px] 2lg:w-[950px] lg:w-[700px] sm:w-full" id="features">
        <div className="flex justify-center items-center">
          <div className="flex flex-col gap-5 justify-center items-center font-helvetica text-black-main w-[1200px]">
            <span className='font-normal xl:text-5xl sm:text-2xl text-center uppercase font-patrizia '>{locale === 'ENG' ? 'UNIQUE FEATURES OF THE HOTEL PROJECT' : 'CARATTERISTICHE UNICHE DEL PROGETTO ALBERGHIERO'}</span>
            <p className="font-normal xl:text-lg sm:text-xs text-center w-[90%]">{locale === 'ENG' ? "Nestled in breathtaking natural surroundings, Grand Hotel Pigna is evolving into a luxurious 5-star wellness retreat, embracing a new medical spa concept that fosters loyalty and encourages repeat visits.It is not merely a luxury destination but also a comprehensive thermal resort offering an extensive range of spa treatments and holistic wellness programmes with use of therapeutic thermal water.": 
            "Immerso in uno straordinario contesto naturale, il Grand Hotel Pigna si sta evolvendo in un lussuoso rifugio benessere a 5 stelle, abbracciando un nuovo concetto di medical spa che favorisce la fidelizzazione e invoglia a tornare. Non è semplicemente una destinazione di lusso, ma un vero e proprio resort termale completo, con un’ampia gamma di trattamenti spa e programmi di benessere olistico che sfruttano l’acqua termale terapeutica."}
            </p>
            <p className="font-normal xl:text-lg sm:text-xs text-center w-[95%]">{locale === 'ENG' 
              ? "This unique combination of luxury, wellness, heritage, and natural beauty attracts travellers from across northern Italy, regular visitors from France and Monaco, as well as guests from all over the world (US, UK, EU, MENA countries) due to its proximity to major international airports." :
              "Questa combinazione unica di lusso, benessere, patrimonio storico e bellezza naturale attrae viaggiatori da tutto il Nord Italia, visitatori abituali dalla Francia e da Monaco, nonché ospiti da tutto il mondo (Stati Uniti, Regno Unito, UE, paesi MENA) grazie alla vicinanza a importanti aeroporti internazionali."
              }</p>
          </div>
        </div>
        <div className="mt-14 flex justify-center items-center w-full xl:gap-10 sm:gap-2">
          <Image src={img2} alt="Essence of Pigna" className="w-1/2 sm:h-[220px] lg:h-full" />
          <Image src={img1} alt="Essence of Pigna" className="w-1/2 sm:h-[220px] lg:h-full" />
        </div>

        <div className="mt-20 flex w-full 2lg:justify-between 2lg:flex-nowrap sm:flex-wrap sm:justify-center sm:gap-4 2lg:gap-0 sm:hidden md:flex">
          {descriptionEls.map((el, index) => (
            <div key={index} className="flex items-center">
              <div className="flex flex-col gap-2 justify-center items-center">
                <span className="font-normal xl:text-xl sm:text-base">{locale === 'ENG' ? el.title : el.titleIt}</span>
                <span className="font-normal xl:text-lg sm:text-xs text-[#04180D99]">{locale === 'ENG' ? el.description : el.descriptionIt}</span>
              </div>
              {index !== descriptionEls.length - 1 && (
                <div className="h-full w-[1px] bg-gray-300 lg:ml-16 sm:ml-[8px]"></div>
              )}
            </div>
          ))}
        </div>
          {/* Responsive */}
        <div className="mt-7 justify-between items-center w-full gap-4 sm:flex md:hidden">
          {descriptionEls.slice(0, 3).map((el, index) => (
            <div key={index} className="flex items-center">
              <div className="flex flex-col gap-2 justify-center items-center">
                <span className="font-normal xl:text-xl sm:text-base">{el.title}</span>
                <span className="font-normal xl:text-lg sm:text-xs">{el.description}</span>
              </div>
              {index !== descriptionEls.length - 4 && (
                <div className="h-[24px] w-[1px] bg-gray-300 ml-[20px]"></div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-7 justify-between items-center w-full gap-4 sm:flex md:hidden">
          {descriptionEls.slice(3).map((el, index) => (
            <div key={index} className="flex items-center">
              <div className="flex flex-col gap-2 justify-center items-center">
                <span className="font-normal xl:text-xl sm:text-base">{el.title}</span>
                <span className="font-normal xl:text-lg sm:text-xs">{el.description}</span>
              </div>
              {index !== descriptionEls.length - 4 && (
                <div className="h-[24px] w-[1px] bg-gray-300 ml-[40px]"></div>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export { Description }