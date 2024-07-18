// import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#800D1F] text-[#FFEBEE] px-20 py-5">
      <div className="flex justify-between pb-5 pl-32 pr-44">
        <Link href="/home" className=" pl-32">
          <img src="./vertical.png" alt="ECCELOGO" className="h-48 w-40" />
        </Link>
        <ul className="px-16">
          <li className="py-2 text-lg ">
            <Link href="/contact">CONTACT US</Link>
          </li>
          <li className="py-2 text-sm">
            <p>
              3502 Taylor Street E <br /> Suite 202 <br /> Saskatoon, SK <br />{" "}
              S7H 5H9
            </p>
          </li>
          <li className="py-2 text-sm">
            <Link href="">email</Link>
          </li>
          <li className="py-2 text-sm">
            <p>Phone: 1-306-986-5333</p>
          </li>
          <li className="py-2 text-sm">
            <p>Fax: 1-844-850-5878</p>
          </li>
        </ul>
        <ul>
          <li className="py-2 text-lg">
            <p>NAVIGATE</p>
          </li>
          <li className="py-2 text-sm">
            <Link href="/about">ABOUT US</Link>
          </li>
          <li className="py-2 text-sm">
            <Link href="/home#services">OUR SERVICES</Link>
          </li>
          <li className="py-2 text-sm">
            <Link href="">COMMON QUESTIONS</Link>
          </li>
          <li className="py-2 text-sm">
            <Link href="/contact">CONTACT US</Link>
          </li>
          <li>
            <Link href="" className="text-lg font-bold">
              in
            </Link>
            <Link href="" className="px-4 text-lg font-bold">
              f
            </Link>
          </li>
        </ul>
      </div>
      <p className="text-[#ffebeea9] pl-32 pt-10 pb-5">
        <Link href="">© 2024 by Net Trix Solutions</Link>
      </p>
    </div>
  );
};

export default Footer;
