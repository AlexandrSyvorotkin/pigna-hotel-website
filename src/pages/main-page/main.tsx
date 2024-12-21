import { Banner } from "../../components/banner/banner";
import { Cuisine } from "../../components/cuisine/cuisine";
import { Description } from "../../components/description/description";
import { InteriorDesign } from "../../components/interior-design/interior-design";
import InvestOpportunities from "../../components/invest-opportunities/invest-opportunities";
import { Presentation } from "../../components/presentation/presentation";
import { ProjectTimeline } from "../../components/project-timeline/project-timeline";
import { EssenceOfPigna, Region } from "../../components/essence-of-pigna/essence-of-pigna";
import { Resourses } from "../../components/resourses/resourses";
import { WellnessSpa } from "../../components/wellness-spa/wellness-spa";
import { Location } from "../../components/location/location";
import { MainButton } from "../../ui/button/main-button";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Presentation
        text="Every detail is crafted for a remarkable stay"
        button={
          <MainButton onClick={() => navigate("/registration")}>
            <span>INVEST THE PROJECT</span>
          </MainButton>
        }
      />
      <Banner className="h-[450px]">
        <div className="flex flex-col gap-4 xl:w-1/2 sm:w-full sm:px-[18px]">
          <p className="lg:text-2xl sm:text-base font-helvetica font-normal text-center uppercase text-main-white">
            Grand Hotel Pigna is designed as a world-class medical spa, the only
            thermal wellness retreat in the region, and the largest spa on the
            Ligurian Riviera
          </p>
          <p className="lg:text-lg sm:text-xs font-helvetica font-normal text-center opacity-80 text-main-white">
            Immerse yourself in thermal springs, lush valleys, and the
            mountainous landscapes of Liguria while staying in a luxury 5-star
            resort with a unique holistic medical spa concept that combines
            traditional medicine, modern therapies, and the latest medical
            developments.
          </p>
          <p className="lg:text-lg sm:text-xs font-helvetica font-normal text-center opacity-80 text-main-white">
            The project consists of the renovation of the thermal hotel
            building, the extension of the territory, spa and restaurant areas
            and the transformation of the hotel into a luxurious 5-star wellness
            retreat offering the most exclusive services and charm in the
            picturesque and tranquil part of Liguria.
          </p>
        </div>
      </Banner>
      <Description /> 
      <Banner className="h-[400px]">
        <p className="text-main-white lg:text-4xl sm:text-xl font-patrizia text-center w-3/4 uppercase lg:leading-10">
          The hotel was highlighted as a project of regional significance. The
          renovation of the hotel gave local residents and municipal authorities
          a hope for relaunch and rebirth for Pigna and for the whole Nervia
          Valley.
        </p>
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
