import Image from "next/image";
import { FC } from "react";
import { Button } from "./ui/button";

const data = [
  {
    number: "1",
    title: "Миграция выпускников",
    text: "детальная информация о том, в какие города и на какие специальности планируют поступать учащиеся",
  },
  {
    number: "2",
    title: "Компетенции учеников",
    text: "тестирование позволяет выявить потенциал учеников, среди которых интеллектуальный и креативный потенциал, коммуникативный потенциал и т.д.",
  },
  {
    number: "3",
    title: "Сферы образования",
    text: "в разрезе всех выпускников региона можно увидеть сколько человек тяготеет к сфере точных наук, сфере медицины и т.п.",
  },
];

export const Direction: FC = () => {
  return (
    <section className="py-[50px] overflow-hidden">
      <div className="max-w-[527px]">
        <h2 className="text-[38px] md:text-[48px] text-blue font-bold text-center md:text-left">
          Руководству региона
        </h2>
      </div>

      <div className="flex  flex-col md:flex-row justify-between gap-[30px] xl:gap-[100px] mt-12">
        <div className="flex flex-col xl:gap-[15px]">
          <p>
            Для региона будет доступна подробная информация о своих учащихся и
            их планах на дальнейшее обучение и карьеру.
          </p>
          {data.map((item, index) => {
            return (
              <div key={index} className="max-w-[366px]">
                <div className="text-white bg-orange rounded-full flex justify-center items-center w-[30px] h-[30px]">
                  {item.number}
                </div>
                <div className="mt-[10px]">
                  <p className="text-gray-colored text-xs md:text-sm xl:text-lg font-medium">
                    {item.title}
                  </p>
                  <p className="text-[10px] md:text-xs xl:text-base">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
          <div className="mt-3 mx-auto">
            <Button className="max-w-[280px] text-base md:max-w-[317px] ">
              Бесплатная демонстрация
            </Button>
          </div>
        </div>
        <div className="min-w-[65%] self-end">
          <Image
            src="/assets/direction.png"
            width={928}
            height={585}
            alt="direction"
          />
        </div>
      </div>
    </section>
  );
};
