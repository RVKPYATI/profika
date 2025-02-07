"use client";

import { FC, useState } from "react";
import { LinkType } from "../types/link";
import Link from "next/link";
import { Logo } from "./Logo";
import { Button } from "./ui/button";
import { Modal } from "./ui/modal";
import { LoginForm } from "./Login/LoginForm";
import { RegisterForm } from "./Login/RegisterForm";

const links: LinkType[] = [
  { name: "Наше решение", path: "/" },
  { name: "Для кого", path: "/" },
  { name: "Отчетность", path: "/" },
  { name: "Методика", path: "/" },
];

const dropdownLinks: LinkType[] = [
  { name: "Школьникам", path: "/" },
  { name: "Региону", path: "/" },
];

export const MobNav: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [activeForm, setActiveForm] = useState<"login" | "register" | null>(
    null
  );

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
    setActiveForm(null);
  };

  const toggleSubMenu = (): void => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLoginClick = () => {
    setActiveForm("login");
  };

  const handleRegisterClick = () => {
    setActiveForm("register");
  };

  const renderForm = () => {
    switch (activeForm) {
      case "login":
        return <LoginForm handleForm={handleRegisterClick} />;
      case "register":
        return <RegisterForm handleForm={handleLoginClick} />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="relative">
        <button onClick={toggleMenu} className="p-2 focus:outline-none z-50">
          <svg
            width="37"
            height="22"
            viewBox="0 0 37 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1H36"
              stroke="#2E54C3"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M1 11H36"
              stroke="#2E54C3"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M1 21H36"
              stroke="#2E54C3"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <div
          className={`fixed inset-0 bg-white transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } z-40`}
        >
          <div className="absolute top-8 right-[10px] ">
            <button onClick={toggleMenu}>
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_274_950)">
                  <path
                    d="M1.31371 1.31371L12.6274 12.6274M23.9411 23.9411L12.6274 12.6274M12.6274 12.6274L1.31371 23.9411M12.6274 12.6274L23.9411 1.31371"
                    stroke="#2D2E2F"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_274_950">
                    <rect width="26" height="26" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
          <div className="flex flex-col justify-center items-center h-full mt-[30px]">
            <Logo />
            <ul className="flex flex-col gap-[30px] mt-auto">
              {links.map((link, index) => {
                return (
                  <li key={index} className="text-center relative">
                    <Link
                      href={link.path}
                      className="text-gray-colored"
                      onClick={
                        link.name === "Отчетность" ? toggleSubMenu : undefined
                      }
                    >
                      <span className="flex items-center justify-center">
                        {link.name}
                        {link.name === "Отчетность" && (
                          <span
                            className={`inline-block w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-[#2D2E2F] ml-2 transition-transform duration-300 ${
                              isDropdownOpen ? "rotate-180" : ""
                            }`}
                          ></span>
                        )}
                      </span>
                    </Link>
                    {link.name === "Отчетность" && (
                      <>
                        {isDropdownOpen && (
                          <ul className="flex flex-col gap-[10px] mt-2">
                            {dropdownLinks.map((link, index) => (
                              <li key={index} className="text-center">
                                <Link
                                  href={link.path}
                                  className="text-gray-colored"
                                >
                                  {link.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    )}
                  </li>
                );
              })}
            </ul>
            <div className="flex flex-col mt-auto mb-6">
              <Button onClick={handleRegisterClick}>Регистрация</Button>
              <Button
                variant="white"
                className="border-none"
                onClick={handleLoginClick}
              >
                Войти
              </Button>
            </div>
          </div>
        </div>
      </div>
      {activeForm && (
        <div className="fixed inset-0 bg-white border-blue border-[2px] rounded-[20px] px-[10px] py-[30px] z-50 ">
          <div className="absolute top-8 right-[120px] ">
            <button onClick={toggleMenu}>
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_274_950)">
                  <path
                    d="M1.31371 1.31371L12.6274 12.6274M23.9411 23.9411L12.6274 12.6274M12.6274 12.6274L1.31371 23.9411M12.6274 12.6274L23.9411 1.31371"
                    stroke="#2D2E2F"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_274_950">
                    <rect width="26" height="26" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
          {renderForm()}
        </div>
      )}
    </>
  );
};
