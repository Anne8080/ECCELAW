import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  EmailOutlined,
  FacebookOutlined,
  FmdGoodOutlined,
  PhoneOutlined,
} from "@mui/icons-material";

const page = () => {
  return (
    <div>
      {/* navbar */}
      <Navbar />
      <section className="bg-[#800D1F] text-[#FFEBEE] text-sm px-60 pt-32">
        <h1 className="py-16 text-center text-5xl">CONTACT US</h1>
        <p className="text-center px-10">
          If you would like to inquire about our services or set up a meeting,
          please provide the information requested. Once we receive your
          information, we run a search to make sure that there is no conflict of
          interest. After we have completed this, we will contact you to let you
          know if we can help with your matter. <br />
          <br /> Please allow up to two business days for a response. If you
          would like to be in contact with us sooner, please call reception
          during office hours. <br /> <br /> Be sure to check your JUNK MAIL
          folder as every now and then our emails get filtered incorrectly.
        </p>
        <div className="flex justify-center px-5 py-20">
          <form action="" className="pr-20 ">
            <div className="flex">
              {/* name input */}
              <input
                type="text"
                name="name"
                placeholder="NAME"
                className="p-2 bg-transparent border-2 border-[#feebee] focus:outline-none focus:bg-[#feebee50] hover:bg-[#feebee1c] inputs"
              />
              {/* email inut */}
              <input
                type="email"
                name="email"
                className="ml-2 p-2 bg-transparent border-2 border-[#feebee] focus:outline-none focus:bg-[#feebee50] hover:bg-[#feebee1c] inputs"
                placeholder="EMAIL"
              />
            </div>
            {/* phone input */}
            <input
              type="text"
              name="phone"
              placeholder="PHONE"
              className="w-full p-2 my-5 bg-transparent border-2 border-[#feebee] focus:outline-none focus:bg-[#feebee50] hover:bg-[#feebee1c] inputs"
            />
            {/* message input */}
            <textarea
              name="message"
              rows={7}
              placeholder="HOW MAY WE BE OF ASSISTANCE?"
              className="w-full p-2 bg-transparent border-2 border-[#feebee] focus:outline-none focus:bg-[#feebee50] hover:bg-[#feebee1c] resize-none inputs"
            ></textarea>
            {/* submit */}
            <input
              type="submit"
              value="SUBMIT"
              className="py-2 w-full border-2 border-[#800D1F] bg-[#FFEBEE] bg-fixed text-[#BB0D1F] hover:bg-[#feebee50] hover:text-[#ffebee] hover:border-[#feebee] mt-5"
            />
          </form>
          <table className="w-1/2 items-center">
            <tr>
              <td className="py-2 px-1">
                <p>
                  <FmdGoodOutlined className="text-4xl" />
                </p>
              </td>
              <td className="py-2 px-1">
                <p>
                  3502 Taylor Street E <br /> Suite 202 <br /> Saskatoon, SK{" "}
                  <br /> S7H 5H9
                </p>
              </td>
            </tr>
            <tr>
              <td className="py-2 px-1">
                <p>
                  <EmailOutlined className="text-4xl" />
                </p>
              </td>
              <td className="py-2 px-1">
                <Link href="">email</Link>
              </td>
            </tr>
            <tr>
              <td className="py-2 px-1">
                <PhoneOutlined className="text-4xl" />
              </td>
              <td className="py-2 px-1">
                <p>1-306-986-5333</p>
              </td>
            </tr>
            <tr>
              <td className="py-2 px-1"></td>
              <td className="py-2 px-1">
                <p>Fax: 1-844-850-5878</p>
              </td>
            </tr>
            <tr>
              <td className="py-2 px-1"></td>
              <td className="py-2 px-1 text-lg ">
                <Link href="" className="font-bold">
                  in
                </Link>
                <Link href="" className="px-4 font-bold">
                  f
                </Link>
              </td>
            </tr>
          </table>
        </div>
        <div className="flex justify-between pb-10 items-center">
          <p className="italic pl-5 text-sm w-1/2">
            If you have not previously retained our firm, simply providing
            information does not establish a solicitor-client relationship.
            <br />
            <br /> Do not provide any confidential or sensitive information.
          </p>
          <div className="w1/2 pr-16">
            <img src="/horizontal.png" alt="LOGO" className="h-32 w-52" />
          </div>
        </div>
      </section>
      <section className="bg-[#ffc9d1]">
        <br />
      </section>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default page;
