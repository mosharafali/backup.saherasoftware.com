import { Redressed } from "next/font/google";
import Link from "next/link";

import Container from "../Container";
import CartCount from "./CartCount";
import UserMenu from "./UserMenu";
import { SafeUser } from "@/types";
import Categories from "./Categories";
import SearchBar from "./SearchBar";
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
              <div className="relative h-8 w-8 mr-35">
                <Image fill alt="Logo" src="/logo.png" />
              </div>
              <h1 className=" hidden md:block text-2xl">Sahera software</h1>
            </Link>
            <div>
              <SearchBar />
            </div>
            <Link href={"/downloadapp"}>
              <button className="hidden md:block bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 border border-orange-700 rounded">
                DOWNLOAD APP
              </button>
            </Link>

            <div className="hidden md:block ml-96 pl-75 ">
              <CartCount />
            </div>
            <div className="hidden md:block">
              <UserMenu currentUser={currentUser} />
            </div>
          </div>
        </Container>
        <div></div>
      </div>
      <div className="hidden md:block">
        <Categories />
      </div>
    </div>
  );
};

export default NavBar;
