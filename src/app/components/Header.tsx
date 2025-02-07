import { FC } from "react";
import { Logo } from "./Logo";
import { Nav } from "./Nav";
import { Login } from "./Login/Login";
import { MobNav } from "./MobNav";

export const Header: FC = () => {
  return (
    <div className="flex justify-between items-center px-[35px] xl:px-[45px] py-3 xl:py-4 border-blue border-[2px] rounded-[55px] mt-[10px]">
      <div>
        <Logo />
      </div>
      <div className="hidden lg:block">
        <Nav />
      </div>
      <div className="lg:hidden">
        <MobNav />
      </div>
      <div className="hidden lg:block">
        <Login />
      </div>
    </div>
  );
};
