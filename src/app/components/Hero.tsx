import { FC } from "react";
import { Button } from "./ui/button";
import Image from "next/image";

export const Hero: FC = () => {
  return (
    <section className="mt-10  xl:px-[45px]">
      <div className="max-w-[478px] xl:max-w-[650px]">
        <div>
          <Image
            src={"/assets/ProfU.png"}
            width={597}
            height={127}
            alt="hero-logo"
          />
        </div>

        <div className="text-gray-colored text-sm md:text-xl xl:text-2xl">
          профориентационный инструмент для маршрутизации подростков внутри
          региона
        </div>
        <div className="relative flex justify-end">
          <Image
            src={"/assets/hero.png"}
            width={200}
            height={220}
            alt="hero"
            className=" md:hidden"
          />
          <Image
            src={"/assets/people-working.png"}
            width={26}
            height={26}
            alt=""
            className="absolute top-5 left-5 md:hidden"
          />
          <Image
            src={"/assets/magnet.png"}
            width={40}
            height={46}
            alt=""
            className="absolute top-[40%] left-[20%] md:hidden"
          />
        </div>
        <div className="mt-[30px] hidden sm:block ">
          <Button className="max-w-[300px]">Бесплатная демонстрация</Button>
        </div>
      </div>
      <div className="w-full h-[125px] bg-gray rounded-[20px] mt-[51px] p-5">
        <div className="flex justify-between gap-4 xl:gap-20 translate-y-[-35%] md:translate-y-[-10%]">
          <div className="max-w-[1/2] xl:max-w-[250px]">
            <Image
              src={"/assets/arrow.png"}
              width={78}
              height={71}
              alt=""
              className="w-[44px] md:w-[70px] xl:w-[78px]"
            />
            <p className="text-[8px] md:text-xs xl:text-sm text-gray-colored max-w-[1/2] xl:max-w-[250px]">
              построение индивидуальной профессиональной траектории для
              выпускников школ
            </p>
          </div>
          <div className="max-w-[1/2] xl:max-w-[253px]">
            <Image
              src={"/assets/books.png"}
              width={74}
              height={71}
              alt=""
              className="w-[41px] md:w-[67px] xl:w-[71px]"
            />
            <p className="text-[8px] md:text-xs xl:text-sm text-gray-colored max-[1/2] xl:max-w-[253px]">
              выстраивание системы образования внутри региона под современные
              запросы детей
            </p>
          </div>
          <div className="relative translate-y-[-65%] hidden md:block">
            <Image
              src={"/assets/hero.png"}
              width={432}
              height={459}
              alt="hero"
              className="max-w-[300px] lg:max-w-[430px] "
            />
            <Image
              src={"/assets/people-working.png"}
              width={53}
              height={53}
              alt=""
              className="absolute top-0 left-[20%]"
            />
            <Image
              src={"/assets/magnet.png"}
              width={63}
              height={74}
              alt=""
              className="absolute top-0 right-[-25%] md:hidden"
            />
          </div>
        </div>
      </div>
      <div className="mt-[30px] sm:hidden flex justify-center">
        <Button className="max-w-[300px]">Бесплатная демонстрация</Button>
      </div>
    </section>
  );
};
