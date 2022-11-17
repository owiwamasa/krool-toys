import React, { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { request } from "graphql-request";
import { ABOUT_PAGE, ALL_PROJECTS } from "../gql";

export const KroolContext = createContext();

export const KroolProvider = ({ children }) => {
  const [aboutUs, setAboutUs] = useState();
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState();
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const { id } = useParams();
  console.log(useParams);

  const prevProject = projects[Number(id) - 2] && projects[Number(id) - 2];
  const nextProject = projects[Number(id)] && projects[Number(id)];
  const fetchAboutUs = async () => {
    const { aboutUsPages } = await request({
      url: process.env.REACT_APP_HYGRAPH_URL,
      document: ABOUT_PAGE,
      requestHeaders: {
        Authorization: `Bearer ${process.env.REACT_APP_HYGRAPH_API_TOKEN}`,
      },
    });

    setAboutUs(aboutUsPages[0]);
  };

  const fetchProjects = async () => {
    const { projects } = await request({
      url: process.env.REACT_APP_HYGRAPH_URL,
      document: ALL_PROJECTS,
      requestHeaders: {
        Authorization: `Bearer ${process.env.REACT_APP_HYGRAPH_API_TOKEN}`,
      },
    });

    setProjects(projects);
    setSelectedProject(projects[0]);
  };

  useEffect(() => {
    fetchAboutUs();
    fetchProjects();
  }, []);

  return (
    <KroolContext.Provider
      value={{
        aboutUs,
        projects,
        selectedProject,
        selectedProjectIndex,
        setSelectedProject,
        setSelectedProjectIndex,
        project: projects[Number(id) - 1],
        prevProject,
        nextProject,
        id,
      }}
    >
      {children}
    </KroolContext.Provider>
  );
};
