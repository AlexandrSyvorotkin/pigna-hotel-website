import bg_img from "../../assets/bg/bg-2.png";
import { useLocalization } from "../../context/useLocalization";
import {MainButton} from '../../ui/button/main-button'


const InvestOpportunities = () => {

  const { locale } = useLocalization();



  return (
    <div className="lg:mt-40 sm:mt-20 flex justify-center items-center lg:mb-56 sm:mb-6 px-[18px]">
      <div className="w-[1750px]">
        <div 
          className="w-full lg:h-[900px] sm:h-[400px] relative flex items-center justify-center"
          style={{
            backgroundImage: `url(${bg_img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
        {/* TODO: check responsiveness */}
          <div className="flex flex-col items-center lg:gap-4 sm:gap-2 text-main-white max-w-[930px] text-center px-[18px]">
            <span className="text-main-white lg:text-4xl sm:text-2xl font-patrizia font-normal uppercase">
              {locale === "ENG" ? "Investment opportunities" : "Opportunità di investimento"}
            </span>
            <p className="text-main-white lg:text-lg sm:text-xs font-helvetica font-normal w-full opacity-80">
              {locale === "ENG" ? 
              "The project’s unique location, in the heart of the Italian Riviera, in close proximity to the French Riviera and Monaco, on a site with a thermal and mineral water concession, hospital licence and zero kilometre supply chain, makes this a destination within a destination. Various financial and ownership options to participate in this project are possible." 
              : "La posizione unica del progetto, nel cuore della Riviera Italiana, in prossimità della Costa Azzurra e di Monaco, su un sito con concessione di acque termali e minerali, licenza ospedaliera e filiera a zero chilometri, rende questa una destinazione nella destinazione. Sono possibili diverse opzioni finanziarie e di proprietà per partecipare a questo progetto."}
            
            </p>
            <MainButton className="sm:py-[16px] sm:px-[30px] sm:text-xs lg:text-base lg:py-[22px] lg:px-[62px] ">
              {locale === "ENG" ? "MORE ABOUT THE PROJECT" : "Investi nel progetto"}
              MORE ABOUT THE PROJECT
            </MainButton>
          </div>
        </div>
        <div className="w-full lg:mt-52 sm:mt-20 flex justify-center">
          <div className="flex flex-col gap-4 text-black-main lg:w-3/4 sm:w-full">
            <h3 className="lg:text-4xl sm:text-2xl font-patrizia font-normal text-center uppercase">
              {locale === "ENG" ? "Our strategy is to ensure sustained guest interest, making your investment both profitable and forward-looking" 
              : "La nostra strategia punta a garantire un interesse costante degli ospiti, rendendo il tuo investimento sia redditizio che lungimirante."
              }
              
            </h3>
            {locale === "ENG" ? 
            <p className="lg:text-lg sm:text-xs font-helvetica font-normal text-center">
              Located in a historic area, this unique thermal wellness resort
              combines the charm of the past with modern luxury. As the only resort
              in the region with exclusive spa and medical treatments, it is
              poised to become a key attraction for affluent visitors year-round.
              This project is a secure investment with a mid-range return.
              Investing in the project is a unique and exciting opportunity with
              the potential to be developed into a world-class medical spa and a
              grand hotel.
            </p>
            : <p className="lg:text-lg sm:text-xs font-helvetica font-normal text-center">
            Situato in un’area storica, questo esclusivo resort termale unisce il fascino del passato 
            al lusso moderno. Essendo l’unico resort nella regione con trattamenti spa e medici esclusivi, 
            è destinato a diventare un’attrazione chiave per i visitatori facoltosi tutto l’anno. 
            Questo progetto rappresenta un investimento sicuro con un ritorno di medio termine. Investire nel progetto 
            è un’opportunità unica ed entusiasmante, con il potenziale di svilupparsi in una medical spa di livello mondiale 
            e in un grand hotel.
          </p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestOpportunities;
