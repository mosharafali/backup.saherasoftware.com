import { AiOutlineMobile } from "react-icons/ai";
import { DiWordpress, DiLaravel } from "react-icons/di";
import { SiJirasoftware, SiShopify, SiWix } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { RiReactjsFill } from "react-icons/ri";

export const categories = [
  {
    label: "All",
    icon: SiJirasoftware,
  },
  {
    label: "NextJs",
    icon: TbBrandNextjs,
  },
  {
    label: "ReactJS",
    icon: RiReactjsFill,
  },
  {
    label: "Laravel",
    icon: DiLaravel,
  },
  {
    label: "WordPress",
    icon: DiWordpress,
  },
  {
    label: "Shopify",
    icon: SiShopify,
  },
  {
    label: "Wix",
    icon: SiWix,
  },
  {
    label: "App",
    icon: AiOutlineMobile,
  },
];
