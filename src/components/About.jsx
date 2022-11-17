import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        I worked for a year as an English instructor at Wizard by Pearson, in the pedagogical development of the 'Ganhe o Mundo' Program classes, which was interrupted due to the pandemic and its complications. I also developed pedagogical material (in textual and audiovisual format) focusing on learning the English language for 'Mundo Zung' for a period of three months.
        </p>

        <br />

        <p className="text-xl">
        <br /> I am currently a Web Development student at the Catholic University of Pernambuco, focusing on SysOps and cloud systems administration.
        </p>
      </div>
    </div>
  );
};

export default About;
