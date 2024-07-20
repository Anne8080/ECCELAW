// import Image from "next/image";
import Link from "next/link";
import ServiceNav from "../components/ServiceNav";
import QuestionNav from "../components/QuestionNav";

const Navbar = () => {
  
  return (
    <div className="py-5 px-40 w-screen fixed z-50 bg-darkgray">

      <div className="flex justify-between items-center ">
        <Link href="/home">
          <img src="./horizontal.png" alt="ECCELOGO" className="h-16 w-30" />
        </Link>
        <ul className="text-white flex justify-around ">
          <li className="px-3 hover:text-linkhover text-lg">
            <Link href="/about">About</Link>
          </li>
          
          <ServiceNav />
          
          <QuestionNav />
          
          <li className="px-3 hover:text-linkhover text-lg">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
