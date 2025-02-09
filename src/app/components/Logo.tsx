import { FC } from "react";
import Image from "next/image";
export const Logo: FC = () => {
  return (
    <div className="w-[77px] xl:w-[120px] h-10">
      <Image src={"/assets/logo.png"} width={120} height={40} alt="logo" />
    </div>
  );
};
