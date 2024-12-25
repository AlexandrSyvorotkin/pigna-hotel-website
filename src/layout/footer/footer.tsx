import { Logo } from "../../components/logo/logo";
import { useLocation, useNavigate } from "react-router-dom";
import starBlack from "../../assets/star/star.svg";
import starWhite from "../../assets/star/StarW.svg";
import { useLocalization } from "../../context/useLocalization";
import Cookies from 'js-cookie'

const Footer = () => {
  
  const scrollToSection = (sectionId: string, offset: number = 0) => {
    const element = document.getElementById(sectionId);
    if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition + offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }

  };

  const location = useLocation();
  const navigate = useNavigate();
  const isPrivacyPage = location.pathname === "/privacy";

  const validRoutes = ["/main", "/docs", "/privacy"];
  const isValidRoute = validRoutes.includes(location.pathname);

  

  const textColor = isPrivacyPage ? "text-main-white" : "text-black-main";

  const borderColor = isPrivacyPage ? "bg-main-white" : "bg-black-main";

  const { locale } = useLocalization();


  const enterText = locale === 'ENG' ? 'INVEST THE PROJECT' : 'INVESTI NEL PROGETTO';

  const cookie = Cookies.get("cookie");
  const btnText = cookie && cookie.trim().length > 0 ? 'ENTER THE DOCS' : enterText;

  const navigateHandler = () => {
    if (cookie && cookie.trim().length > 0) {
      navigate("/docs");
    } else {
      navigate("/registration");
    }
  };

  if (!isValidRoute) return null;

  return (
    <footer
      className={`w-full flex justify-center items-center pb-20 pt-16 px-[18px] ${
        isPrivacyPage ? "bg-loading-color" : "bg-main-white"
      }`}
    >
      <div className="w-[1750px] flex flex-col gap-12">
        <Logo
          size="lg"
          color={isPrivacyPage ? "white" : "black"}
          img={isPrivacyPage ? starWhite : starBlack}
          content={
            <>
              <span className={`${textColor} md:text-5xl sm:text-2xl font-patrizia`}>
                GRAND
              </span>
              <span className={`${textColor} md:text-8xl sm:text-4xl font-patrizia`}>
                PIGNA
              </span>
              <span className={`${textColor} md:text-5xl sm:text-2xl font-patrizia`}>
                HOTEL
              </span>
            </>
          }
        />
        <div className={`w-full h-[1px] ${borderColor}`}></div>
        <div className="w-full flex 2lg:flex-row sm:flex-col-reverse justify-between items-center">
          <div className="flex 2xl:gap-20 xl:gap-6 2lg:items-end sm:items-center 2lg:flex-row sm:flex-col-reverse sm:mt-6 2lg:mt-0">
            <div
              className={`flex flex-col 2xl:gap-6 xl:gap-2 2lg:w-[240px] sm:w-full sm:items-center 2lg:items-start ${
                isPrivacyPage ? "text-main-white" : "text-black-main"
              }`}
            >
              <span
                onClick={() => navigate("/privacy")}
                className="cursor-pointer transition duration-300 ease-in-out hover:opacity-70 sm:mt-4 md:mt-0"
              >
                Privacy Policy
              </span>
              <p className="opacity-60 uppercase sm:text-center lg:text-left">
                {locale === "ENG" ? 
                "©Otto Pigna S.R.L., Inc. 2024 All rights reserved." 
                : "© Otto Pigna S.R.L., Inc. 2024 Tutti i diritti riservati."}
              </p>
            </div>
            <div
              className={`flex flex-col gap-2 ${
                isPrivacyPage ? "text-main-white" : "text-black-main"
              }`}
            >
              <span className="uppercase">
                {locale === "ENG" ? "Contacts for communication:" : "Contatti per comunicazioni:"}
              </span>
              <span className="uppercase">contacts@thermedipigna.com</span>
            </div>
          </div>
          <div className="flex 2xl:gap-10 xl:gap-2 2lg:flex-row sm:flex-col sm:gap-6 2lg:gap-0">
            <div
              className={`flex flex-col gap-4 sm:items-center 2lg:items-start justify-end ${
                isPrivacyPage ? "text-main-white" : "text-black-main"
              }`}
            >
              <span
                onClick={() => scrollToSection("features", -30)}
                className="cursor-pointer transition duration-300 ease-in-out hover:opacity-70"
              >
                {locale === "ENG" ? "FEATURES" : "CARATTERISTICHE"}
              </span>
              <span
                onClick={() => scrollToSection("essence-of-pigna", -120)}
                className="cursor-pointer transition duration-300 ease-in-out hover:opacity-70"
              >
                {locale === "ENG" ? "ESSENCE OF PIGNA" : "L’ESSENZA DI PIGNA"}
              </span>
            </div>
            <div
              className={`flex flex-col gap-4 sm:items-center 2lg:items-start justify-end ${
                isPrivacyPage ? "text-main-white" : "text-black-main"
              }`}
            > 
              <span
                onClick={() => scrollToSection("location", -120)}
                className="cursor-pointer transition duration-300 ease-in-out hover:opacity-70"
              >
                {locale === "ENG" ? "LOCATION" : "POSIZIONE"}
              </span>
              <span
                onClick={() => scrollToSection("wellness-spa")}
                className="cursor-pointer transition duration-300 ease-in-out hover:opacity-70"
              >
                WELLNESS & SPA
              </span>
            </div>
            <div
              className={`flex flex-col gap-4 sm:items-center 2lg:items-start justify-end ${
                isPrivacyPage ? "text-main-white" : "text-black-main"
              }`}
            >
            <span
                onClick={() => scrollToSection("cuisine", -120)}
                className="cursor-pointer transition duration-300 ease-in-out hover:opacity-70"
              >
                {locale === "ENG" ? "CUISINE" : "CUCINA"}
              </span>
              <span
                onClick={() => scrollToSection("building-territory", -120)}
                className="cursor-pointer transition duration-300 ease-in-out hover:opacity-70"
              >
                {locale === "ENG" ? "BUILDING & TERRITORY" : "EDIFICIO & TERRITORIO"}
              </span>
            </div>
            <div
              className={`flex flex-col gap-4 sm:items-center 2lg:items-start ${
                isPrivacyPage ? "text-main-white" : "text-black-main"
              }`}
            >
              <span
                onClick={() => scrollToSection("architecture", -120)}
                className="cursor-pointer transition duration-300 ease-in-out hover:opacity-70"
              >
                {locale === "ENG" ? "ARCHITECTURE" : "ARCHITETTURA"}
              </span>
              <span
                onClick={() => scrollToSection("project-timeline")}
                className="cursor-pointer transition duration-300 ease-in-out hover:opacity-70"
              >
                {locale === "ENG" ? "PROJECT TIMELINE" : "CRONOLOGIA DEL PROGETTO"}
              </span>
              <span
                onClick={navigateHandler}
                className="cursor-pointer transition duration-300 ease-in-out hover:opacity-70"
              >
                {btnText}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
