import { Image } from "../../ui/img/image.tsx";
import bg from "../../assets/bg/bg-registration.png";
import { RegistrationForm } from "../../components/registration/registration-form.tsx";

const Registration = () => {
  return (
    <div className=" bg-loading-color w-full 2lg:h-[calc(100dvh-80px)] sm:h-[calc(100%-100px)] sm:pb-10 2lg:pb-0 flex justify-between 2lg:flex-row sm:flex-col sm:gap-16 2lg:gap-0 items-center mt-[80px] sm:px-[18px] 2lg:px-0 h-full">
      <div className="2lg:w-5/12 sm:w-full h-full">
        <RegistrationForm />
      </div>
      <div className="2lg:w-7/12 sm:w-full md:h-full sm:h-[400px]">
        <Image src={bg} alt="registration" className="w-full h-full" />
      </div>
    </div>
  );
};

export default Registration;
