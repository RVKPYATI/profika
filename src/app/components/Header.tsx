import { FC } from "react";
import { Logo } from "./Logo";
import { Nav } from "./Nav";
import { Login } from "./Login/Login";

export const Header: FC = () => {
  return (
    <div className="flex justify-between items-center px-[45px] py-4 border-blue border-[2px] rounded-[55px]">
      <div>
        <Logo />
      </div>
      <div>
        <Nav />
      </div>
      <div>
        <Login />
      </div>
    </div>
  );
};
