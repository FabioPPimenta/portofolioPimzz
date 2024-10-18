import React from "react";

const Projects = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap w-full mb-20">
          <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
              Projects
            </h1>
            <div class="h-1 w-20 bg-chili_red-500 rounded"></div>
          </div>
          <p class="lg:w-1/2 w-full leading-relaxed text-gray-400">
            {/* Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them man bun deep jianbing selfies heirloom prism
            food truck ugh squid celiac humblebrag. */}
          </p>
        </div>
        <div class="flex flex-wrap -m-4">
          <a
            class="xl:w-1/4 md:w-1/2 p-4"
            href="https://masti-git-main-fabioppimentas-projects.vercel.app/about"
          >
            <div class="bg-gray-100 p-6 rounded-lg transition ease-in-out delay-75 hover:scale-105 duration-300">
              <img
                class="h-40 rounded w-full object-contain object-center mb-6 bg-white p-3"
                src="/Masti_logo-completo-vertical_cores.png"
                alt="content"
              />
              <h3 class="tracking-widest text-chili_red-500 text-xs font-medium title-font">
                Freelancing Project
              </h3>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                MASTI
              </h2>
              <p class="leading-relaxed text-sm min-h-40">
                Designed and developed a web application for the University of
                Architecture of Lisbon to showcase accessibility metrics across
                more than 200 European cities, providing a comprehensive
                platform for urban analysis.
              </p>
            </div>
          </a>
          <a
            class="xl:w-1/4 md:w-1/2 p-4"
            href="https://www.restaurantemayura.com/"
          >
            <div class="bg-gray-100 p-6 rounded-lg transition ease-in-out delay-75 hover:scale-105 duration-300">
              <img
                class="h-40 rounded w-full object-contain object-center mb-6 bg-white"
                src="/mayura_logo.jpg"
                alt="content"
              />
              <h3 class="tracking-widest text-chili_red-500 text-xs font-medium title-font">
                Freelancing Project
              </h3>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                Mayura
              </h2>
              <p class="leading-relaxed text-sm min-h-40">
                Designed and developed a responsive website for Mayura, a local
                restaurant, to enhance its online presence and streamline
                customer interactions.
              </p>
            </div>
          </a>
          <a
            class="xl:w-1/4 md:w-1/2 p-4"
            href="https://scholar.tecnico.ulisboa.pt/records/wlv3WvjZflM9dET0oOCKg27vqEKCr8YW5jB4"
          >
            <div class="bg-gray-100 p-6 rounded-lg transition ease-in-out delay-75 hover:scale-105 duration-300">
              <img
                class="h-40 rounded w-full object-cover object-center mb-6"
                src="/card4B.png"
                alt="content"
              />
              <h3 class="tracking-widest text-chili_red-500 text-xs font-medium title-font">
                Thesis
              </h3>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                Seamless Ticketing SDK
              </h2>
              <p class="leading-relaxed text-sm min-h-40">
                Developed an SDK that provides ticket validation and trip
                management functionalities for public transportation mobile
                aplications.
              </p>
            </div>
          </a>
          <a class="xl:w-1/4 md:w-1/2 p-4" href="https://www.cbtalents.com/">
            <div class="bg-gray-100 p-6 rounded-lg transition ease-in-out delay-75 hover:scale-105 duration-300">
              <img
                class="h-40 rounded w-full object-contain object-center mb-6 bg-white"
                src="/CBT.png"
                alt="content"
              />
              <h3 class="tracking-widest text-chili_red-500 text-xs font-medium title-font">
                Freelancing Project
              </h3>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                Talent Pool Web App
              </h2>
              <p class="leading-relaxed text-sm min-h-40">
                Developed a fullstack web application to centralize a candidate
                repository with graphics analytics that enable talent recruiters
                to match each candidate to a company&apos;s demands.
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
