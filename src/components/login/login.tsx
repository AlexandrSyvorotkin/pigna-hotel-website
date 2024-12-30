import { MainButton } from "../../ui/button/main-button";
import { useForm } from "react-hook-form";
import { Dispatch, SetStateAction, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useLocalization } from "../../context/useLocalization";

const LoginForm = ({
  setIsLogin,
}: {
  setIsLogin: Dispatch<SetStateAction<boolean>>;
}) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const navigate = useNavigate();

  const {locale} = useLocalization();

  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      const response = await fetch("https://dev.termedipigna.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Registration failed');
        return;
      }

      const result = await response.json();
      console.log(result);

      if (result.refresh_token) {
        Cookies.set("cookie", result.refresh_token, { expires: 1 / 24 });
        navigate("/docs");
      }
    } catch (error) {
      console.error("Ошибка при регистрации:", error);
      setErrorMessage('Network error occurred');
    }
  };

  return (
    <div className="w-full h-full pt-5">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full h-full mt-10 flex flex-col gap-9"
      >
        <label className="flex flex-col">
          <input
            {...register("email")}
            placeholder="Email"
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
        <div className="text-red-500">{errorMessage}</div>
        <MainButton className="w-full bg-main-white uppercase text-main-black text-helvetica text-base py-[21px] px-[122px] hover:opacity-80">
          {locale === "ENG" ? "Enter" : "Accedi"}
        </MainButton>
      </form>
      <div className="w-full h-full mt-10 flex gap-1 justify-center">
        <span className="text-main-white font-base opacity-70 font-helvetica">
          {locale === 'ENG' ? 'Do you already have a account?' : 'Hai già un account?'}
        </span>
        <span
          className="text-main-white font-base font-helvetica cursor-pointer"
          onClick={() => setIsLogin(false)}
        >
          {locale === 'ENG' ? 'Create account' : 'Crea account'}
        </span>
      </div>
    </div>
  );
};

export { LoginForm };
