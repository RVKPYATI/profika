"use client";

import { FC } from "react";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import Link from "next/link";

interface LoginProps {
  handleForm?: () => void;
}

export const LoginForm: FC<LoginProps> = ({ handleForm }) => {
  return (
    <form>
      <div className="flex justify-between items-center">
        <div className="text-blue font-medium text-[18px]">Вход</div>
        <div
          className="text-gray-colored text-base cursor-pointer"
          onClick={handleForm}
        >
          Нет аккаунта?
        </div>
      </div>
      <div className="mt-[30px] flex flex-col gap-5">
        <div className="border-b border-gray-colored/50">
          <input
            type="text"
            name="login"
            placeholder="Логин"
            className="p-[10px] w-full focus:outline-none outline-none border-none placeholder:text-gray-colored/30"
          />
        </div>
        <div className="border-b border-gray-colored/50">
          <input
            type="password"
            name="password"
            placeholder="Пароль"
            className=" p-[10px] w-full focus:outline-none outline-none border-none placeholder:text-gray-colored/30"
          />
        </div>
      </div>
      <div className="flex flex-col mt-[18px]">
        <div>
          <Checkbox label="Показать пароль" />
        </div>
        <div className="mt-[10px]">
          <Checkbox label="Запомнить пароль" />
        </div>
      </div>
      <div className="mt-[84px] flex justify-center">
        <div className="flex flex-col items-center gap-[10px]">
          <Button className="w-[255px] text-xl">Войти</Button>
          <p>
            <Link href="#" className="text-gray-colored/50 text-[14px]">
              Забыли пароль?
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
};
