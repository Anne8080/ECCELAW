import Link from 'next/link'
import React from 'react'

const ServiceContactCard = () => {
  return (
    <section className="px-32">
        <div className="text-center py-32 px-52 items-center flex flex-col">
          <Link href="">
            <img src="./eccelogo.png" alt="Logo" className="h-28 w-24" />
          </Link>
          <Link href="">
            <h1 className="text-darkred text-5xl pt-14 px-0">
              FEELING OVERWHELMED?
            </h1>
          </Link>
          <p className=" py-5 px-16 text-sm">
            WE PROVIDE OUR CLIENTS WITH A PRACTICAL BUT COMPASSIONATE APPROACH WHEN NEGOTIATING THIS DIFFICULT TIME.
          </p>
          <ul className="flex justify-between items-center py-10 px-20 w-full">
            <Link
              href="/home#services"
              className="mr-2 w-1/2"
            >
              <li className=" py-2 border-2 border-darkred bg-darkred bg-fixed text-white hover:bg-transparent hover:text-darkred">Common Questions</li>
            </Link>
            <Link
              href="/contact"
              className="ml-2 w-1/2"
            >
              <li className="py-2 px-10 border-2 border-darkred bg-transparent bg-fixed text-darkred hover:bg-darkred  hover:text-white">Contact Us</li>
            </Link>
          </ul>
        </div>
      </section>
  )
}

export default ServiceContactCard