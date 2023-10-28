import React from "react";
import ContactForm from "./form";
import Link from "next/link";

const Contact = () => {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Contact Us
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            We are Here to Help!
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <ContactForm />
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <Link
                href={`mailto:support@saherasoftware.com`}
                className="text-indigo-500"
              >
                support@saherasoftware.com
              </Link>
              <br />
              <br />

              <Link href={`tel:+8801715952332`} className="text-indigo-500">
                +8801715952332
              </Link>

              <p className="leading-normal my-5">
                49 Smith St.
                <br />
                Saint Cloud, MN 56301
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
