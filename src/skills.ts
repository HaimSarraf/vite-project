import { type Skill } from "./types/types";

// export const skills: Skill[] = [
//   { skill: "HTML-CSS", level: Level.Advanced, color: "orange" },
//   { skill: "Javascript", level: Level.Advanced, color: "yellow" },
//   { skill: "Typescript", level: Level.Advanced, color: "Blue" },
//   { skill: "React", level: Level.Advanced, color: "cyan" },
//   { skill: "zustand", level: Level.Intermediate, color: "violet" },
//   { skill: "NextJs", level: Level.Advanced, color: "black" },
//   { skill: "ReactQuery", level: Level.Beginner, color: "orange" },
//   { skill: "Redux", level: Level.Intermediate, color: "pink" },
//   { skill: "ReduxToolkit", level: Level.Intermediate, color: "yellow" },
// ];

export const getAllSkills = async () => {
  const response = await fetch("http://localhost:8000/skills");
  const skills: Skill[] = await response.json();

  return skills;
};

export const skills = await getAllSkills();
