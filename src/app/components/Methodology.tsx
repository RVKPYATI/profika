import Image from "next/image";
import { FC } from "react";

const metodoLodyData = [
  {
    id: "1",
    img: { url: "/assets/method1.png", width: 36, height: 50 },
    text: "Интеллектуальный и креативный потенциал",
  },
  {
    id: "2",
    img: { url: "/assets/method2.png", width: 50, height: 50 },
    text: "Коммуникативный потенциал",
  },
  {
    id: "3",
    img: { url: "/assets/method3.png", width: 48, height: 50 },
    text: "Регуляторный (эмоционально-волевой) потенциал",
  },
  {
    id: "4",
    img: { url: "/assets/method4.png", width: 74, height: 50 },
    text: "Потенциал профессионального саморазвития",
  },
  {
    id: "5",
    img: { url: "/assets/method5.png", width: 55, height: 50 },
    text: "Профориентационный потенциал семьи",
  },
];

export const Methodology: FC = () => {
  return (
    <section className="py-[40px]">
      <div className="flex justify-between">
        <div className="max-w-[533px]">
          <h2 className="text-[40px] md:text-[75px] xl:text-[96px] font-bold text-blue">
            О методике
          </h2>
          <div className="text-xs md:text-sm xl:text-lg">
            <p>
              Специалисты в области психологии из РГПУ им. А. И. Герцена помогли
              нам разработать авторскую методику, которая позволит понять, что
              на самом деле хочет ребенок, а также понять к чему у подростка
              есть способности.
            </p>
            <p>
              По результатам тестирования у учащегося будут выявлены способности
              по каждой из пяти универсальных компетенций:
            </p>
          </div>
        </div>
        <div className="self-start hidden md:block">
          <Image
            src={"/assets/method.png"}
            width={200}
            height={234}
            alt="method"
          />
        </div>
      </div>
      <div className="mt-[30px]">
        <div className="flex justify-between flex-wrap md:flex-nowrap">
          {metodoLodyData.map((item) => {
            return (
              <div className="flex flex-col gap-[15px] max-w-[50%] sm:max-w-full mt-[15px] sm:mt-0 last:mx-auto">
                <div key={item.id} className="flex justify-center">
                  <Image
                    src={item.img.url}
                    width={item.img.width}
                    height={item.img.height}
                    alt="1"
                    className="w-auto h-[40px] md:h-[50px]"
                  />
                </div>
                <div className="text-center text-xs xl:text-sm ">
                  {item.text}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="px-[20px] py-[25px] mt-[30px] text-xs md:text-sm xl:text-lg">
        Помимо этого, выделены 14 сфер профессиональной деятельности, результаты
        тестирования помогут выявить у выпускника способность в рамках каждой из
        них.
      </div>
    </section>
  );
};
