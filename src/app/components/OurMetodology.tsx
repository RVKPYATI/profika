import Image from "next/image";
import React, { FC } from "react";

export const OurMetodology: FC = () => {
  return (
    <section className="py-[30px]">
      <div>
        <h2 className="text-[32px] md:text-[38px] xl:text-[48px] font-bold text-blue">
          Наши методологи
        </h2>
      </div>
      <div className="flex flex-col gap-[15px] mt-[50px]">
        <div className="bg-gray rounded-[20px] px-[20px] py-[25px] flex flex-col md:flex-row gap-[30px] xl:gap-[100px]">
          <div className="flex items-center gap-[35px]">
            <div>
              <Image
                src={"/assets/bogdanovskaya.png"}
                width={120}
                height={120}
                alt="Богдановская Ирина Марковна"
                className="min-w-[96px] md:min-w-[120px]"
              />
            </div>
            <div className="text-base md:text-xl xl:text-2xl w-[280px]">
              Богдановская Ирина Марковна
            </div>
          </div>
          <div>
            <ul className="list-disc list-inside text-gray-colored text-[10px] sm:text-xs md:text-sm">
              <li>Психолог, кандидат психологических наук</li>
              <li>
                Доцент кафедры психологии профессиональной деятельности и
                информационных технологий в образовании РГПУ им А.И. Герцена
              </li>
              <li>Стаж работы в системе образования - более 20 лет</li>
            </ul>
          </div>
        </div>
        <div className="bg-gray rounded-[20px] px-[20px] py-[25px] flex flex-col md:flex-row gap-[30px] xl:gap-[100px]">
          <div className="flex items-center gap-[35px]">
            <div>
              <Image
                src={"/assets/kosheleva.png"}
                width={120}
                height={120}
                alt="Богдановская Ирина Марковна"
                className="min-w-[96px] md:min-w-[120px]"
              />
            </div>
            <div className="text-base md:text-xl xl:text-2xl w-[280px]">
              Кошелева Александра Николаевна
            </div>
          </div>
          <div>
            <ul className="list-disc list-inside text-gray-colored text-[10px] sm:text-xs md:text-sm">
              <li>Психолог, кандидат психологических наук</li>
              <li>
                Доцент кафедры психологии профессиональной деятельности и
                информационных технологий в образовании РГПУ им А.И. Герцена
              </li>
              <li>Стаж работы в системе образования - более 20 лет</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
