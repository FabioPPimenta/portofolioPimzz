import Head from "next/head";
import WaveSVGBot from "./../../public/layered-waves-bot.svg";
import WaveSVGTop from "./../../public/layered-waves-top.svg";
import Projects from "../components/Projects";

import React, { useState, useEffect } from "react";

import LinkedinIcon from "../components/svgs/linkedinIcon.svg";
import CVIcon from "../components/svgs/iconCV.svg";

import GithubIcon from "../components/svgs/githubIcon.svg";
import TypingEffect from "../components/TypingEffect";
import CommonContext from "@/context/CommonContext";
import { Application } from "@splinetool/runtime";
import { HashLoader } from "react-spinners";

export default function Home() {
  let canvas;
  let app;
  if (
    typeof document !== "undefined" &&
    (document.getElementById("canvas3d") as HTMLCanvasElement)
  ) {
    canvas = document.getElementById("canvas3d") as HTMLCanvasElement;
    app = new Application(canvas);
    app.load("https://prod.spline.design/FOfohzhuywvREHad/scene.splinecode");
  }
  

  const context = React.useContext(CommonContext);
  const size = useWindowSize();

  const [tabSelected, setTabSelected] = useState("Asistobe");
  const [isReady, setIsReady] = useState(false);

//Stops the loader after x time
  useEffect(() => {
    const initialTimer = setTimeout(() => {
      setIsReady(true);
    }, 3500);

    return () => clearTimeout(initialTimer);
  }, []);

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

  return (
    <>
      <Head >
        <title>Fabio Pimenta</title>
        <meta name="description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className="bg-space_gray">
      {!isReady && <Loader />}
        <div   className={`transition-opacity duration-500 ease-in-out bg-space_gray ${
        !isReady ? 'opacity-0' : 'opacity-100'
        }`}>
          <div
            ref={context?.homeRef}
            className="flex flex-col w-full h-full bg-space_gray"
          >
            {/* Hero */}
            <div className="flex sm:flex-row flex-col h-screen w-full sm:justify-around justify-start ">
              <div className="flex flex-col sm:flex-row items-center sm:mt-0 mt-24">
                <img
                  className="w-56 h-56 mb-8 m-4 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="/image.png"
                ></img>

                <div className="flex flex-col justify-center max-w-xl font-mono font-extrabold text-5xl text-white w-3/5 mx-4 mt-24 sm:m-4 ">
                  <div className="py-4 border-b-4">Fábio Pimenta</div>

                  <TypingEffect />
                </div>
              </div>

              <div className="flex h-full lg:visible invisible ">
                <div className="flex flex-col h-11/12 self-end rotate-12 -translate-x-10 sm:rotate-45 sm:-translate-x-52 ">
                  <canvas id="canvas3d"></canvas>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div  className="w-full justify-center">

              <WaveSVGTop className="w-full" />
              <div className="relative -top-72" ref={context?.aboutMeRef}></div>
            </div>

            <section  className="bg-chili_red flex w-full flex-col ">
              <h2 className="flex text-5xl font-semibold text-white py-6 justify-center ">
                About me
              </h2>
              <div className="flex justify-center text-gray-100 text-base font-medium ">
                <div className="sm:w-2/3 w-4/5">
                  <div className="py-2">
                    Hi, I&apos;m Fábio, a dedicated software engineer
                    specializing in the MERN stack. With 3 years of professional
                    experience, I&apos;ve worked on a range of projects that
                    have sharpened my technical skills and deepened my
                    understanding of full-stack development.
                  </div>
                  <div className="py-2">
                    While I&apos;m comfortable across the stack, my strengths lie in
                    frontend development. I enjoy solving complex problems and
                    collaborating with others, particularly when it comes to
                    brainstorming and whiteboard sessions.
                  </div>
                  <div className="py-2">
                    Currently, I&apos;m expanding my expertise in DevOps,
                    building on a solid foundation in relational and
                    non-relational databases, Docker, and Linux systems.
                    I&apos;m always eager to grow my knowledge and take on new
                    challenges. Feel free to reach out if you&apos;d like to
                    connect or discuss potential opportunities!
                  </div>
                </div>
              </div>
            </section>
            <div className="w-full justify-center">
              <WaveSVGBot className="w-full" />
            </div>

            {/* About Me */}
            <div className="h-96 sm:h-24 "ref={context?.journeyRef}></div>
            {/*  */}

            {/* Professional Journey */}
            <div
              className="h-[70vh] w-full bg-center bg-no-repeat bg-cover " 
              style={{ backgroundImage: "url('/blob.svg')" }}
            >
              <div className="flex h-full flex-row w-full justify-center text-white">
                <div className="flex flex-col w-auto py-4  h-96 self-center  ">
                  <div className="flex flex-row w-full content-start items-center ">
                    <div className="w-6 py-4"></div>
                    <h2 className="font-semibold text-xl text-white py-4 sm:text-3xl">
                      Professional Journey
                    </h2>
                    <div
                      className={`border-b-2 ml-10 h-0 border-zinc-200 ${
                        size.width > 700 ? "w-44" : "w-3/12 mr-2"
                      }`}
                    ></div>
                  </div>

                  <div className="flex flex-row h-50">
                    {/* Tab Selector */}
                    <div className="flex flex-col font-semibold items-start justify-start">
                      <button
                        className={
                          tabSelected === "Asistobe"
                            ? "p-2 border-l-8 border-chili_red "
                            : "p-2 pl-4"
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
                            ? "p-2 border-l-8 border-chili_red"
                            : "p-2 pl-4"
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
                          <div className="font-semibold text-lg">
                            Fullstack Developer, Asistobe AS
                          </div>
                          <div className="text-sm">Nov 2021 - Today</div>

                          <div className="mt-2 font-light">
                            Responsible for developing and maintaining a web
                            tool for the optimization of public transportation,
                            using transport and mobile data. In my day to day, I
                            mostly work with React, NodeJS, Express and MongoDB.
                          </div>
                        </>
                      ) : tabSelected === "University" ? (
                        <>
                          <div className="font-semibold text-lg">
                            Master&apos;s degree, Computer Science and
                            Engineering
                          </div>
                          <div className="text-sm">
                            Instituto Superior Técnico (2019 - 2021)
                          </div>

                          <div className="mt-1">Cyber security minor</div>

                          <div className="font-semibold mt-5 text-lg">
                            Bachelor&apos;s degree, Computer Science and
                            Engineering
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
            </div>

            {/* Projects */}
            <div className="h-32" ref={context?.projectsRef}></div>
            <Projects></Projects>

            <div className="h-32"></div>
            {/* Text */}

            {/* End Curriculum */}
          </div>

          {/* Footer and Socials */}
          <div className="flex justify-end w-full z-10 ease-in duration-300 bg-space_gray text-white p-4 fill-white">
            <a href="/FabioCV.pdf">
              <CVIcon className="w-6 h-6 m-2 mt-2 fill-white"></CVIcon>
            </a>
            <a href="https://www.linkedin.com/in/fabio-pimenta-311280145/">
              <LinkedinIcon className="w-6 h-6 m-2 fill-white"></LinkedinIcon>
            </a>

            {/* <InstagramIcon className="w-6 h-6 m-2">
          <a href=""></a>
        </InstagramIcon> */}
            <a href="https://github.com/FabioPPimenta">
              <GithubIcon className="w-6 h-6 m-2 fill-white"></GithubIcon>
            </a>
          </div>
        </div>
        </div>
    </>
  );
}

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-space_gray">
      <HashLoader size={50} color="#d84727" />
    </div>
  );
};
