import { useEffect } from "react";
import { Presentation } from "../../components/presentation/presentation";
import { MainButton } from "../../ui/button/main-button";
import Cookies from "js-cookie";

const textVariants = [
  "park",
  "playground",
  "padel court",
  "club house",
  "helipad",
  "bike rental",
  "tennis court",
];

const Docs = () => {
  
  useEffect(() => {
    const token = Cookies.get("cookie");
    console.log(token);


    if (token) {
      fetch("https://dev.termedipigna.com/content/", {
        method: "GET",
        headers: {
          "Accept": "application/json",
        },
        credentials: "include",
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(`Ошибка: ${res.status}`);
          }
          return res.json();
        })
        .then((data) => console.log(data))
        .catch((error) => console.error("Ошибка при получении данных:", error));
    } else {
      console.error("Токен не найден в куки.");
    }
  }, []);

  return (
    <div className="w-full h-full">
      <Presentation text="Grand Hotel Pigna Renovation Project. Project Details and Financial Overview" />

      <div className="w-full bg-main-color flex justify-center items-center mt-48 mb-48">
        <div className="w-1/2 h-full flex flex-col gap-4 justify-center items-center">
          <span className="text-black-main text-4xl font-helvetica font-normal text-center w-full uppercase">
            Welcome to the financial details and documentation hub of the Grand
            Hotel Pigna renovation project.
          </span>
          <p className="text-black-main text-xl font-helvetica font-normal text-center w-full">
            This webpage provides a comprehensive insight into the feasibility
            study, financial projections, architectural projects and supporting
            documents that underpin our vision for the revitalisation of the
            hotel. Our aim is to enhance the guest experience through state of
            the art improvements and create a unique world-class wellness resort
            while ensuring a robust financial return for the investors.
          </p>
        </div>
      </div>

      <div className='w-full bg-[url("./assets/bg/bg-project.png")] bg-cover bg-center h-[700px] flex justify-center items-center'>
        <div className="flex flex-col gap-6 justify-center items-center w-full">
          <h2 className="text-main-white text-4xl font-patrizia font-normal text-center w-full uppercase">
            Architectural project
          </h2>
          <p className="text-main-white text-xl font-helvetica font-normal text-center w-1/2">
            The resort comprises three distinct buildings: the main hotel and
            thermal spa building , the historic Terme building featuring a
            restaurant, and a historic mill. The renovation of the main hotel
            building is designed by the award-winning architect Alex Kravetz,
            whose vision aims to elevate the property to the luxury 5-star
            standard. The architectural project encompasses enhancements to
            accommodation options, expansion of hotel facilities, dining and
            wellness areas, crafted to provide an exceptional guest experience.
          </p>
          <MainButton className="text-main-white uppercase">
            Download the architectural project
          </MainButton>
        </div>
      </div>

      <div className="w-full bg-main-color flex justify-center items-center mt-48 mb-48">
        <div className="w-1/2 h-full flex flex-col gap-8 justify-center items-center">
          <h2 className="text-black-main text-4xl font-patrizia font-normal text-center w-full uppercase">
            NEW OUTDOOR VENUES
          </h2>
          <span>
            will be built in accordance to the hotel’s renovation plan:{" "}
          </span>
          <div className="flex gap-4 justify-center items-center flex-wrap w-3/4">
            {textVariants.map((text) => (
              <span className="text-black-main text-xl font-helvetica font-normal text-center uppercase">
                {text}
              </span>
            ))}
          </div>
          <p className="text-black-main text-xl font-helvetica font-normal text-center w-full">
            The listed venues are planned to be built on the municipal area with
            a long-term lease. The sport facilities will be used either solely
            by the hotel guests or also available for visits of the area
            residents with an entrance fee. The tennis courts might be operated
            in a possible cooperation with a famous regional tennis academy.
          </p>
        </div>
      </div>

      <div className='w-full bg-[url("./assets/bg/study.png")] bg-cover bg-center h-[700px] flex justify-center items-center'>
        <div className="flex flex-col gap-6 justify-center items-center w-full">
          <h2 className="text-main-white text-4xl font-patrizia font-normal text-center w-full uppercase">
            Feasibility study
          </h2>
          <p className="text-main-white text-xl font-helvetica font-normal text-center w-1/2">
            The feasibility study includes a detailed description of the
            location, market analysis, description of the hotel concept, project
            advantages, resources for project implementation.
          </p>
          <MainButton className="text-main-white uppercase">
            Download the architectural project
          </MainButton>
        </div>
      </div>

      <div className="w-full bg-white-main h-[700px] flex justify-center items-center">
        <div className="flex flex-col gap-6 justify-center items-center">
          <h2 className="text-black-main text-4xl font-patrizia font-normal text-center w-full uppercase">
            Financial plan
          </h2>
          <p className="text-black-main text-xl font-helvetica font-normal text-center w-1/2">
            The financial plan provides a breakdown of costs and revenues, and
            the payback period of the project.
          </p>
          <MainButton className="text-main-white uppercase">
            Download the feasibility study
          </MainButton>
        </div>
      </div>
    </div>
  );
};

export { Docs };
