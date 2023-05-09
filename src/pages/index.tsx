import Head from "next/head";
import { Inter } from "@next/font/google";
import Profilepicture from "../components/Profilepicture";
import React , {useState} from "react";

import LinkedinIcon from "../components/svgs/linkedinIcon.svg";
import InstagramIcon from "../components/svgs/instagram-svgrepo-com.svg";
import GithubIcon from "../components/svgs/githubIcon.svg";
import { ChevronRightIcon } from '@heroicons/react/24/outline';


const inter = Inter({ subsets: ["latin"] });



export default function Home() {
  const [tabSelected, setTabSelected] = useState('Asistobe');

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
        <div className="sm:flex-row flex flex-col  h-screen w-full sm:justify-center justify-start">
          <div className="sm:h-screen sm:w-2/5 w-full h-16">
            <Profilepicture></Profilepicture>
          </div>

          <div className="flex flex-col justify-center max-w-xl font-mono font-extrabold text-5xl text-zinc-700 w-3/5 mx-4">
            <div className="py-4 border-b-4">Fábio Pimenta</div>
            <div className="py-4 text-3xl sm:mt-4">Software Engineer</div>
          </div>
        </div>
        
        {/* About Me */}
        <div className="flex flex-col w-3/4  self-center ">
          <div className="flex flex-row w-full content-start">
            <div className="w-6 py-4"></div>
            <h2 className="font-semibold text-3xl text-zinc-800 py-4">About Me</h2>
            <div className="border-b-2 ml-10 w-44 h-9 border-zinc-400 "></div>
          </div>
          

          <div className="flex flex-row font-semibold w-full justify-start">
            {/* About Me Text */}
            <div className="max-w-md mr-10">
              <div className="my-2">
                Hello! My name is Fábio and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!

              </div>
              <div className="my-2">
              Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.

              </div>
              <div className="my-2">
              I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.

              </div>
              <div className="my-2">
              Here are a few technologies I’ve been working with recently:

              </div>

              <div className="flex flow-row flex-wrap">
                <div className="flex flex-row mr-4 my-1">
                  <ChevronRightIcon className="h-4 self-center"></ChevronRightIcon>
                  <div>React</div>
                </div>
                <div className="flex flex-row mr-4 my-1">
                  <ChevronRightIcon className="h-4 self-center"></ChevronRightIcon>
                  <div>Express</div>
                </div>
                <div className="flex flex-row mr-4 my-1">
                  <ChevronRightIcon className="h-4 self-center"></ChevronRightIcon>
                  <div>NodeJS</div>
                </div>
                <div className="flex flex-row mr-4 my-1">
                  <ChevronRightIcon className="h-4 self-center"></ChevronRightIcon>
                  <div>MongoDB</div>
                </div>
                <div className="flex flex-row mr-4 my-1">
                  <ChevronRightIcon className="h-4 self-center"></ChevronRightIcon>
                  <div>Docker</div>
                </div>
                <div className="flex flex-row mr-4 my-1">
                  <ChevronRightIcon className="h-4 self-center"></ChevronRightIcon>
                  <div>AWS</div>
                </div>
                <div className="flex flex-row mr-4 my-1">
                  <ChevronRightIcon className="h-4 self-center"></ChevronRightIcon>
                  <div>Tailwind</div>
                </div>
                <div className="flex flex-row mr-4 my-1">
                  <ChevronRightIcon className="h-4 self-center"></ChevronRightIcon>
                  <div>NextJS</div>
                </div>
                
              </div>




            </div>
            <div className=" bg-slate-500">
              <LinkedinIcon className="w-full h-full"></LinkedinIcon>
            </div>
            
          </div>
        </div>

        {/* Professional Journey */}
        <div className="h-36"></div>
        <div className="flex flex-row w-full justify-center">
          <div className="flex flex-col w-auto py-4  h-96 self-center ">
            <div className="flex flex-row w-full content-start">
              <div className="w-6 py-4"></div>
              <h2 className="font-semibold text-3xl text-zinc-800 py-4">Professional Journey</h2>
              <div className="border-b-2 ml-10 w-44 h-9 border-zinc-400 "></div>
            </div>

            <div className="flex flex-row h-50">
              {/* Tab Selector */}
              <div className="flex flex-col font-semibold items-start justify-start">
                <button className="p-2"
                  onClick={()=>{
                    setTabSelected('Asistobe')
                  }}
                >Asistobe
                </button>
                <button className="p-2"
                onClick={()=>{
                  setTabSelected('University')
                }}
                >University
                </button>
              </div>
              {/* Content */}
              <div className="flex flex-col w-full h-full p-2 ml-6 max-w-sm">
                {tabSelected === 'Asistobe' ? 
                <>
                  <div className="font-semibold">
                    Fullstack Developer, Asistobe AS
                  </div>
                  <div className="text-sm">
                  Nov 2021 - Today 
                  </div>

                  <div className="mt-2">
                    Responsible for developing and maintaining a web tool for the
                    optimization of public transportation.
                  </div>
                </>
                : tabSelected === 'University' ?
                <>
                  <div className="font-semibold">
                    Master's degree, Computer Science and Engineering
                  </div>
                  <div className="text-sm">
                  Instituto Superior Técnico (2019 - 2021)
                  </div>

                  <div className="mt-2">
                    Cyber security and other stuff in Computer Scince
                  </div>

                  <div className="font-semibold mt-4">
                    Bachelor's degree, Computer Science and Engineering
                  </div>
                  <div className="text-sm">
                  Instituto Superior Técnico (2015 - 2019) 
                  </div>

                  <div className="mt-2">
                    Basic Computer Science
                  </div>
                </> 
              : null }

              </div>


            </div>
          </div>

        </div>




        {/* Text */}
        <div className="flex flex-col w-auto justify-between text-start bg-white">
          <div className="h-24"></div>
          <h2 className="font-semibold text-2xl text-zinc-800">Education:</h2>
          <div className="font-semibold">
            Bachelor's degree, Computer Science and Engineering
          </div>
          <div className="text-md">Instituto Superior Técnico (2015 - 2019)</div>

          <div className="font-semibold mt-2">
            Master's degree, Computer Science and Engineering
          </div>
          <div className="text-md">Instituto Superior Técnico (2019 - 2021)</div>

          <h2 className="mt-4 font-semibold text-xl">Experience:</h2>

          <div className="flex flex-col w-full">
            <div className="font-semibold">
              Fullstack Developer, Asistobe AS · Asistobe AS ( Nov 2021 - Today )
            </div>
            <div>
              Responsible for developing and maintaining a web tool for the
              optimization of public transportation.
            </div>
            <div className="flex flow-row flex-wrap">
              <div className="border-2 border-zinc-400 rounded-md p-1 text-xs mr-1">
                ReactJS
              </div>
              <div className="border-2 border-zinc-400 rounded-md p-1 text-xs mx-1">
                NodeJS
              </div>
              <div className="border-2 border-zinc-400 rounded-md p-1 text-xs mx-1">
                ExpressJS
              </div>
              <div className="border-2 border-zinc-400 rounded-md p-1 text-xs mx-1">
                MongoDB
              </div>
              <div className="border-2 border-zinc-400 rounded-md p-1 text-xs mx-1">
                Git
              </div>
              <div className="border-2 border-zinc-400 rounded-md p-1 text-xs mx-1">
                Docker
              </div>
              <div className="border-2 border-zinc-400 rounded-md p-1 text-xs mx-1">
                AWS
              </div>
              <div className="border-2 border-zinc-400 rounded-md p-1 text-xs mx-1">
                Tailwind
              </div>
              <div className="border-2 border-zinc-400 rounded-md p-1 text-xs mx-1">
                Javascript
              </div>
              <div className="border-2 border-zinc-400 rounded-md p-1 text-xs mx-1">
                Jest
              </div>
            </div>
          </div>

          <h2 className="font-semibold text-xl mt-4">Projects:</h2>
          <div className="flex flex-col w-full">
            <div>
              <div className="font-semibold">
                Master Thesis - Seamless Ticketing SDK 2021
              </div>
              <div>
                Developed an SDK that provides ticket validation and trip
                management functionalities for public transportation mobile
                aplications. The dissertation had as base tecnologies Bluetooth
                Low Energy and QR-Code for is base features and was built with
                Kotlin Multiplatform Mobile to be cross platform.
              </div>
              <div className="flex flow-row flex-wrap">
                <div className="border-2 border-zinc-400 rounded-md p-1 text-xs mr-1 min-w-max">
                  Kotlin Multiplatform Mobile
                </div>
                <div className="border-2 border-zinc-400 rounded-md p-1 text-xs mx-1">
                  SQLite
                </div>
                <div className="border-2 border-zinc-400 rounded-md p-1 text-xs mx-1">
                  Swift
                </div>
                <div className="border-2 border-zinc-400 rounded-md p-1 text-xs mx-1">
                  Java
                </div>
                <div className="border-2 border-zinc-400 rounded-md p-1 text-xs mx-1">
                  BLE
                </div>
                <div className="border-2 border-zinc-400 rounded-md p-1 text-xs mx-1">
                  QR-Code
                </div>
              </div>
            </div>

            <div className="my-2">
              <div className="font-semibold">
                Talent Pool Web App - Startup Project 2021
              </div>
              <div>
                Developed and sold a fullstack web application to ’Cross Border
                Talent’ (CBT). CBT opened a proposal for a solution to organise,
                within a central dashboard, their outsourcing candidates
                (including cv, DISC results, work-field, etc). Along with two
                University friends, delivered a concept solution and executed
                the solution in accordance to CBT requirements. With the help of
                the internal application, CBT now has a centralized candidate
                repository with graphics analytics that enable talent recruiters
                to match each candidate to a company’s demands.
              </div>
              <div className="flex flow-row flex-wrap ">
                <div className="border-2 border-zinc-400 rounded-md p-1 text-xs mr-1">
                  Javascript
                </div>
                <div className="border-2 border-zinc-400 rounded-md p-1 text-xs mx-1">
                  HTML
                </div>
                <div className="border-2 border-zinc-400 rounded-md p-1 text-xs mx-1">
                  CSS
                </div>
                <div className="border-2 border-zinc-400 rounded-md p-1 text-xs mx-1">
                  Firebase
                </div>
                <div className="border-2 border-zinc-400 rounded-md p-1 text-xs mx-1">
                  Firestore
                </div>
                <div className="border-2 border-zinc-400 rounded-md p-1 text-xs mx-1">
                  Authentication
                </div>
              </div>
            </div>
          </div>
          <div className="h-24"></div>
        </div>
        {/* End Curriculum */}
      </div>

      {/* Footer and Socials */}
      <div className="flex justify-end w-full z-10 ease-in duration-300 bg-white text-black p-4">
        <LinkedinIcon className="w-6 h-6 m-2"></LinkedinIcon>
        <InstagramIcon className="w-6 h-6 m-2"></InstagramIcon>
        <GithubIcon className="w-6 h-6 m-2"></GithubIcon>
      </div>
    </>
  );
}
