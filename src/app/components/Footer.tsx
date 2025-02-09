import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export const Footer: FC = () => {
  return (
    <section className="bg-blue rounded-[20px]">
      <div className="container py-[50px]">
        <div className="flex flex-col sm:flex-row gap-5 sm:gap-[160px]">
          {/* contacts */}
          <div className="flex  flex-col gap-[15px] max-w-[344px] text-xs sm:text-sm">
            <div className="flex gap-4">
              <div>
                <Image
                  src={"/assets/email.svg"}
                  alt={"email"}
                  width={20}
                  height={22}
                />
              </div>
              <div>
                <Link href={"mailto:ceo@profu.online"} className="text-white">
                  ceo@profu.online
                </Link>
              </div>
            </div>
            <div className="flex gap-4">
              <div>
                <Image
                  src={"/assets/phone.svg"}
                  alt={"phone"}
                  width={20}
                  height={20}
                />
              </div>
              <div>
                <Link href={"mailto:ceo@profu.online"} className="text-white">
                  +7 (906) 699-3555
                </Link>
              </div>
            </div>
            <div className="flex gap-4">
              <div>
                <Image
                  src={"/assets/locate.svg"}
                  alt={"locate"}
                  width={20}
                  height={24}
                  className="min-w-[20px]"
                />
              </div>
              <div>
                <p className="text-white">
                  117321, город Москва, Профсоюзная ул, д. 128а, помещ. 29{" "}
                </p>
              </div>
            </div>
            <div className="mt-5">
              <p className="text-white text-[8px] sm:text-xs max-w-[260px]">
                Компания ООО «Лабсс» является резидентом Инновационного центра
                Сколково
              </p>
            </div>
          </div>
          {/* logos */}
          <div className="flex flex-row sm:flex-col gap-[15px]">
            <div>
              <Image
                src={"/assets/profiFooter.png"}
                width={113}
                height={33}
                alt="profi"
              />
            </div>
            <div>
              <Image src={"/assets/sk.png"} width={100} height={75} alt="sk" />
            </div>
          </div>
        </div>

        {/* copyright */}
        <div className="flex flex-wrap sm:flex-nowrap justify-between text-[8px] sm:text-xs text-white mt-[15px]">
          <div>2025 ООО «Лабсс». Все права защищены.</div>
          <div>
            <Link href={"/"} className="text-white">
              Пользовательское соглашение
            </Link>
          </div>
          <div>
            <Link href={"/"} className="text-white">
              Руководство пользователя
            </Link>
          </div>
          <div>
            <Link href={"/"} className="text-white">
              Политика обработки персональных данных
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
