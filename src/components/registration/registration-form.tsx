import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { MainButton } from "../../ui/button/main-button";
import { useEffect, useState } from "react";
import { Modal } from "../../ui/modal/modal";

interface RegistrationData {
  name: string;
  email: string;
  country: string;
  phone: string;
  company_role: string;
  password: string;
}

const RegistrationForm = () => {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  // const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://dev.termedipigna.com/content/").then(res => res.json()).then(data => console.log(data))
  }, [])

  const { register, handleSubmit } = useForm<RegistrationData>({
    defaultValues: {
      name: '',
      email: '',
      country: '',
      phone: '',
      company_role: '',
      password: '',
    }
  });

  const onSubmit = async (data: RegistrationData) => {
    console.log(data)
    await fetch("https://dev.termedipigna.com/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    
  };

  

  return (
    <div className="w-full h-full pt-10 pl-20">
      <span
        className="text-base font-helvetica text-main-white opacity-70 cursor-pointer"
        onClick={() => navigate("/main")}
      >
        Return
      </span>
      <div className="mt-20 ml-24 w-96">
        <h2 className="text-5xl font-patrizia text-main-white uppercase font-normal leading-[65px]">
          sing up
        </h2>
        <span className="mt-10 text-base font-patrizia text-main-white opacity-70">
          To view the the investment plan
        </span>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full h-full mt-10 flex flex-col gap-9"
        >
          <div className="flex justify-between">
            <label className="flex flex-col">
              <input
                {...register("name")}
                placeholder="Name"
                className="mt-4 bg-transparent border-b border-gray-300 focus:outline-none"
              />
            </label>
            <label className="flex flex-col">
              <input
                {...register("country")}
                placeholder="Country"
                className="mt-4 bg-transparent border-b border-gray-300 focus:outline-none"
              />
            </label>
          </div>
          <div className="flex justify-between">
            <label className="flex flex-col">
              <input
                {...register("phone")}
                placeholder="Phone"
                className="mt-4 bg-transparent border-b border-gray-300 focus:outline-none"
              />
            </label>
            <label className="flex flex-col">
              <input
                {...register("email")}
                placeholder="Email"
                className="mt-4 bg-transparent border-b border-gray-300 focus:outline-none"
              />
            </label>
          </div>
          <label className="flex flex-col">
            <input
              {...register("company_role")}
              placeholder="Company"
              className="mt-4 bg-transparent border-b border-gray-300 focus:outline-none"
            />
          </label>
          
          <label className="flex flex-col">
            <input
              {...register("password")}
              type="password"
              placeholder="Password"
              className="mt-4 bg-transparent border-b border-gray-300 focus:outline-none"
            />
          </label>
          <MainButton className="w-full bg-main-white uppercase text-main-black text-helvetica text-base" onClick={() => handleSubmit(onSubmit)}>Send a request</MainButton>
        </form>
        <div className="w-full h-full mt-10 flex gap-1 justify-center">
            <span className="text-main-white font-base opacity-70 font-helvetica">Do you already have a password?</span>
            <span className="text-main-white font-base font-helvetica cursor-pointer">Sing in</span>
          </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export { RegistrationForm };
