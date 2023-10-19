import Head from "next/head";
import { Inter } from "@next/font/google";
import Profilepicture from "../components/Profilepicture";
import React, { useState, useEffect } from "react";

import LinkedinIcon from "../components/svgs/linkedinIcon.svg";
import InstagramIcon from "../components/svgs/instagram-svgrepo-com.svg";
import GithubIcon from "../components/svgs/githubIcon.svg";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const size = useWindowSize();
  console.log('size',size)

  const [tabSelected, setTabSelected] = useState("Asistobe");

  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: 1920,
      height: 1080,
    });
  
    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      
      window.addEventListener("resize", handleResize);
       
      handleResize();
      
      return () => window.removeEventListener("resize", handleResize);
    }, []); 
    return windowSize;
  }

//   <div className="flex sm:flex-row flex-col-reverse h-screen w-full sm:justify-center justify-start bg-teal-300">
//   <div className="sm:h-screen sm:w-2/5 w-full h-16">
//     <Profilepicture></Profilepicture>
//   </div>

//   <div className="flex flex-col justify-center max-w-xl font-mono font-extrabold text-5xl text-zinc-700 w-3/5 mx-4">
//     <div className="py-4 border-b-4">Fábio Pimenta</div>
//     <div className="py-4 text-3xl sm:mt-4">Software Engineer</div>
//   </div>
// </div>
  return (
    <>
      <Head>
        <title>Fabio Pimenta</title>
        <meta name="description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col w-full h-full bg-gray-100">
        {/* Hero */}
        <div className="flex sm:flex-row flex-col-reverse h-screen w-full sm:justify-center justify-start">
          <div className="sm:h-screen sm:w-2/5 w-full h-96">
            <Profilepicture></Profilepicture>
          </div>

          <div className="flex flex-col justify-center max-w-xl font-mono font-extrabold text-5xl text-zinc-700 w-3/5 mx-4">
            <div className="py-4 border-b-4">Fábio Pimenta</div>
            <div className="py-4 text-3xl sm:mt-4">Software Engineer</div>
          </div>
        </div>

        {/* About Me */}
        <div className="h-96 sm:h-24"></div>
        <div className="flex flex-col w-3/4  self-center">
          <div className="flex flex-row w-full content-start ">
            <div className="sm:w-6 py-4"></div>
            <h2 className="font-semibold text-3xl text-zinc-800 py-4">
              About Me
            </h2>
            <div className="border-b-2 ml-10 sm:w-44 h-9 w-24 border-zinc-400 "></div>
          </div>

          <div className="flex flex-col font-semibold w-full justify-between sm:flex-row ">
            {/* About Me Text */}
            <div className="max-w-md mr-10">
              <div className="my-2">
                Hi, I&apos;m Fábio, a passionate software engineer with a strong
                affinity for the MERN stack. With 2 years of professional
                experience under my belt, I&apos;ve had the opportunity to immerse
                myself in exciting projects that have greatly enhanced my
                technical skills and knowledge of the stack.
              </div>
              <div className="my-2">
                I thrive on challenging problems and love collaborating with
                colleagues, especially when brainstorming ideas on whiteboards.
                While I consider myself a strong full-stack developer, my
                proficiency leans towards the frontend.
              </div>
              <div className="my-2">
                Currently, I&apos;m on a quest to earn my next gym badge in DevOps.
                Although I may not be able to conquer it alone just yet, I
                possess a solid understanding of both relational and
                non-relational databases, Docker, and Linux systems. I&apos;m always
                eager to expand my knowledge in these areas. Beyond coding, I
                have a diverse range of personal interests. I&apos;m passionate about
                fitness and enjoy staying active. Dogs hold a special place in
                my heart, and spending time with mine is always time well spent.
                Volleyball, cooking, and chess are also among my favorite
                hobbies.
              </div>

              <div className="my-2">
                If you&apos;re looking for someone to join you for a beer, you&apos;ll
                likely find me in a sunny spot, ready for a great conversation.
                Feel free to reach out if you&apos;d like to connect or discuss
                exciting opportunities!{" "}
              </div>
              <div className="my-2">
                Here are a few technologies I&apos;ve been working with recently:
              </div>

              <div className="flex flow-row flex-wrap">
                <div className="flex flex-row mr-4 my-1 hover:font-bold">
                  <ChevronRightIcon className="h-4 self-center"></ChevronRightIcon>
                  <div>React</div>
                </div>
                <div className="flex flex-row mr-4 my-1 hover:font-bold">
                  <ChevronRightIcon className="h-4 self-center"></ChevronRightIcon>
                  <div>Express</div>
                </div>
                <div className="flex flex-row mr-4 my-1 hover:font-bold">
                  <ChevronRightIcon className="h-4 self-center"></ChevronRightIcon>
                  <div>NodeJS</div>
                </div>
                <div className="flex flex-row mr-4 my-1 hover:font-bold">
                  <ChevronRightIcon className="h-4 self-center"></ChevronRightIcon>
                  <div>MongoDB</div>
                </div>
                <div className="flex flex-row mr-4 my-1 hover:font-bold">
                  <ChevronRightIcon className="h-4 self-center"></ChevronRightIcon>
                  <div>Docker</div>
                </div>
                <div className="flex flex-row mr-4 my-1 hover:font-bold">
                  <ChevronRightIcon className="h-4 self-center"></ChevronRightIcon>
                  <div>AWS</div>
                </div>
                <div className="flex flex-row mr-4 my-1 hover:font-bold">
                  <ChevronRightIcon className="h-4 self-center"></ChevronRightIcon>
                  <div>Tailwind</div>
                </div>
                <div className="flex flex-row mr-4 my-1 hover:font-bold">
                  <ChevronRightIcon className="h-4 self-center"></ChevronRightIcon>
                  <div>NextJS</div>
                </div>
              </div>
            </div>

            <div className="flex-none relative sm:h-96 sm:w-96 sm:mt-0 mt-10  h-56 w-56 ">
              <Image
                className="rounded-full hover:animate-pulse"
                src="/Hotpot.png"
                alt="Wave"
                layout="fill"
                objectFit="contain"
              ></Image>
            </div>
          </div>
        </div>

        {/* Professional Journey */}
        <div className="h-36"></div>
        <div className="flex flex-row w-full justify-center">
          <div className="flex flex-col w-auto py-4  h-96 self-center ">
            <div className="flex flex-row w-full content-start items-center ">
              <div className="w-6 py-4"></div>
              <h2 className="font-semibold text-xl text-zinc-800 py-4 sm:text-3xl">
                Professional Journey
              </h2>
              <div className={`border-b-2 ml-10 h-0 border-zinc-400 ${size.width > 700 ? 'w-44': 'w-3/12 mr-2'}`}></div>
            </div>

            <div className="flex flex-row h-50">
              {/* Tab Selector */}
              <div className="flex flex-col font-semibold items-start justify-start">
                <button
                  className={
                    tabSelected === "Asistobe"
                      ? "p-2 border-l-4 border-gray-500"
                      : "p-2 pl-3"
                  }
                  onClick={() => {
                    setTabSelected("Asistobe");
                  }}
                >
                  Asistobe
                </button>
                <button
                  className={
                    tabSelected === "University"
                      ? "p-2 border-l-4 border-gray-500"
                      : "p-2 pl-3"
                  }
                  onClick={() => {
                    setTabSelected("University");
                  }}
                >
                  University
                </button>
              </div>
              {/* Content */}
              <div className="flex flex-col w-full h-full p-2 ml-6 max-w-sm">
                {tabSelected === "Asistobe" ? (
                  <>
                    <div className="font-semibold">
                      Fullstack Developer, Asistobe AS
                    </div>
                    <div className="text-sm">Nov 2021 - Today</div>

                    <div className="mt-2">
                      Responsible for developing and maintaining a web tool for
                      the optimization of public transportation, using transport
                      and mobile data.
                    </div>
                  </>
                ) : tabSelected === "University" ? (
                  <>
                    <div className="font-semibold">
                      Master&apos;s degree, Computer Science and Engineering
                    </div>
                    <div className="text-sm">
                      Instituto Superior Técnico (2019 - 2021)
                    </div>

                    <div className="mt-2">Cyber security specialization</div>

                    <div className="font-semibold mt-4">
                      Bachelor&apos;s degree, Computer Science and Engineering
                    </div>
                    <div className="text-sm">
                      Instituto Superior Técnico (2015 - 2019)
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        {/* Projects */}

        {size.width > 700 ? 

        <div className="flex flex-col w-full justify-center">
          <div className="flex flex-col w-auto py-4 self-center ">
            {/* Section Header */}
            <div className="flex flex-row w-full content-start mb-12 items-center">
              <div className="w-6 py-4"></div>
              <h2 className="font-semibold text-3xl text-zinc-800 py-4">
                Projects
              </h2>
              <div className="border-b-2 ml-10 w-44 h-0 border-zinc-400 "></div>
            </div>
          </div>
          <div className="flex w-full items-center justify-center h-44">
            {/* Image */}
            <div className="flex-none relative h-52 w-96 z-10 shadow-sm">
              <Image
                src="/card4B.png"
                alt="Card4B Logo"
                layout="fill"
                objectFit="contain"
              ></Image>
            </div>
            {/* Text and Banner */}
            <div className="flex flex-col h-56 w-96  -ml-12 z-20 items-center mt-10">
              <div className="flex flex-row w-full justify-end text-gray-800 font-semibold text-lg text-right p-2">
                Seamless Ticketing SDK
              </div>
              <div className="h-auto w-auto bg-gray-600 p-3 text-white text-base font-sm shadow-2xl rounded-sm">
                {" "}
                Developed an SDK that provides ticket validation and trip
                management functionalities for public transportation mobile
                aplications.
              </div>
              {/* Tech */}
              <div className="flex flow-row flex-wrap w-full justify-end">
                <div className="flex flex-row mr-4 my-1">
                  <ChevronRightIcon className="h-4 self-center"></ChevronRightIcon>
                  <div>Kotlin</div>
                </div>
                <div className="flex flex-row mr-4 my-1">
                  <ChevronRightIcon className="h-4 self-center"></ChevronRightIcon>
                  <div>Multiplatform</div>
                </div>
                <div className="flex flex-row mr-4 my-1">
                  <ChevronRightIcon className="h-4 self-center"></ChevronRightIcon>
                  <div>SQLite</div>
                </div>
              </div>
            </div>
          </div>
          {/* Second Project */}
          <div className="flex w-full items-center justify-center mt-32 h-44">
            {/* Text and Banner */}
            <div className="flex flex-col h-56 w-96  -mr-10 z-20 items-center mt-6 ">
              <div className="flex flex-row w-full justify-start text-gray-800 font-semibold text-lg p-2">
                Talent Pool Web App - Startup Project
              </div>
              <div className="h-auto w-auto bg-gray-600 px-4 py-3 text-white text-base font-sm shadow-2xl rounded-sm ">
                {" "}
                Developed a fullstack web application to centralize a candidate
                repository with graphics analytics that enable talent recruiters
                to match each candidate to a company&apos;s demands.
              </div>
              {/* Tech */}
              <div className="flex flow-row flex-wrap w-full justify-start">
                <div className="flex flex-row mr-4 my-1">
                  <ChevronRightIcon className="h-4 self-center"></ChevronRightIcon>
                  <div>Javascript</div>
                </div>
                <div className="flex flex-row mr-4 my-1">
                  <ChevronRightIcon className="h-4 self-center"></ChevronRightIcon>
                  <div>Firebase</div>
                </div>
                <div className="flex flex-row mr-4 my-1">
                  <ChevronRightIcon className="h-4 self-center"></ChevronRightIcon>
                  <div>Firestore</div>
                </div>
              </div>
            </div>
            {/* Image */}
            <div className="flex-none relative h-56 w-96 bg-white z-10 shadow-sm mt-10">
              <Image
                className="px-10"
                src="/CBT.png"
                alt="CBT Logo"
                layout="fill"
                objectFit="contain"
              ></Image>
            </div>
          </div>
        </div>

        :
        
        <>
        {/* Mobile Component */}
        <div className="flex flex-col w-full justify-center">

          <div className="flex w-full py-4 self-center">
            {/* Section Header */}
            <div className="flex flex-row w-full content-start mb-4 items-center">
              <div className="w-6 py-4"></div>
              <h2 className="font-semibold text-3xl text-zinc-800 py-4">
                Projects
              </h2>
              <div className="border-b-2 ml-10 w-full h-0 border-zinc-400 bg-red-500 mr-6" ></div>
            </div>
          </div>


          {/* First Project */}
          <div className="flex flex-col w-full h-full items-center justify-center">
            {/* Image */}
            <div className="flex-none relative h-52 w-full z-10 shadow-sm">
              <Image
                src="/card4B.png"
                alt="Card4B Logo"
                layout="fill"
                objectFit="contain"
              ></Image>
            </div>
            {/* Text and Banner */}
            <div className="flex flex-col h-56  w-11/12 z-20 items-center my-5">
              <div className="flex flex-row w-full justify-end text-gray-800 font-semibold text-lg text-right p-2">
                Seamless Ticketing SDK
              </div>
              <div className="h-auto w-auto bg-gray-600 p-3 text-white text-base font-sm shadow-2xl rounded-sm">
                {" "}
                Developed an SDK that provides ticket validation and trip
                management functionalities for public transportation mobile
                aplications.
              </div>
              {/* Tech */}
              <div className="flex flow-row flex-wrap w-full justify-end">
                <div className="flex flex-row mr-4 my-1">
                  <ChevronRightIcon className="h-4 self-center"></ChevronRightIcon>
                  <div>Kotlin</div>
                </div>
                <div className="flex flex-row mr-4 my-1">
                  <ChevronRightIcon className="h-4 self-center"></ChevronRightIcon>
                  <div>Multiplatform</div>
                </div>
                <div className="flex flex-row mr-4 my-1">
                  <ChevronRightIcon className="h-4 self-center"></ChevronRightIcon>
                  <div>SQLite</div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Project */}
          <div className="flex flex-col w-full items-center justify-center my-32 h-44">
              {/* Image */}
              <div className="flex-none relative h-56 w-full bg-white z-10 shadow-sm mt-10">
              <Image
                className="px-10"
                src="/CBT.png"
                alt="CBT Logo"
                layout="fill"
                objectFit="contain"
              ></Image>
            </div>
            {/* Text and Banner */}
            <div className="flex flex-col h-56 w-11/12 z-20 items-center mt-6 ">
              <div className="flex flex-row w-full justify-start text-gray-800 font-semibold text-lg p-2">
                Talent Pool Web App - Startup Project
              </div>
              <div className="h-auto w-auto bg-gray-600 px-4 py-3 text-white text-base font-sm shadow-2xl rounded-sm ">
                {" "}
                Developed a fullstack web application to centralize a candidate
                repository with graphics analytics that enable talent recruiters
                to match each candidate to a company&apos;s demands.
              </div>
              {/* Tech */}
              <div className="flex flow-row flex-wrap w-full justify-start">
                <div className="flex flex-row mr-4 my-1">
                  <ChevronRightIcon className="h-4 self-center"></ChevronRightIcon>
                  <div>Javascript</div>
                </div>
                <div className="flex flex-row mr-4 my-1">
                  <ChevronRightIcon className="h-4 self-center"></ChevronRightIcon>
                  <div>Firebase</div>
                </div>
                <div className="flex flex-row mr-4 my-1">
                  <ChevronRightIcon className="h-4 self-center"></ChevronRightIcon>
                  <div>Firestore</div>
                </div>
              </div>
            </div>
        
          </div>
        </div>
        </>
        }




        <div className="h-32"></div>
        {/* Text */}
       
        {/* End Curriculum */}
      </div>
    

      {/* Footer and Socials */}
      <div className="flex justify-end w-full z-10 ease-in duration-300 bg-white text-black p-4">
        <a href="https://www.linkedin.com/in/fabio-pimenta-311280145/">
          <LinkedinIcon className="w-6 h-6 m-2"></LinkedinIcon>
        </a>

        {/* <InstagramIcon className="w-6 h-6 m-2">
          <a href=""></a>
        </InstagramIcon> */}
        <a href="https://github.com/FabioPPimenta">
          <GithubIcon className="w-6 h-6 m-2"></GithubIcon>
        </a>
      </div>
    </>
  );
}

