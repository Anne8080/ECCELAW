import Link from 'next/link'
import React from 'react'

const QuestionsHero = () => {
  return (
    <header className="px-20 pt-28 ">
        {/* replace with image */}
        <div className="w-1/2 h-[50vh] bg-[url('/bgone.png')] bg-cover bg-center bg-no-repeat relative">
          <div className="bg-darkred text-white pt-16 pb-10 px-20 w-[50vw] absolute left-3/4 top-1/2">
            <h1 className="text-5xl py-5">COMMON QUESTIONS</h1>
            <p className="pt-5 pb-10 text-sm">
              We know that most people don&apos;t deal with legal matters every
              day, but we do. We&apos;ve compiled some commonly asked questions that
              our clients have. <br />
              <br /> The information and material on these pages and any other
              pages referenced are meant to provide general information only.
              You should consult with a licensed legal professional in your
              jurisdiction before relying on any of the information provided on
              this page or any other page on this website. <br />
              <br /> The information provided is specific to the jurisdiction of
              Saskatchewan, Canada.
            </p>
            <ul className="flex justify-between items-center">
              <li className="">
                <Link
                  href="/home#services"
                  className="py-2 px-16 border-2 border-white bg-white bg-fixed text-lightred hover:bg-transparent hover:text-white"
                >
                  Our Services
                </Link>
              </li>
              <li className="">
                <Link
                  href="/contact"
                  className="py-2 px-16 border-2 border-white bg-transparent bg-fixed text-white hover:bg-white  hover:text-lightred"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
  )
}

export default QuestionsHero