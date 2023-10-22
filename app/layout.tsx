import CartProvider from "@/providers/CartProvider";
import getCurrentUser from "../actions/getCurrentUser";
import NavBar from "./components/navbar/NavBar";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import { CrispProvider } from "./components/crisp-provider";

import HeaderMobile from "./components/header-mobile";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Saherasoftware.com",
  description: "Grow your business by website, mobile app & more.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <CrispProvider />
      <body className={`${poppins.className} text-slate-700`}>
        <Toaster
          toastOptions={{
            style: {
              background: "rgb(51 65 85)",
              color: "#fff",
            },
          }}
        />
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <NavBar currentUser={currentUser} />
            <main className="flex-grow">
              {children}

              <HeaderMobile />
            </main>

            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
