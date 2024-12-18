import { Logo } from "../../components/logo/logo";
import { useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const location = useLocation();
  const navigate = useNavigate();
  const isPrivacyPage = location.pathname === "/privacy";

   const validRoutes = ["/main", "/docs", '/privacy'];
   const isValidRoute = validRoutes.includes(location.pathname);
 
   if (!isValidRoute) return null;

  return (
    <footer
      className={`w-full flex justify-center items-center pb-20 pt-16 px-[18px] ${
        isPrivacyPage ? "bg-loading-color" : "bg-main-white"
      }`}
    >
      <div className="w-[1750px] flex flex-col gap-12">
        <Logo size="lg" color="black" />
        <div className="w-full h-[1px] bg-black-main"></div>
        <div className="w-full flex 2lg:flex-row sm:flex-col-reverse justify-between items-center">
          <div className="flex 2xl:gap-20 xl:gap-6 2lg:items-end sm:items-center 2lg:flex-row sm:flex-col-reverse sm:mt-6 2lg:mt-0">
            <div
              className={`flex flex-col gap-6 2lg:w-[240px] sm:w-full sm:items-center 2lg:items-start ${
                isPrivacyPage ? "text-main-white" : "text-black-main"
              }`}
            >
              <span onClick={() => navigate("/privacy")} className="cursor-pointer">Privacy Policy</span>
              <p className="opacity-60 uppercase">
                ©Otto Pigna S.R.L., Inc. 2024 All rights reserved.
              </p>
            </div>
            <div
              className={`flex flex-col gap-2 ${
                isPrivacyPage ? "text-main-white" : "text-black-main"
              }`}
            >
              <span className="uppercase">Contacts for communication:</span>
              <span className="uppercase">contacts@thermedipigna.com</span>
            </div>
          </div>
          <div className="flex 2xl:gap-20 xl:gap-6 2lg:flex-row sm:flex-col sm:gap-6 2lg:gap-0">
            <div
              className={`flex flex-col gap-4 sm:items-center 2lg:items-start ${
                isPrivacyPage ? "text-main-white" : "text-black-main"
              }`}
            >
              <span
                onClick={() => scrollToSection("features")}
                className="cursor-pointer"
              >
                FEATURES
              </span>
              <span
                onClick={() => scrollToSection("essence-of-pigna")}
                className="cursor-pointer"
              >
                ESSENCE OF PIGNA
              </span>
              <span
                onClick={() => scrollToSection("location")}
                className="cursor-pointer"
              >
                LOCATION
              </span>
            </div>
            <div
              className={`flex flex-col gap-4 sm:items-center 2lg:items-start ${
                isPrivacyPage ? "text-main-white" : "text-black-main"
              }`}
            >
              <span
                onClick={() => scrollToSection("wellness-spa")}
                className="cursor-pointer"
              >
                WELLNESS & SPA
              </span>
              <span
                onClick={() => scrollToSection("cuisine")}
                className="cursor-pointer"
              >
                CUISINE
              </span>
              <span
                onClick={() => scrollToSection("building-territory")}
                className="cursor-pointer"
              >
                BUILDING & TERRITORY
              </span>
            </div>
            <div
              className={`flex flex-col gap-4 sm:items-center 2lg:items-start ${
                isPrivacyPage ? "text-main-white" : "text-black-main"
              }`}
            >
              <span
                onClick={() => scrollToSection("architecture")}
                className="cursor-pointer"
              >
                ARCHITECTURE
              </span>
              <span
                onClick={() => scrollToSection("project-timeline")}
                className="cursor-pointer"
              >
                PROJECT TIMELINE
              </span>
              <span
                onClick={() => scrollToSection("invest-in-the-project")}
                className="cursor-pointer"
              >
                INVEST IN THE PROJECT
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
