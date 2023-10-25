import { Redressed } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import Container from "../Container";
import CartCount from "./CartCount";
import UserMenu from "./UserMenu";
import { SafeUser } from "@/types";
import Categories from "./Categories";
import SearchBar from "./SearchBar";
import HeaderMobile from "@/app/components/header-mobile";

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
          gap-1
          md:gap-0
          "
          >
            <Link href="/" className="flex items-center">
              <div className="relative h-8 w-8 mr-4 ">
                <Image fill alt="Logo" src="/logo.png" />
              </div>
              <h1 className=" text-2xl">Sahera software</h1>
            </Link>
            <div className="hidden md:block">
              <SearchBar />
            </div>
            <div className="flex items-center gap-8 md:gap-12">
              <CartCount />
              <UserMenu currentUser={currentUser} />
            </div>
            <div>
              <HeaderMobile />
            </div>
          </div>
        </Container>
      </div>
      <Categories />
    </div>
  );
};

export default NavBar;
