import { FC } from "react";
import { Button } from "./ui/button";
import Image from "next/image";

export const DemoForm: FC = () => {
  return (
    <section className="py-[50px]">
      <h3 className="text-[32px] md:text-[38px] xl:text-[48px] text-blue font-bold max-w-[695px] leading-10 xl:leading-[57px]">
        Оставьте заявку на бесплатную демонстрацию
      </h3>

      <div className="flex justify-between flex-col sm:flex-row">
        {/* fom */}
        <div className=" w-full sm:w-1/2">
          <div className="text-xs md:text-sm xl:text-lg mt-[40px] xl:mt-[50px]">
            Мы свяжемся с Вами, чтобы обсудить дату и время демонстрации, а
            также ответим на все возникшие вопросы
          </div>
          <form className="mt-[30px]">
            <div className="border-b border-gray ">
              <input
                type="text"
                name="name"
                placeholder="Имя"
                className="px-[10px] py-[14px] w-full focus:outline-none outline-none border-none placeholder:text-gray-colored placeholder:opacity-[43%]"
              />
            </div>
            <div className="border-b border-gray">
              <input
                type="text"
                name="phone"
                placeholder="Телефон"
                className="px-[10px] py-[14px] w-full focus:outline-none outline-none border-none placeholder:text-gray-colored placeholder:opacity-[43%]"
              />
            </div>
            <div className="border-b border-gray">
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="px-[10px] py-[14px] w-full focus:outline-none outline-none border-none placeholder:text-gray-colored placeholder:opacity-[43%]"
              />
            </div>
            <div className="border-b border-gray">
              <input
                type="text"
                name="region"
                placeholder="Регион/город/школа"
                className="px-[10px] py-[14px] w-full focus:outline-none outline-none border-none placeholder:text-gray-colored placeholder:opacity-[43%]"
              />
            </div>
            <div className="mt-[30px]">
              <Button
                type="submit"
                variant="white"
                className="w-full sm:w-[317px]"
              >
                Отправить
              </Button>
            </div>
          </form>
        </div>
        {/* image */}
        <div className="mx-auto sm:mx-0">
          <Image
            src={"/assets/hero.png"}
            width={590}
            height={388}
            alt="hero"
            className="w-auto h-auto sm:h-[388px]"
          />
        </div>
      </div>
    </section>
  );
};
