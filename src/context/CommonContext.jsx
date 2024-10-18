import React, { useState, useEffect, useRef } from "react";

const CommonContextBase = React.createContext();

export default CommonContextBase;

const CommonContextProvider = ({ children }) => {
  const aboutMeRef = useRef(null);
  const executeScroll = () => aboutMeRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  const homeRef = useRef(null);
  const executeScrollHome = () => homeRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  const journeyRef = useRef(null);
  const executeScrollJourney = () => journeyRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  const projectsRef = useRef(null);
  const executeScrollProjects = () => projectsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <CommonContextBase.Provider
      value={{
        aboutMeRef,
        executeScroll,
        homeRef,
        executeScrollHome,
        journeyRef,
        executeScrollJourney,
        projectsRef,
        executeScrollProjects,
      }}
    >
      {children}
    </CommonContextBase.Provider>
  );
};

const CommonContextConsumer = CommonContextBase.Consumer;

export { CommonContextProvider, CommonContextConsumer };
