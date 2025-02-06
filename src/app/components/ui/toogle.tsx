import { FC, useState } from "react";

export const Toogle: FC = () => {
  const [isMale, setIsMale] = useState(true);

  return (
    <div className="w-full flex justify-between border-gray border-[1px] rounded-[20px]">
      <div
        className={`flex items-center justify-center p-[10px] ${
          isMale ? "bg-white" : "bg-gray text-blue font-bold"
        } w-1/2 rounded-[20px] text-gray-colored text-base cursor-pointer`}
        onClick={() => setIsMale(false)}
      >
        Мужской
      </div>
      <div
        className={`flex items-center justify-center p-[10px] ${
          isMale ? "bg-gray text-blue font-bold" : "bg-white"
        } w-1/2 rounded-[20px] text-gray-colored text-base cursor-pointer`}
        onClick={() => setIsMale(true)}
      >
        Женский
      </div>
    </div>
  );
};
