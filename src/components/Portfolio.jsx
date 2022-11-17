import React from "react";
import bac from "../assets/portfolio/bac.jpg";
import emailsender from "../assets/portfolio/emailsender.jpg";
import landingpage from "../assets/portfolio/landingpage.jpg";;


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: bac,
      link1: "https://anajadelis.github.io/Bulls-and-Cows/",
      link2: "https://github.com/anajadelis/Bulls-and-Cows"
    },
    {
      id: 2,
      src: emailsender,
      link1: "https://onlinegdb.com/4i1B-WbPCE",
      link2: "https://github.com/anajadelis/email-code"
    },
    {
      id: 3,
      src: landingpage,
      link1: "https://anajadelis.github.io/Landing-Page/",
      link2: "https://github.com/anajadelis/Landing-Page"
    }
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link1, link2 }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
              <a 
              href={link1}
              className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                Demo
                </a>
                <a 
                href={link2}
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Portfolio;
