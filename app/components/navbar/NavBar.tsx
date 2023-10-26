import { Redressed } from "next/font/google";
import Link from "next/link";

import Container from "../Container";
import CartCount from "./CartCount";
import UserMenu from "./UserMenu";
import { SafeUser } from "@/types";
import Categories from "./Categories";
import SearchBar from "./SearchBar";
import HeaderMobile from "../header-mobile";
import Image from "next/image";

interface NavBarProps {
  currentUser: SafeUser | null;
}

const redressed = Redressed({ subsets: ["latin"], weight: ["400"] });

const NavBar: React.FC<NavBarProps> = ({ currentUser }) => {
  return (
    <div
      className="
    sticky
    w-full
    bg-slate-200
    z-30
    shadow-sm
    top-0
    "
    >
      <div className="py-4 border-b-[1px]">
        <Container>
          <div
            className="
          flex
          flex-row
          items-center
          justify-between
          gap-3
          md:gap-0
          "
          >
            <Link href="/" className="flex items-center">
              <div className="relative h-8 w-8 mr-4 ">
                <Image fill alt="Logo" src="/logo.png" />
              </div>
              <h1 className=" text-xl">Sahera software</h1>
            </Link>
            <div className="hidden md:block">
              <SearchBar />
            </div>
            <div className="hidden md:block">
              <nav className=" flex flex-wrap items-center  justify-center">
                <CartCount />
                <UserMenu currentUser={currentUser} />
              </nav>
            </div>
          </div>
        </Container>
      </div>
      <Categories />
      <HeaderMobile />
    </div>
  );
};

export default NavBar;
