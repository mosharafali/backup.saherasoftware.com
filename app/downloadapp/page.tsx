import { FcGoogle } from "react-icons/fc";
import { GrAppleAppStore } from "react-icons/gr";
export const dynamic = "force-dynamic";

import Link from "next/link";
import HomeBanner from "@/components/HomeBanner";

export default function DownloadappPage() {
  return (
    <main className="p-8">
      <div>
        <HomeBanner />
      </div>
      <br />
      <div className="p-4 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center ">
          Download Our Mobile App
        </h1>
        <div>
          <Link href={"/downloadapp"}>
            <button className="w-full bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-2 border border-orange-700 rounded mb-4">
              Download from Google Play Store{" "}
              <FcGoogle
                className="icon"
                style={{
                  position: "relative",
                  top: "-5px",
                  left: "150px",
                }}
                size="50px"
                color="orange"
              />
            </button>
          </Link>
        </div>
        <div>
          <Link href={"/downloadapp"}>
            <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 border border-blue-700 rounded mb-4">
              Download from Apple App Store{" "}
              <GrAppleAppStore
                className="icon"
                style={{
                  position: "relative",
                  top: "-5px",
                  left: "150px",
                }}
                size="50px"
                color="orange"
              />
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
