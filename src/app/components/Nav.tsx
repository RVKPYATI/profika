"use client";
import { FC, useState } from "react";
import Link from "next/link";

import { LinkType } from "../types/link";

const links: LinkType[] = [
  { name: "Наше решение", path: "#work" },
  { name: "Для кого", path: "#whom" },
  { name: "Отчетность", path: "/" },
  { name: "Методика", path: "#methodology" },
];

const dropdownLinks: LinkType[] = [
  { name: "Школьникам", path: "#teenager" },
  { name: "Региону", path: "#direction" },
];

export const Nav: FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);

  return (
    <nav>
      <ul className="flex items-center justify-between gap-10 xl:gap-[50px]">
        {links.map((link: LinkType, index: number) => {
          return (
            <li
              key={index}
              onMouseEnter={() =>
                link.name === "Отчетность" && setDropdownOpen(true)
              }
              className="relative"
            >
              <Link
                href={link.path}
                className="text-xs xl:text-sm text-gray-colored font-normal hover:text-blue"
              >
                {link.name}
              </Link>
              {link.name === "Отчетность" && isDropdownOpen && (
                <ul
                  className="absolute left-0 mt-10 bg-white border-blue border-[2px] rounded-[20px] z-10 px-5 py-6 flex flex-col gap-2"
                  onMouseLeave={() =>
                    link.name === "Отчетность" && setDropdownOpen(false)
                  }
                >
                  {dropdownLinks.map(
                    (dropdownLink: LinkType, dropdownIndex: number) => (
                      <li key={dropdownIndex}>
                        <Link
                          href={dropdownLink.path}
                          className="block text-[14px] text-gray-colored font-normal hover:text-blue"
                        >
                          {dropdownLink.name}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
