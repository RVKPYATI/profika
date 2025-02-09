"use client";

import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";

import "swiper/css/pagination";
import Image from "next/image";
import "../swiper.css";

const tasks = [
  {
    id: "1",
    title: "Государственная программа РФ «Развитие образования»",
    subtitle: "Распоряжение от 21 июня 2021 г. N Р-126",
    task: "в 2025 году - 85,24% обучающихся принимают участие в системах выявления, поддержки и развития способностей и талантов у детей и молодежи, направленной на самоопределение и профессиональную ориентацию всех обучающихся",
    answer:
      "инструмент ProfU.online позволяет учащимся образовательных организаций, получить ценный результат для себя, а Регион получает статистические данные в реальном времени",
  },
  {
    id: "2",
    title: "Государственная программа РФ «Развитие образования»",
    subtitle:
      "Ведомственная целевая программа «Поддержка молодежных инициатив»",
    task: "повышение уровня информированности молодых людей от 14 до 30 лет о потенциальных возможностях самореализации и саморазвития, дополнительных возможностях профессионального роста до 53 % общего числа молодежи к 2025 году",
    answer:
      "результатом прохождения профориентации на платформе ProfU.online каждый обучающийся получает информацию об образовательной среде региона: ВУЗ и СПО, направления образования, курсы ДПО. важно, что эта информация предоставляется персонализировано",
  },
  {
    id: "3",
    title: "Государственная программа РФ «Развитие образования»",
    subtitle:
      "Стратегические приоритеты в сфере реализации государственной программы Российской Федерации «Развитие образования» до 2030 года",
    task: "2030 года увеличение доли выпускников образовательных организаций, реализующих программы СПО, занятых по виду деятельности и полученным компетенциям до 63,3%",
    answer:
      "платформа ProfU.online позволяет подобрать образовательный трек, заинтересовать профессиями, в том числе СПО и оценить какие направления наиболее релевантны для каждого",
  },
  {
    id: "4",
    title:
      "Стратегия реализации молодежной политики в Российской Федерации на период до 2030 года",
    subtitle: "",
    task: "обеспечение системы раскрытия, поддержки и развития способностей и талантов у детей и молодежи, которая к 2030 году охватит не менее 50 процентов детей и молодежи",
    answer:
      "охват 100% учащихся при профориентационном тестировании и выявлении способностей у детей старших классов образовательных организаций региона",
  },
];

export const Tasks: FC = () => {
  return (
    <section className="py-[40px]">
      <h3 className="text-[32px] md:text-[38px] xl:text-[48px] text-blue font-bold max-w-[562px]">
        Задачи региона в блоке профориентации
      </h3>
      {/* слайдер */}
      <div>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 15000 }}
          pagination={{
            clickable: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + '">' + "</span>";
            },
          }}
          className="mySwiper"
        >
          {tasks.map((task) => {
            return (
              <SwiperSlide key={task.id}>
                <div className="py-[45px]">
                  <div className="border-orange border-[1px] rounded-[20px] py-[25px] px-5 h-[400px] sm:h-[323px]">
                    <div>
                      <div className="text-sx md:text-sm xl:text-lg">
                        {task.title}
                      </div>
                      <div className="text-[10px] md:text-sm xl:text-base">
                        {task.subtitle}
                      </div>
                      <div className="flex flex-col gap-[15px]">
                        {/* task */}
                        <div className="flex gap-[20px] mt-[15px]">
                          <div>
                            <Image
                              src={"/assets/darts.svg"}
                              width={50}
                              height={50}
                              alt=""
                            />
                          </div>
                          <div className="max-w-[600px]">
                            <div className="bg-orange rounded-[20px] text-white text-xs md:text-base w-[86px] md:w-[100px] flex justify-center items-center">
                              Задача:
                            </div>
                            <div className="text-[10px] sm:text-xs md:text-sm mt-[5px]">
                              {task.task}
                            </div>
                          </div>
                        </div>
                        {/* answer */}
                        <div className="flex gap-[20px] justify-end">
                          <div>
                            <Image
                              src={"/assets/yes.svg"}
                              width={50}
                              height={50}
                              alt=""
                            />
                          </div>
                          <div className="max-w-[600px]">
                            <div className="bg-orange rounded-[20px] text-white text-xs md:text-base w-[86px] md:w-[100px] flex justify-center items-center">
                              Решение:
                            </div>
                            <div className="text-[10px] sm:text-xs md:text-sm mt-[5px]">
                              {task.answer}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};
