import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SocialIcons from "../components/socialIcons";

const Index = () => {
  return (
    <Layout>
      <div className="h-screen">
        <div
          className="bg-white flex flex-col items-start mx-8 py-12 sm:ml-24 md:ml-32 lg:ml-48 xl:ml-60 
                       sm:pt-20 md:pt-28 min-w-min max-w-screen-sm sm:w-2/3 md:w-7/12 lg:w-1/2"
        >
          <h2 className="mb-4 sm:mb-5 font-normal text-xl sm:text-2xl lg:text-3xl text-green-800 font-tillana">
            Hasan Mahmud Sajal
          </h2>
          <div className="mb-6 font-oneday text-xs md:text-sm text-cyan-700">
            <Link
              to="/career"
              className="mr-4 sm:mr-7 hover:font-bold tracking-wide1p sm:tracking-wide2p"
            >
              Portfolio
            </Link>
            <a
              href="https://blog.hmsajal.com"
              className="mr-4 sm:mr-7 hover:font-bold tracking-wide1p sm:tracking-wide2p"
            >
              Blog
            </a>
            <Link
              to="/contact"
              className="mr-4 sm:mr-7 hover:font-bold tracking-wide1p sm:tracking-wide2p"
            >
              Contact
            </Link>
          </div>
          <div
            style={{ wordSpacing: "9px", fontFamily: "fira sans" }}
            className="text-lg md:text-xl font-light break-words leading-8 md:leading-9 lg:leading-10"
          >
            Hi, I am Hasan Mahmud Sajal. I am a front-end web developer and
            JavaScript is my de facto programming language for developing
            applications. This page is a gateway to all of my online portfolios.
            You'll get to know different aspects of me by clicking on different
            links in this page. Please{" "}
            <a
              href="mailto:sajal.hm@gmail.com"
              className="text-blue-600 hover:text-rose-800"
            >
              mail me
            </a>
            , if you want to contact directly.
          </div>
          <div>
            <SocialIcons />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
