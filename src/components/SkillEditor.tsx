import { useState } from "react";
import type { Color, Level, Technology } from "../types/types";
import SelectorOption from "./SelectorOption";

const SkillEditor = () => {
  const [checked, setChecked] = useState<boolean>(false);

  const allSkills: Technology["skill"][] = [
    "HTML-CSS",
    "Javascript",
    "NextJs",
    "React",
    "ReactQuery",
    "Redux",
    "Redux-Toolkit",
    "Typescript",
    "Zustand",
  ];
  const allLevels: Level["level"][] = ["Advanced", "Intermediate", "Beginner"];
  const allColors: Color["color"][] = [
    "black",
    "blue",
    "cyan",
    "orange",
    "pink",
    "violet",
    "yellow",
  ];

  return (
    <div className="p-6 m-2 border scale-x-95 border-blue-200 rounded-md bg-blue-300">
      <form className="flex flex-col gap-4">
        <label>Select A Skill</label>
        <select className="h-10 rounded-md items-center p-2 m-2">
          <option>---</option>
          {allSkills.map((skill) => (
            <SelectorOption option={skill} key={skill} />
          ))}
        </select>
        <label>Select Your Level</label>
        <select className="h-10 rounded-md items-center p-2 m-2">
          <option>---</option>
          {allLevels.map((level) => (
            <SelectorOption option={level} key={level} />
          ))}
        </select>
        <label>Select A Color</label>
        <select name="" id="" className="h-10 rounded-md items-center p-2 m-2">
          <option>---</option>
          {allColors.map((color) => (
            <SelectorOption option={color} key={color} color={color} />
          ))}
        </select>
        <div className="flex flex-row gap-2">
          <p>Are You Sure you want to save this skill ?</p>
          <input type="checkbox" onClick={() => setChecked((prev) => !prev)} />
        </div>
        {checked && (
          <button
            className=" m-2 p-2 bg-yellow-200 hover:bg-yellow-400 rounded-md h-10"
            disabled={!checked}
            onClick={() => {
              setChecked(true);
            }}
          >
            Save To Your Resume
          </button>
        )}
      </form>
    </div>
  );
};
export default SkillEditor;
