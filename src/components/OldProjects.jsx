import React from 'react'

const OldProjects = () => {
  return (
    <div>     {size.width > 700 ? (
        <div className="flex flex-col w-full justify-center">
          <div className="flex flex-col w-auto py-4 self-center ">
            {/* Section Header */}
            <div className="flex flex-row w-full content-start mb-12 items-center">
              <div className="w-6 py-4"></div>
              <h2 className="font-semibold text-3xl text-white py-4">
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
              <div className="flex flex-row w-full justify-end text-white font-semibold text-lg text-right p-2">
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
              <div className="flex flex-row w-full justify-start text-white font-semibold text-lg p-2">
                Talent Pool Web App - Startup Project
              </div>
              <div className="h-auto w-auto bg-gray-600 px-4 py-3 text-white text-base font-sm shadow-2xl rounded-sm ">
                {" "}
                Developed a fullstack web application to centralize a
                candidate repository with graphics analytics that enable
                talent recruiters to match each candidate to a company&apos;s
                demands.
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
      ) : (
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
                <div className="border-b-2 ml-10 w-full h-0 border-zinc-400 bg-red-500 mr-6"></div>
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
                  Developed a fullstack web application to centralize a
                  candidate repository with graphics analytics that enable
                  talent recruiters to match each candidate to a
                  company&apos;s demands.
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
      )}</div>
  )
}

export default OldProjects