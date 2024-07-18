import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
          folder as every now and then our emails get filtered incorrectly.{" "}
        </p>
        <div className="flex justify-center p-5">
          <form action=""></form>
          <table>
            <tr>
              <td>
                <p>icon</p>
              </td>
              <td>
                <p>
                  3502 Taylor Street E <br /> Suite 202 <br /> Saskatoon, SK{" "}
                  <br /> S7H 5H9
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>icon</p>
              </td>
              <td>
                <Link href="">email</Link>
              </td>
            </tr>
            <tr>
              <td>icon</td>
              <td>
                <p>Phone: 1-306-986-5333</p>
              </td>
            </tr>
            <tr>
              <td>icon</td>
              <td>
                <p>Fax: 1-844-850-5878</p>
              </td>
            </tr>
            <tr>
              <td>icon</td>
              <td>
                <Link href="">in</Link>{" "}
                <Link href="" className="px-4">
                  f
                </Link>
              </td>
            </tr>
          </table>
        </div>
      </section>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default page;
