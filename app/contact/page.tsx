export const dynamic = "force-dynamic";

import ContactForm from "@/app/contact/ContactForm";
import Link from "next/link";
import HomeBanner from "../components/HomeBanner";

export default function ContactPage() {
  return (
    <main className="p-8">
      <div>
        <HomeBanner />
      </div>
      <div className="p-4 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p>Please fill in the form below</p>

        <ContactForm />
        <div className="p-4 max-w-3xl mx-auto justify-center items-center">
          <h1 className="text-3xl font-bold mb-2 ">Our Address</h1>
          <p className="mb-2">
            ADDRESS: 71/B, East Hazipara, Rampura, Dhaka, Bangladesh
          </p>
          <div className="mb-2">
            <Link href={`tel:`}>PHONE: +8801715952332</Link>
          </div>
          <div className="mb-2">
            <Link href={`mailto:`}>EMAIL: support@saherasoftware.com</Link>
          </div>
          <div className="mb-2">
            <Link href={`mailto:`}>EMAIL: saherasoftware@gmail.com</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
