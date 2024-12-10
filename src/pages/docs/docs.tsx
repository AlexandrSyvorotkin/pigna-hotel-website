import { Presentation } from "../../components/presentation/presentation";

const Docs = () => {
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
      <div>
        da
      </div>
    </div>
  );
};

export { Docs };
