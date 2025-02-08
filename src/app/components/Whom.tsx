import { FC } from "react";
const teenager = {
  block1: [
    { desc: "Помощь в самоопределении" },
    { desc: "Осознанный выбор будущей карьеры" },
    { desc: "Развитие навыков работы в команде" },
    { desc: "Повышение уровня ответственности" },
  ],
  block2: [
    {
      desc: "Информационный блок о профессиях с кратким описание и средним заработком",
    },
    { desc: "Рекомендательная база по 10+ профессиям" },
    { desc: "Рекомендательная база по 20+ направлениям образования и ВУЗам" },
  ],
};

const direction = {
  block1: {
    title:
      "Фокусируем внимание региона на адаптации к потребности абитуриентов:",
    items: [
      {
        desc: "Корректировать образовательные программы, ориентируясь на интересы и способности учащихся",
      },
      {
        desc: "Выявить необходимости развития новых направлений или расширить охват школьников программами допобразования",
      },
    ],
  },
  block2: {
    title: "Удержание подростков в регионе:",
    items: [
      {
        desc: "Снижать показатель неопределившихся студентов",
      },
      {
        desc: "Удерживать контингент абитуриентов в регионе за счет рекомендательной базы о ведущих вузах и ссузах внутри региона",
      },
    ],
  },
  block3: {
    title:
      "Прогнозирование потока абитуриентов по образовательным организациям региона:",
    items: [
      {
        desc: "Узнать, сколько выпускников выбирают среднее-профессиональное образование по направлениям",
      },
      {
        desc: "Прогнозировать долю выпускников СПО, работающих по специальности",
      },
      {
        desc: "Прогнозировать число выпускников вузов, которые устроятся на работу в регионе после выпуска",
      },
    ],
  },
};

export const Whom: FC = () => {
  return (
    <section className="container bg-gray rounded-[20px] overflow-hidden py-[50px] pb-12">
      <div className="max-w-[660px] mb-[135px]">
        <h2 className=" text-10 md:text-[75px] xl:text-[96px] text-blue font-bold leading-none">
          Для кого наше решение
        </h2>
      </div>
      <div className="relative pr-[71px] px-[15px] py-5 border-orange border-[2px] rounded-2xl -mr-14">
        <p className="text-gray-colored xl:text-[26px] font-medium mb-[10px]">
          Подростки
        </p>
        <div className="flex justify-between ">
          <div className="max-w-[500px]">
            <div>
              <ul className="text-gray-colored text-xs md:text-base list-disc list-inside ">
                {teenager.block1.map((desc, index) => {
                  return (
                    <li key={index} className="pl-3">
                      {desc.desc}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="max-w-[500px]">
            <ul className="text-gray-colored text-xs md:text-base list-disc list-inside ">
              {teenager.block2.map((desc, index) => {
                return (
                  <li key={index} className="pl-3">
                    {desc.desc}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="absolute top-[-20%] right-[10%] bg-blue rounded-[100px] text-white xl:text-2xl px-6 py-2 max-w-[720px] rotate-[4deg]">
          Смотреть в будущее без страха благодаря четким планам и реалистичным
          ожиданиям
        </div>
      </div>
      <div className="relative px-[71px] py-5 border-orange border-[2px] rounded-2xl -ml-14 mt-5">
        <p className="text-gray-colored xl:text-[26px] font-medium mb-[10px]">
          Руководство региона
        </p>
        <div className="flex justify-between ">
          <div>
            <div>
              <ul className="text-gray-colored text-xs md:text-base list-disc list-inside max-w-[500px] ">
                <p className="font-medium xl:text-lg">
                  {direction.block1.title}
                </p>
                {direction.block1.items.map((item, index) => {
                  return (
                    <li className="pl-3" key={index}>
                      {item.desc}
                    </li>
                  );
                })}
              </ul>
              <ul className="text-gray-colored text-xs md:text-base list-disc list-inside ">
                <p className="font-medium xl:text-lg">
                  {direction.block2.title}
                </p>
                {direction.block2.items.map((item, index) => {
                  return (
                    <li className="pl-3" key={index}>
                      {item.desc}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="mb-24">
            <ul className="text-gray-colored text-xs md:text-base list-disc list-inside">
              <p className="font-medium xl:text-lg">{direction.block3.title}</p>
              {direction.block3.items.map((item, index) => {
                return (
                  <li className="pl-3" key={index}>
                    {item.desc}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="absolute bottom-[-5%] right-[-15px] bg-blue rounded-[100px] text-white xl:text-2xl px-6 py-2 max-w-[740px] rotate-[-3deg]">
          100% школьников участвуют в программе профориентации
        </div>
      </div>
    </section>
  );
};
