import { Image } from '../../ui/img/image.tsx'
import bg from '../../assets/bg/bg-registration.png'
import { RegistrationForm } from '../../components/registration/registration-form.tsx';

const Registration = () => {
  return <div className="bg-loading-color w-full h-[calc(100vh-80px)] flex justify-between items-center mt-[80px]">
    <div className="w-5/12 h-full">
      <RegistrationForm />
    </div>
    <div className="w-7/12 h-full">
      <Image src={bg} alt="registration" className="w-full h-full" />
    </div>
  </div>;
};

export default Registration;
