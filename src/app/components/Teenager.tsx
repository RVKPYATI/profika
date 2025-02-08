import Image from "next/image";
import { FC } from "react";

const data = [
  {
    number: "1",
    title: "Сильные и слабые стороны",
    text: "наша методика охватывает различные аспекты личности, поэтому у подростка будет цельная картина о своих сильных и слабых сторонах",
  },
  {
    number: "2",
    title: "База более 2000 профессий",
    text: "на основе сильных слабых сторон будут предложены не только сферы деятельности, где подросток может раскрыть свои способности, но и перечень профессий, которые могут его заинтересовать",
  },
  {
    number: "3",
    title: "Полная образовательная траектория",
    text: "наша рекомендательная система не ограничивает только профессиями, также мы предлагаем респонденту перечень университетов в зависимости от его предпочтений, где бы он мог бы освоить понравившуюся профессию",
  },
];

export const Teenager: FC = () => {
  return (
    <section className="container py-[50px] overflow-hidden">
      <h2 className="text-[38px] md:text-[48px] text-blue font-bold text-center md:text-left">
        Подростку
      </h2>
      <div className="flex  flex-col md:flex-row justify-between gap-[30px] xl:gap-[100px] mt-12">
        <div className="flex flex-col gap-[15px]">
          {data.map((item, index) => {
            return (
              <div key={index} className="max-w-[412px]">
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
        </div>
        <div className="w-full md:w-[60%] h-full object-cover self-center">
          <Image
            src="/assets/teeneger.png"
            width={965}
            height={485}
            alt="teenager"
          />
        </div>
      </div>
    </section>
  );
};
