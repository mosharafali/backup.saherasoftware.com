import Link from "next/link";
import Container from "./Container";
import FooterList from "./FooterList";
import { MdFacebook } from "react-icons/md";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-slate-200 text-slate-20 text-sm mt-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          <FooterList>
            <h3 className="text-base font-bold mb-2">Shop Categories</h3>
            <Link href="/?category=NextJS">NextJS</Link>
            <Link href="/?category=ReactJS">ReactJS</Link>
            <Link href="/?category=Laravel">Laravel</Link>
            <Link href="/?category=WordPress">WordPress</Link>
            <Link href="/?category=Shopify">Shopify</Link>
            <Link href="/?category=Wix">Wix</Link>
            <Link href="/?category=Mobile%20App">Mobile App</Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Customer Service</h3>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact Us</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms & Condition</Link>
            <Link href="/demo">Demo</Link>
            <Link href="downloadapp">Download App</Link>
          </FooterList>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-base font-bold mb-2">About Us</h3>
            <p className="mb-2">
              Welcome to Sahera software. Sahera software is a dynamic entity at
              the heart of the digital age. We are the architects of the virtual
              spaces that power modern business, foster communication, and bring
              imagination to life on the web.
            </p>
            <FooterList>
              <h3 className="text-base font-bold mb-2">Follow Us</h3>
              <div className="flex gap-2">
                <Link href="#">
                  <MdFacebook size={24} />
                </Link>
                <Link href="#">
                  <AiFillTwitterCircle size={24} />
                </Link>
                <Link href="#">
                  <AiFillInstagram size={24} />
                </Link>
                <Link href="#">
                  <AiFillYoutube size={24} />
                </Link>
              </div>
            </FooterList>
          </div>
        </div>
        <div className="flex justify-center">
          <p>
            &copy; {new Date().getFullYear()} Sahera software. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
