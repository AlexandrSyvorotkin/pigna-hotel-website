// import { Container } from "../container/container"
import img1 from "../../assets/hotel/img/img1.png";
import img2 from "../../assets/hotel/img/img2.png";
import { Image } from "../../ui/img/image";
import { useLocalization } from "../../context/useLocalization.tsx";
import { ResponsiveContentContainer } from "../responsive-content-container/responsive-content-container.tsx";
import { Heading } from "../heading/heading.tsx";

const descriptionEls = [
  {
    title: "13 000 sq. m.",
    description: "Hotel area",
    titleIt: "13.000 mq ",
    descriptionIt: "Area dell’hotel",
    hasDivider: true,
  },
  {
    isDivider: true,
  },
  {
    title: "4",
    description: "Restaurants",
    titleIt: "Ristoranti",
    descriptionIt: "4",
    hasDivider: true,
  },
  {
    isDivider: true,
  },
  {
    title: "20 000 sq. m.",
    description: "Land area",
    titleIt: "Area del terreno",
    descriptionIt: "20 000 mq",
    hasDivider: false,
  },
  {
    isDivider: false,
  },
  {
    title: "3",
    description: "Buildings",
    titleIt: "Edifici",
    descriptionIt: "3",
    hasDivider: true,
  },
  {
    isDivider: true,
  },
  {
    title: "5000 sq. m.",
    description: "SPA & Medical area",
    titleIt: "Area SPA & Medical",
    descriptionIt: "5000 mq",
    hasDivider: true,
  },
  {
    isDivider: true,
  },
  {
    title: "68",
    description: "Suites",
    titleIt: "Suite",
    descriptionIt: "68",
    hasDivider: false,
  },
];

const Description = () => {
  const { locale } = useLocalization();

  return (
    <ResponsiveContentContainer>
      <div className="w-full flex justify-center items-center ">
        <div
          className="h-full xl:py-44 lg:py-20 sm:py-10 lg:w-[85%] md:w-full"
          id="features"
        >
          <div className="flex justify-center items-center">
            <div className="flex flex-col gap-5 justify-center items-center font-helvetica text-black-main lg:w-[80%] md:w-full">
                <Heading
                    tag="h2"
                    className="text-center uppercase font-patrizia md:w-full sm:w-[70%]"
                  >
                    {locale === "ENG"
                      ? "UNIQUE FEATURES OF THE HOTEL PROJECT"
                      : "CARATTERISTICHE UNICHE DEL PROGETTO ALBERGHIERO"}
                  </Heading>
              <p className="font-normal text-responsive  text-center">
                {locale === "ENG"
                  ? "Nestled in breathtaking natural surroundings, Grand Hotel Pigna is evolving into a luxurious 5-star wellness retreat, embracing a new medical spa concept that fosters loyalty and encourages repeat visits.It is not merely a luxury destination but also a comprehensive thermal resort offering an extensive range of spa treatments and holistic wellness programmes with use of therapeutic thermal water."
                  : "Immerso in uno straordinario contesto naturale, il Grand Hotel Pigna si sta evolvendo in un lussuoso rifugio benessere a 5 stelle, abbracciando un nuovo concetto di medical spa che favorisce la fidelizzazione e invoglia a tornare. Non è semplicemente una destinazione di lusso, ma un vero e proprio resort termale completo, con un’ampia gamma di trattamenti spa e programmi di benessere olistico che sfruttano l’acqua termale terapeutica."}
              </p>
              <p className="font-normal text-responsive   text-center">
                {locale === "ENG"
                  ? "This unique combination of luxury, wellness, heritage, and natural beauty attracts travellers from across northern Italy, regular visitors from France and Monaco, as well as guests from all over the world (US, UK, EU, MENA countries) due to its proximity to major international airports."
                  : "Questa combinazione unica di lusso, benessere, patrimonio storico e bellezza naturale attrae viaggiatori da tutto il Nord Italia, visitatori abituali dalla Francia e da Monaco, nonché ospiti da tutto il mondo (Stati Uniti, Regno Unito, UE, paesi MENA) grazie alla vicinanza a importanti aeroporti internazionali."}
              </p>
            </div>
          </div>
          <div className="mt-14 flex justify-between items-center w-full gap-6">
            <Image src={img2} alt="Essence of Pigna" className="w-1/2 h-full" />
            <Image src={img1} alt="Essence of Pigna" className="w-1/2 h-full" />
          </div>

          {/* // Resposinve > 1280px и выше */}
          <div className="mt-20 w-full flex-wrap justify-between gap-4 sm:hidden lg:flex font-helvetica">
            {descriptionEls
              .filter((el) => el.title && el.title.length > 0)
              .map((el, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex flex-col gap-2 justify-center items-center">
                    <span className="font-normal lg:text-[21px] md:text-[18px] text-black-main">
                      {locale === "ENG" ? el.title : el.titleIt}
                    </span>
                    <span className="font-normal text-responsive text-black-main opacity-60">
                      {locale === "ENG" ? el.description : el.descriptionIt}
                    </span>
                  </div>
                  {index !== descriptionEls.length - 1 && (
                    <div className="h-full w-[1px] bg-gray-300 xl:ml-[80px] lg:ml-[40px]"></div>
                  )}
                </div>
              ))}
          </div>

          {/* // Resposinve 360px и ниже */}
          <div className="mt-7 w-full flex justify-between items-center sm:flex lg:hidden">
            {descriptionEls.slice(0, 5).map((el, index) => (
              <>
                {!el.isDivider ? (
                  <div key={index} className="flex items-center gap-4">
                    <div className="flex flex-col gap-2 justify-between items-center">
                      <span className="font-normal lg:text-[21px] md:text-[18px] text-black-main">
                        {locale === "ENG" ? el.title : el.titleIt}
                      </span>
                      <span className="font-normal text-responsive text-black-main">
                        {locale === "ENG" ? el.description : el.descriptionIt}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="h-[40px] w-[1px] bg-gray-300" />
                )}
              </>
            ))}
          </div>
          <div className="mt-7 w-full flex justify-between items-center sm:flex lg:hidden">
            {descriptionEls.slice(6).map((el, index) => (
              <>
                {!el.isDivider ? (
                  <div key={index} className="flex items-center gap-4">
                    <div className="flex flex-col gap-2 justify-between items-center">
                      <span className="font-normal lg:text-[21px] md:text-[18px] text-black-main">
                        {locale === "ENG" ? el.title : el.titleIt}
                      </span>
                      <span className="font-normal text-responsive text-black-main">
                        {locale === "ENG" ? el.description : el.descriptionIt}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="h-[40px] w-[1px] bg-gray-300" />
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </ResponsiveContentContainer>
  );
};

export { Description };
