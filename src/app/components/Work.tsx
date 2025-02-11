import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    number: 1,
    title: "Тестирование",
    description:
      "Осознать сильные стороны, определить навыки и выявить профессиональные предпочтения? Да, тестирование это гарантирует. ",
    link: { name: "О методике", path: "/" },
  },
  {
    number: 2,
    title: "Рекомендация",
    description:
      "Платформа не только расскажет о сильных сторонах, но и предложит 10+ вариантов профессий на основе результатов тестирования.А чтобы путь профессиональной реализации стал еще проще, расскажем, в каких образовательных учреждениях дадут лучшую базу для успешного карьерного старта.",
    link: { name: "", path: "" },
  },
  {
    number: 3,
    title: "Обратная связь",
    description:
      "Важно мнение подростков, в том числе потому, что это поможет делать платформу лучше. А еще позволит создавать впечатляющие отчеты.",
    link: { name: "", path: "" },
  },
  {
    number: 4,
    title: "Отчетность",
    description: `Отчет расскажет о наиболее востребованных специальностях среди молодежи, количестве выпускников, планирующих переезд в другой регион, количестве школьников, выбирающих СПО и много чего еще.Это отличная база для создания точных прогнозов достижения целей региона.
    `,
    link: { name: "Об отчетности", path: "/" },
  },
];

export const Work: FC = () => {
  return (
    <section id="work" className="xl:px-[45px] py-[50px]">
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="mx-auto">
          <h2 className="text-[40px] md:text-[75px] xl:text-[96px] text-blue font-bold mb-4 leading-none">
            Как это работает?
          </h2>

          <div className="mb-2 mt-[50px]">
            <Image src={"/assets/screen.png"} width={372} height={572} alt="" />
          </div>
        </div>
        <div>
          <div className="relative flex flex-col">
            {data.map((step, index) => (
              <div key={step.number} className="flex">
                <div className="flex flex-col items-center">
                  <div className="bg-white border-orange border-[2px] text-gray-colored font-bold rounded-full min-w-[60px] min-h-[60px] flex items-center justify-center">
                    {step.number}
                  </div>
                  {index < data.length - 1 && (
                    <div className="w-[2px] bg-orange h-full"></div>
                  )}
                </div>
                <div className="ml-4 mb-6 h-[182px]">
                  <h3 className="text-xl md:text-[26px] xl:text-[32px] font-medium">
                    {step.title}
                  </h3>
                  <p className="text-gray-colored text-[10px] md:text-xs xl:text-sm mt-[10px]">
                    {step.description}
                  </p>
                  <p>
                    <Link
                      href={step.link.path}
                      className="text-gray-colored text-[10px] md:text-xs xl:text-sm underline underline-offset-4 mt-[10px]"
                    >
                      {step.link.name}
                    </Link>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
