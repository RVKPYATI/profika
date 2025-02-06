import { FC } from "react";
import Image from "next/image";
export const Logo: FC = () => {
  return (
    <div className="max-w-[120px] h-10">
      <Image
        src={"/assets/logo.png"}
        priority
        quality={100}
        width={120}
        height={40}
        alt="logo"
      />
    </div>
  );
};
