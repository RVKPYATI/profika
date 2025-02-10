import Image from "next/image";
import { FC } from "react";

export const Partners: FC = () => {
  return (
    <section className="container py-[50px] bg-gray rounded-[20px]">
      <h2 className="text-[40px] md:text-[75px] xl:text-[96px] text-blue font-bold leading-none">
        Наши партнеры
      </h2>
      <div className="mt-[40px] max-w-[464px] xl:text-lg">
        Наш проект сотрудничает с известными компаниями и ведоствами для
        создания ProfU.online
      </div>
      <div className="mt-[25px] flex flex-col sm:flex-row  gap-[80px] sm:gap-[10px]">
        <div className="flex justify-between items-center sm:justify-normal ">
          <div className=" pr-0 sm:pr-1 xl:pr-[50px] ">
            <Image
              src="/assets/innopraktika.png"
              width={109}
              height={50}
              alt="innopraktika"
              className="min-w-[98px] md:min-w-[109px]"
            />
          </div>
          <div className="border-l-[1px] border-l-gray-colored/30 pl-[15px]  xl:pl-[50px] w-[160px] sm:w-[200px] xl:w-[300px] text-[8px] md:text-[10px] xl:text-xs">
            Иннопрактика - негосударственный институт развития, содействие росту
            национального человеческого капитала России
          </div>
        </div>
        <div className="flex justify-between items-center sm:justify-normal ">
          <div className="mx-auto sm:mx-0 pr-0 sm:pr-1 xl:pr-[50px]">
            <Image
              src="/assets/universitet.png"
              width={50}
              height={50}
              alt="universitet"
              className="min-w-[46px] md:min-w-[50px]"
            />
          </div>
          <div className="border-l-[1px] border-l-gray-colored/30 pl-[15px]  xl:pl-[50px] w-[160px] sm:w-[200px] xl:-w-[300px] text-[8px] md:text-[10px] xl:text-xs self-scretch h-full">
            РГПУ им. А.И. Герцена - ведущее педагогическое высшее учебное
            заведение РФ
          </div>
        </div>
      </div>
    </section>
  );
};
