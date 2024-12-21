import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { MainButton } from "../../ui/button/main-button";
import { Dispatch, SetStateAction, useState } from "react";
import { Modal } from "../../ui/modal/modal";
import { LoginForm } from "../login/login";

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
  const [isLogin, setIsLogin] = useState(false);

  const { register, handleSubmit } = useForm<RegistrationData>({
    defaultValues: {
      name: "",
      email: "",
      country: "",
      phone: "",
      company_role: "",
      password: "",
    },
  });

  const onSubmit = async (data: RegistrationData) => {
    console.log(data);
    try {
      const response = await fetch(
        "https://dev.termedipigna.com/auth/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Ошибка при регистрации:", error);
    }
  };

  return (
    <div className="w-full h-full pt-10 2xl:pl-20 lg:pl-5">
      <span
        className="text-base font-helvetica text-main-white opacity-70 cursor-pointer"
        onClick={() => navigate("/main")}
      >
        Return
      </span>
      <div className="2lg:mt-20 sm:mt-10 xl:ml-24 lg:ml-2 md:w-96 sm:w-full">
        <h2 className="text-5xl font-patrizia text-main-white uppercase font-normal leading-[65px]">
          sing up
        </h2>
        <span className="mt-10 text-base font-patrizia text-main-white opacity-70">
          To view the the investment plan
        </span>
        {isLogin ? (
          <LoginForm setIsLogin={setIsLogin} />
        ) : (
          <>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full h-full mt-10 flex flex-col gap-9"
            >
              <div className="flex justify-between sm:flex-col md:flex-row sm:gap-9 md:gap-0">
                <label className="flex flex-col">
                  <input
                    {...register("name")}
                    placeholder="Name"
                    className="mt-4 bg-transparent border-b border-gray-300 focus:outline-none text-main-white"
                  />
                </label>
                <label className="flex flex-col sm:flex-col md:flex-row sm:gap-9 md:gap-0">
                  <input
                    {...register("country")}
                    placeholder="Country"
                    className="mt-4 bg-transparent border-b border-gray-300 focus:outline-none text-main-white"
                  />
                </label>
              </div>
              <div className="flex justify-between sm:flex-col md:flex-row sm:gap-9 md:gap-0 text-main-white">
                <label className="flex flex-col">
                  <input
                    {...register("phone")}
                    placeholder="Phone"
                    className="mt-4 bg-transparent border-b border-gray-300 focus:outline-none text-main-white"
                  />
                </label>
                <label className="flex flex-col">
                  <input
                    {...register("email")}
                    placeholder="Email"
                    className="mt-4 bg-transparent border-b border-gray-300 focus:outline-none text-main-white"
                  />
                </label>
              </div>
              <label className="flex flex-col">
                <input
                  {...register("company_role")}
                  placeholder="Company"
                  className="mt-4 bg-transparent border-b border-gray-300 focus:outline-none text-main-white"
                />
              </label>

              <label className="flex flex-col">
                <input
                  {...register("password")}
                  type="password"
                  placeholder="Password"
                  className="mt-4 bg-transparent border-b border-gray-300 focus:outline-none text-main-white"
                />
              </label>
              <MainButton
                className="w-full bg-main-white uppercase text-main-black text-helvetica text-base"
                onClick={() => setIsModalOpen(true)}
              >
                Send a request
              </MainButton>
            </form>
            <div className="w-full h-full mt-10 flex gap-1 justify-center">
              <span className="text-main-white font-base opacity-70 font-helvetica">
                Do you already have a password?
              </span>
              <span
                className="text-main-white font-base font-helvetica cursor-pointer"
                onClick={() => setIsLogin(true)}
              >
                Sing in
              </span>
            </div>
          </>
        )}
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export { RegistrationForm };
