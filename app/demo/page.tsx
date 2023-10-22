export const dynamic = "force-dynamic";

import ContactForm from "@/app/contact/ContactForm";
import Link from "next/link";
import HomeBanner from "../components/HomeBanner";

export default function DemoPage() {
  return (
    <main className="p-8">
      <div>
        <HomeBanner />
      </div>
      <div className="p-4 max-w-3xl mx-auto mb-2">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Demo website and app list
        </h1>
        <Link href={"/downloadapp"}>
          <button className="text-left w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mb-4">
            1. NesxtJS Ecommerce Website
          </button>
        </Link>
        <Link href={"/downloadapp"}>
          <button className=" text-left w-full bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 border border-orange-700 rounded mb-4">
            2. ReactJS Ecommerce Website
          </button>
        </Link>
      </div>
    </main>
  );
}
