export type Level = {
  level: "Advanced" | "Intermediate" | "Beginner";
};

export type Emoji = {
  emoji: "😎" | "✍" | "🤓";
};

export type Color = {
  color: "orange" | "yellow" | "blue" | "cyan" | "violet" | "black" | "pink";
};

export type Technology = {
  skill:
    "HTML-CSS"
    | "Javascript"
    | "Typescript"
    | "React"
    | "NextJs"
    | "Zustand"
    | "ReactQuery"
    | "Redux"
    | "Redux-Toolkit";
};

export type Skill = {
  id: number;
  skill: Technology["skill"];
  level: Level["level"];
  color: Color["color"];
  emoji: Emoji["emoji"];
};
