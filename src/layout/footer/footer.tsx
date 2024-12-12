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
      className={`w-full flex justify-center items-center pb-20 pt-16 ${
        isPrivacyPage ? "bg-loading-color" : "bg-main-white"
      }`}
    >
      <div className="w-[1750px] flex flex-col gap-12">
        <Logo />
        <div className="w-full h-[1px] bg-black-main"></div>
        <div className="w-full flex justify-between">
          <div className="flex gap-20 items-end">
            <div
              className={`flex flex-col gap-6 w-[240px] ${
                isPrivacyPage ? "text-main-white" : "text-black-main"
              }`}
            >
              <span onClick={() => navigate("/privacy")} className="cursor-pointer">Privacy Policy</span>
              <p className="opacity-60">
                ©Otto Pigna S.R.L., Inc. 2024 All rights reserved.
              </p>
            </div>
            <div
              className={`flex flex-col gap-2 ${
                isPrivacyPage ? "text-main-white" : "text-black-main"
              }`}
            >
              <span>Contacts for communication:</span>
              <span>contacts@thermedipigna.com</span>
            </div>
          </div>
          <div className="flex gap-20">
            <div
              className={`flex flex-col gap-4 ${
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
              className={`flex flex-col gap-4 ${
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
              className={`flex flex-col gap-4 ${
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
