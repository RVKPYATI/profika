import { FC } from "react";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import Link from "next/link";
import { Toogle } from "../ui/toogle";

interface RegisterProps {
  handleForm: () => void;
}

export const RegisterForm: FC<RegisterProps> = ({ handleForm }) => {
  return (
    <div className="overflow-y-auto max-h-[800px]">
      <form>
        <div className="flex justify-between items-center">
          <div className="text-blue font-medium text-[18px]">Регистрация</div>
          <div className="text-gray-colored text-base" onClick={handleForm}>
            Есть аккаунт?
          </div>
        </div>
        <div className="mt-[30px] flex flex-col gap-5">
          <Toogle />
          <div className="border-b border-gray-colored/50">
            <input
              type="text"
              name="sername"
              placeholder="Фамилия"
              className="p-[10px] w-full focus:outline-none outline-none border-none placeholder:text-gray-colored/30"
            />
          </div>
          <div className="border-b border-gray-colored/50">
            <input
              type="text"
              name="firstanme"
              placeholder="Имя"
              className="p-[10px] w-full focus:outline-none outline-none border-none placeholder:text-gray-colored/30"
            />
          </div>
          <div className="border-b border-gray-colored/50">
            <input
              type="text"
              name="patronymic"
              placeholder="Отчество"
              className="p-[10px] w-full focus:outline-none outline-none border-none placeholder:text-gray-colored/30"
            />
          </div>
          <div className="border-b border-gray-colored/50">
            <input
              type="text"
              name="dateBirth"
              placeholder="Дата рождения"
              className="p-[10px] w-full focus:outline-none outline-none border-none placeholder:text-gray-colored/30"
            />
          </div>
          <div className="border-b border-gray-colored/50">
            <input
              type="text"
              name="login"
              placeholder="Логин"
              className="p-[10px] w-full focus:outline-none outline-none border-none placeholder:text-gray-colored/30"
            />
          </div>
          <div className="border-b border-gray-colored/50">
            <input
              type="text"
              name="email"
              placeholder="Эл. почта"
              className="p-[10px] w-full focus:outline-none outline-none border-none placeholder:text-gray-colored/30"
            />
          </div>
          <div className="flex justify-between items-center border-b border-gray-colored/50">
            <input
              type="text"
              name="email"
              placeholder="Эл. почта"
              className="p-[10px] w-full focus:outline-none outline-none border-none placeholder:text-gray-colored/30"
            />
            <button className="w-[126px] h-[27px] bg-gray rounded-[20px] px-5 py-[5px] flex items-center text-[14px] text-blue">
              Подтвердить
            </button>
          </div>
          <div className="border-b border-gray-colored/50">
            <input
              type="text"
              name="region"
              placeholder="Ваш регион"
              className="p-[10px] w-full focus:outline-none outline-none border-none placeholder:text-gray-colored/30"
            />
          </div>
          <div className="border-b border-gray-colored/50">
            <input
              type="text"
              name="institution"
              placeholder="Название учреждения"
              className="p-[10px] w-full focus:outline-none outline-none border-none placeholder:text-gray-colored/30"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[15px] mt-[18px]">
          <div className="flex items-start">
            <Checkbox />
            <p className="text-gray-colored/50 text-xs">
              Настоящим я подтверждаю, что ознакомился с&nbsp;
              <Link href={"#"} className="text-gray-colored">
                Пользовательским соглашением
              </Link>
              &nbsp; и принимаю правила использования платформы «ProfU.online»
            </p>
          </div>
          <div className="flex items-start">
            <Checkbox />
            <p className="text-gray-colored/50 text-xs">
              Настоящим я подтверждаю, что ознакомился с&nbsp;
              <Link href={"#"} className="text-gray-colored">
                Политикой обработки персональных данных
              </Link>
            </p>
          </div>
          <div className="flex items-start">
            <Checkbox />
            <p className="text-gray-colored/50 text-xs">
              Настоящим я (или законный представитель субъекта персональных
              данных) подтверждаю, что даю согласие на обработку персональных
              данных, указанных в форме для регистрации, для целей заключения и
              исполнения Пользовательского соглашения (Правил использования
              платформы «ProfU.online»). Срок обработки ограничен сроком
              действия&nbsp;
              <Link href={"#"} className="text-gray-colored">
                Пользовательского соглашения
              </Link>
            </p>
          </div>
          <div className="flex items-start">
            <Checkbox />
            <p className="text-gray-colored/50 text-xs">
              Настоящим я подтверждаю, что даю согласие на обработку моих
              персональных данных для целей информирования о новых продуктах и
              услугах, специальных предложениях и различных событиях, связанных
              с деятельностью компании ООО «Лабсс»
            </p>
          </div>
        </div>
        <div className="mt-[30px] flex justify-center">
          <div className="flex flex-col items-center gap-[10px]">
            <Button>Зарегистрироваться</Button>
            <p className="text-gray-colored/50 text-xs">
              Нажимая «Зарегистрироваться», вы подтверждаете, что ознакомились с
              <Link href={"#"} className="text-gray-colored">
                Политикой обработки персональных данных
              </Link>
              &nbsp; и согласны с условиями&nbsp;
              <Link href={"#"} className="text-gray-colored">
                Пользовательского соглашения
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};
