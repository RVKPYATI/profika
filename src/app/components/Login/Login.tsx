"use client";

import Link from "next/link";
import { FC, useState } from "react";
import { Button } from "../ui/button";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";

//components
import { Modal } from "../ui/modal";

export const Login: FC = () => {
  const [isModal, setModal] = useState<boolean>(false);
  const [isRegisterForm, setRegisterForm] = useState<boolean>(false);

  const onClose = (): void => setModal(false);

  const handleLoginClick = (): void => {
    setRegisterForm(false);
    setModal(true);
  };

  const handleRegisterClick = (): void => {
    setRegisterForm(true);
    setModal(true);
  };

  return (
    <>
      <div className="flex items-center justify-between gap-[25px]">
        <div>
          <Link
            href={"/"}
            className="text-blue text-[14px] font-semibold"
            onClick={handleLoginClick}
          >
            Войти
          </Link>
        </div>
        <div>
          <Button
            className="w-[145px] text-[14px] py-3"
            onClick={handleRegisterClick}
          >
            Регистрация
          </Button>
        </div>
      </div>
      <Modal visible={isModal} onClose={onClose}>
        {isRegisterForm ? (
          <RegisterForm handleForm={handleLoginClick} />
        ) : (
          <LoginForm handleForm={handleRegisterClick} />
        )}
      </Modal>
    </>
  );
};
