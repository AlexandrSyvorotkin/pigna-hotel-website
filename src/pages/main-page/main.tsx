import { Banner } from "../../components/banner/banner";
import { Cuisine } from "../../components/cuisine/cuisine";
import { Description } from "../../components/description/description";
import { InteriorDesign } from "../../components/interior-design/interior-design";
import InvestOpportunities from "../../components/invest-opportunities/invest-opportunities";
import { Presentation } from "../../components/presentation/presentation";
import { ProjectTimeline } from "../../components/project-timeline/project-timeline";
import { EssenceOfPigna } from "../../components/essence-of-pigna/essence-of-pigna";
import { Resourses } from "../../components/resourses/resourses";
import { WellnessSpa } from "../../components/wellness-spa/wellness-spa";
import { Location } from "../../components/location/location";
import { MainButton } from "../../ui/button/main-button";
import { useNavigate } from "react-router-dom";
import { useLocalization } from "../../context/useLocalization";




const MainPage = () => {
  const navigate = useNavigate();

  const { locale } = useLocalization();

  const btnText = locale === 'ENG' ? 'INVEST THE PROJECT' : 'INVESTI NEL PROGETTO';


  return (
    <>
      <Presentation
        button={
          <MainButton
            onClick={() => navigate("/registration")}
            className="sm:py-[16px] sm:px-[30px] sm:text-xs lg:text-base lg:py-[22px] lg:px-[62px]"
          >
            <span className="hover:opacity-70">{btnText}</span>
          </MainButton>
        }
      >
        <span className="font-normal lg:text-6xl sm:text-3xl text-main-white text-center font-patrizia uppercase opacity-80 lg:w-[800px] lg:leading-[87px]">
          {locale === 'ENG' ? 'Every detail is crafted for a remarkable stay' : 'Ogni dettaglio è progettato per un soggiorno eccezionale'}
        </span>
      </Presentation>
      <Banner className="h-[450px]">
        <div className="flex flex-col gap-4 xl:w-3/5 sm:w-full sm:px-[18px]">
          <p className="lg:text-xl sm:text-base font-helvetica font-normal text-center uppercase text-main-white">
            {locale === 'ENG' ? 'Grand Hotel Pigna is designed as a world-class medical spa, the only thermal wellness retreat in the region, and the largest spa on theLigurian Riviera' : 'IL GRAND HOTEL PIGNA È PROGETTATO COME UN CENTRO TERMALE DI CLASSE MONDIALE, L\'UNICO RITIRO BENESSERE TERMALE DELLA REGIONE E IL PIÙ GRANDE CENTRO TERMALE DELLA RIVIERA LIGURE'}
          </p>
          <p className="lg:text-lg sm:text-xs font-helvetica font-normal text-center opacity-80 text-main-white mt-2">
            {locale === 'ENG' ? "Immerse yourself in thermal springs, lush valleys, and the mountainous landscapes of Liguria while staying in a luxury 5-star resort with a unique holistic medical spa concept that combines traditional medicine, modern therapies, and the latest medical developments." :
            "Immergiti nelle sorgenti termali, nelle verdi valli e negli scenari montuosi della Liguria, soggiornando in un resort di lusso a 5 stelle con un esclusivo concetto di medical spa olistica che combina medicina tradizionale, terapie moderne e le più recenti innovazioni in campo medico."
            }
          </p>
          <p className="lg:text-lg sm:text-xs font-helvetica font-normal text-center opacity-80 text-main-white">
            {locale === 'ENG' ? "The project consists of the renovation of the thermal hotel building, the extension of the territory, spa and restaurant areas and the transformation of the hotel into a luxurious 5-star wellness retreat offering the most exclusive services and charm in the picturesque and tranquil part of Liguria." :
            "Il progetto prevede la ristrutturazione dell’edificio dell’hotel termale, l’ampliamento del territorio, delle aree spa e ristorazione e la trasformazione dell’hotel in un lussuoso rifugio benessere a 5 stelle, capace di offrire i più esclusivi servizi e tutto il fascino di una delle zone più pittoresche e tranquille della Liguria."}
          </p>
        </div>
      </Banner>
      <Description />
      <Banner className="h-[400px]">
        <div className="flex flex-col gap-4 xl:w-3/5 sm:w-full sm:px-[18px]">
          <p className="text-main-white lg:text-4xl sm:text-xl font-patrizia text-center w-[100%] uppercase lg:leading-[60px]">
            {locale === 'ENG'
            ? "The hotel was highlighted as a project of regional significance. The renovation of the hotel gave local residents and municipal authorities a hope for relaunch and rebirth for Pigna and for the whole Nervia Valley."
          : "L’hotel è stato evidenziato come un progetto di rilevanza regionale. La ristrutturazione dell’hotel ha restituito ai residenti locali e alle autorità municipali la speranza di un rilancio e di una rinascita per Pigna e per l’intera Valle del Nervia."
          }
          </p>
        </div>
      </Banner>
      <EssenceOfPigna />
      <Location />
      <Resourses />
      <WellnessSpa />
      <Cuisine />
      <InteriorDesign />
      <ProjectTimeline />
      <InvestOpportunities />
    </>
  );
};

export { MainPage };
