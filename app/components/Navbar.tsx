import Link from "next/link";

const Navbar = () => {
  return (
    <div className="py-5 px-40 w-screen fixed z-50 bg-[#fff]">

      <div className="flex justify-between items-center ">
        <Link href="/home">
          <img src="./horizontal.png" alt="ECCELOGO" className="h-16 w-30" />
        </Link>
        <ul className="text-[#231F20] flex justify-around ">
          <li className="px-3 hover:text-[#231f20c4] text-lg">
            <Link href="/about">About</Link>
          </li>
          
          <li className="px-3 text-lg relative">
            <p className="hover:text-[#231f20c4] cursor-pointer">Services</p>
            <ul className="absolute top-16 right-0 w-52 bg-white py-2 px-10 hidden" >
                <li className="py-1 text-base hover:text-[#231f20c4]"><Link href='' >Business</Link></li>
                <li className="py-1 text-base hover:text-[#231f20c4]"><Link href='' >Real Estate</Link></li>
                <li className="py-1 text-base hover:text-[#231f20c4]"><Link href='' >Estates</Link></li>
                <li className="py-1 text-base hover:text-[#231f20c4]"><Link href='' >AI Governance</Link></li>
            </ul >
          </li>
          
          <li className="px-3 hover:text-[#231f20c4] text-lg">
            <Link href="/about">Common Questions</Link>
          </li>
          <li className="px-3 hover:text-[#231f20c4] text-lg">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
