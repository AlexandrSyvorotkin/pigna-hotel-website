import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { MainButton } from "../../ui/button/main-button";
import { useState } from "react";
import { Modal } from "../../ui/modal/modal";
import { LoginForm } from "../login/login";
import { useLocalization } from "../../context/useLocalization";

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
  const [errorMessage, setErrorMessage] = useState("");

  const {locale} = useLocalization()

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
    // console.log(data);
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
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Registration failed');
        return;
      }
      if (response.ok) {
        const result = await response.json();
        console.log(result);
        setIsModalOpen(true);
        setTimeout(() => {
          navigate("/main");
        }, 3000);
    }
    } catch (error) {
      console.error("Ошибка при регистрации:", error);
      setErrorMessage('Network error occurred');
    }
  };

  const reg = locale === "ENG" ? "Sing up" : "Registrati"
  const log = locale === "ENG" ? "Sing in" : "Accedi"

  return (
    <div className="w-full h-full pt-10 2xl:pl-20 lg:pl-5">
      <span
        className="text-base font-helvetica text-main-white opacity-70 cursor-pointer"
        onClick={() => navigate("/main")}
      >
        {locale === "ENG" ? "Return" : "Ritorno"}
      </span>
      <div className="2lg:mt-20 sm:mt-10 xl:ml-24 lg:ml-2 md:w-96 sm:w-full">
        <h2 className="text-5xl font-patrizia text-main-white uppercase font-normal leading-[65px]">
          {isLogin ? reg : log}
        </h2>
        <span className="mt-10 text-base font-helvetica text-main-white opacity-70">
          {locale === "ENG" ? "To view the the investment plan" : "Per visualizzare il piano di investimento"}
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
                    placeholder={locale === "ENG" ? "Name*" : "Nome*"}
                    className="mt-4 bg-transparent border-b border-gray-300 pb-[20px] focus:outline-none text-main-white"
                  />
                </label>
                <label className="flex flex-col sm:flex-col md:flex-row sm:gap-9 md:gap-0">
                  <input
                    {...register("country")}
                    placeholder={locale === "ENG" ? "Country" : "Paese"}
                    className="mt-4 bg-transparent border-b border-gray-300 pb-[20px] focus:outline-none text-main-white"
                  />
                </label>
              </div>
              <div className="flex justify-between sm:flex-col md:flex-row sm:gap-9 md:gap-0 text-main-white">
                <label className="flex flex-col">
                  <input
                    {...register("phone")}
                    placeholder={locale === "ENG" ? "Phone" : "Telefono"}
                    className="mt-4 bg-transparent border-b border-gray-300 pb-[20px] focus:outline-none text-main-white"
                  />
                </label>
                <label className="flex flex-col">
                  <input
                    {...register("email")}
                    placeholder="Email*"
                    className="mt-4 bg-transparent border-b border-gray-300 pb-[20px] focus:outline-none text-main-white"
                  />
                </label>
              </div>
              <label className="flex flex-col">
                <input
                  {...register("company_role")}
                  placeholder={locale === "ENG" ? "Company role" : "Azienda ruolo"}
                  className="mt-4 bg-transparent border-b border-gray-300 pb-[20px] focus:outline-none text-main-white"
                />
              </label>

              <label className="flex flex-col">
                <input
                  {...register("password")}
                  type="password"
                  placeholder={locale === "ENG" ? "Password" : "Crea password"}
                  className="mt-4 bg-transparent border-b border-gray-300 pb-[20px] focus:outline-none text-main-white"
                />
              </label>
              <span className="text-red-500">{errorMessage}</span>
              <MainButton
                className="w-full bg-main-white uppercase text-main-black text-helvetica text-base py-[21px] px-[100px] "
                onClick={() => handleSubmit(onSubmit)}
              >
                {locale === "ENG" ? "Send a request" : "Invia richiesta"}
              </MainButton>
            </form>
            <div className="w-full h-full mt-10 flex gap-1 justify-center">
              <span className="text-main-white font-base opacity-70 font-helvetica">
                {locale === "ENG" ? "Do you already have a password?" : "Hai già una password? "}
              </span>
              <span
                className="text-main-white font-base font-helvetica cursor-pointer"
                onClick={() => setIsLogin(true)}
              >
                {locale === "ENG" ? "Sing in" : "Accedi"}
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
