import { useEffect, useState } from "react";
import { Presentation } from "../../components/presentation/presentation";
import { MainButton } from "../../ui/button/main-button";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useLocalization } from "../../context/useLocalization";

const textVariants = [
  {
    en: "park",
    it: "parco",  
  },
  {
    en: "playground",
    it: "area giochi",
  },
  {
    en: "padel court",
    it: "PADEL COURT",
  },
  {
    en: "club house",
    it: "club house",
  },
  {
    en: "helipad",
    it: "elisuperficie",
  },
  {
    en: "bike rental",
    it: "noleggio biciclette",
  },
  {
    en: "tennis court",
    it: "CAMPO DA TENNIS",
  },
];

const address = "https://termedipigna.com";

interface IClosedContent {
  bg_image_url: string;
  button_text: string;
  document_url: string;
  id: number;
  text: string;
  title: string;
}

const Docs = () => {
  const [closedContent, setClosedContent] = useState<IClosedContent[]>([]);


  const navigate = useNavigate();

  // useEffect(() => {
  //   const token = Cookies.get("cookie");

  //   if (!token || token.length === 0) {
  //     navigate("/main");
  //   }

  // }, [navigate]);

  const {locale} = useLocalization();

  useEffect(() => {
    const checkCookie = () => {
      const token = Cookies.get("cookie");

      if (!token || token.length === 0) {
        navigate("/main");
      }
    };

    checkCookie();

    const intervalId = setInterval(checkCookie, 60000);

    return () => clearInterval(intervalId);
  }, [navigate]);

  useEffect(() => {
    fetch("https://termedipigna.com/content/", {})
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Ошибка: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setClosedContent(data));
  }, []);

  console.log(closedContent);

  return (
    <div className="w-full h-full">
      <Presentation>
        <span className="font-normal 2lg:text-5xl sm:text-2xl text-main-white text-center font-patrizia uppercase opacity-80 2lg:w-[1200px] 2lg:leading-[87px]">
          {locale === 'ENG' ? "Grand Hotel Pigna Renovation Project." : "Progetto di Ristrutturazione del Grand Hotel Pigna. "}
          {locale === 'ENG' ? "Project Details and Financial Overview" : "Dettagli del Progetto e Panoramica Finanziaria"}
        </span>
      </Presentation>

      <div className="w-full flex flex-col">
        {closedContent.slice(0, 2).map((item) => {
          const isImg = item.bg_image_url.endsWith('.png')
          const bgImgStyle = isImg ? { backgroundImage: `url("${address}${item.bg_image_url}")` } : { backgroundColor: '#EDF1EE' };
          const textColor = isImg ? 'text-main-white' : 'text-black-main'

          return (
            <div className={`w-full lg:h-[700px] sm:h-[450px] flex justify-center items-center px-[18px]`} key={item.id} style={bgImgStyle}>
              <div className="flex flex-col gap-6 justify-center items-center w-full">
                <h2 className={`${textColor} lg:text-xl sm:text-xs font-patrizia font-normal text-center lg:w-1/2 sm:w-full uppercase`}>
                  {item.title}
                </h2>
                <p className={`${textColor} lg:text-lg sm:text-xs font-helvetica font-normal text-center lg:w-1/2 sm:w-full`}>
                  {item.text}
                </p>
                {item.button_text === null ? null : (
                  <a href={`${address}${item.document_url}`} download target="_blank">
                    <MainButton className="text-main-white uppercase lg:text-base sm:text-xs sm:px-[22px] sm:py-[10px]">
                      {item.button_text}
                    </MainButton>
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="w-full bg-main-color flex justify-center items-center lg:mt-48 lg:mb-48 sm:mt-24 sm:mb-24 px-[18px]">
        <div className="w-3/4 h-full flex flex-col gap-4 justify-center items-center">
          <h2 className="text-black-main lg:text-5xl sm:text-2xl font-patrizia font-normal text-center w-full uppercase">
            {locale === "ENG" ? "NEW OUTDOOR VENUES" : "NUOVI ESPOSTI ESTERNI"}

          </h2>
          <span className="text-center lg:text-xl sm:text-xs">
            {locale === "ENG" ? "will be built in accordance to the hotel’s renovation plan:" : "Saranno realizzate in conformità con il piano di ristrutturazione dell’hotel:"}
          </span>
          <div className="flex gap-4 justify-center items-center flex-wrap lg:w-1/2 sm:w-full">
            {textVariants.map((text) => (
              <span className="text-black-main lg:text-xl sm:text-base font-helvetica font-normal text-center uppercase">
                {locale === "ENG" ? text.en : text.it}
              </span>
            ))}
          </div>
          {locale === "ENG" ? 
          <p className="text-black-main lg:text-xl sm:text-xs font-helvetica font-normal text-center w-full">
            The listed venues are planned to be built on the municipal area with
            a long-term lease. The sport facilities will be used either solely
            by the hotel guests or also available for visits of the area
            residents with an entrance fee. The tennis courts might be operated
            in a possible cooperation with a famous regional tennis academy.
          </p> : <p className="text-black-main lg:text-xl sm:text-xs font-helvetica font-normal text-center w-full">
          Le strutture elencate sono previste su area municipale con contratto di locazione a lungo termine. Le strutture sportive saranno utilizzate esclusivamente dagli ospiti dell’hotel o potranno essere aperte anche ai residenti locali dietro pagamento di un ticket d’ingresso. I campi da tennis potrebbero essere gestiti in collaborazione con una famosa accademia tennistica regionale.
          </p> }
        </div>
      </div>
      

      <div className="w-full flex flex-col">
        {closedContent.slice(2).map((item) => {

          const isImg = item.bg_image_url.endsWith('.png')

          // const bgImg = isImg ? `bg-[url("${address}${item.bg_image_url}")] bg-cover bg-center` : 'bg-main-white'

          const bgImgStyle = isImg ? { backgroundImage: `url("${address}${item.bg_image_url}")` } : { backgroundColor: '#EDF1EE' };

          // console.log(bgImg)

          const textColor = isImg ? 'text-main-white' : 'text-black-main'

          return (
            <div className={`w-full lg:h-[700px] sm:h-[450px] flex justify-center items-center px-[18px]`} key={item.id} style={bgImgStyle}>
              <div className="flex flex-col gap-6 justify-center items-center w-full">
                <h2 className={`${textColor} lg:text-xl sm:text-xs font-patrizia font-normal text-center lg:w-1/2 sm:w-full uppercase`}>
                  {item.title}
                </h2>
                <p className={`${textColor} lg:text-lg sm:text-xs font-helvetica font-normal text-center lg:w-1/2 sm:w-full`}>
                  {item.text}
                </p>
                {item.button_text === null ? null : (
                  <a href={`${address}${item.document_url}`} download target="_blank">
                    <MainButton className="text-main-white uppercase lg:text-base sm:text-xs sm:px-[22px] sm:py-[10px]">
                      {item.button_text}
                    </MainButton>
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    

    </div>
  );
};

export { Docs };
