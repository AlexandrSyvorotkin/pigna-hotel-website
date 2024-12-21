import { MainButton } from "../../ui/button/main-button";
import { useForm } from "react-hook-form";
import { Dispatch, SetStateAction } from "react";
import Cookies from "js-cookie";

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

  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      const response = await fetch("https://dev.termedipigna.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      // Проверка на успешный ответ
      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);

      if (result.refresh_token) {
        Cookies.set("cookie", result.refresh_token, { expires: 7 });
      }
    } catch (error) {
      console.error("Ошибка при входе:", error);
    }
  };

  return (
    <div className="w-full h-full pt-10">
      <h2 className="text-5xl font-patrizia text-main-white uppercase font-normal leading-[65px]">
        Вход
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full h-full mt-10 flex flex-col gap-9"
      >
        <label className="flex flex-col">
          <input
            {...register("email")}
            placeholder="Email"
            className="mt-4 bg-transparent border-b border-gray-300 focus:outline-none text-main-white"
          />
        </label>
        <label className="flex flex-col">
          <input
            {...register("password")}
            type="password"
            placeholder="Пароль"
            className="mt-4 bg-transparent border-b border-gray-300 focus:outline-none text-main-white"
          />
        </label>
        <MainButton className="w-full bg-main-white uppercase text-main-black text-helvetica text-base">
          Войти
        </MainButton>
      </form>
      <div className="w-full h-full mt-10 flex gap-1 justify-center">
        <span className="text-main-white font-base opacity-70 font-helvetica">
          Do you already have a account?
        </span>
        <span
          className="text-main-white font-base font-helvetica cursor-pointer"
          onClick={() => setIsLogin(false)}
        >
          Create account
        </span>
      </div>
    </div>
  );
};

export { LoginForm };
