// import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-darkred text-white px-10 py-2">
      <div className="flex justify-between p-5 items-center">
        <div className="flex gap-4 items-center text-base">
          <Link href="/home" className="">
            <img src="/horizontal.png" alt="ECCELOGO" className="h-16 w-32" />
          </Link>
          <Link className="hover:text-linkhover" href="/about">ABOUT US</Link>
          <Link className="hover:text-linkhover" href="/home#services">OUR SERVICES</Link>
          <Link className="hover:text-linkhover" href="common-questions">COMMON QUESTIONS</Link>
        </div>
        <div className="flex gap-2 text-[#ffebeea9] items-center">
          <Link href="http://net-trix.ca" target="_blank" className="hover:text-white">
            &copy;{new Date().getFullYear()} by Net Trix Solutions
          </Link>
          <Link href="" className="text-lg font-bold hover:text-white">
              in
            </Link>
            <Link href="" className="text-lg font-bold hover:text-white">
              f
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
