import { skills } from "../skills";
import { Level } from "../types/types";

const Skills = () => {
  return (
    <div className="grid grid-cols-4 gap-2 scale-x-95 lg:grid-cols-6 border-2 border-black rounded-lg p-6 m-2 bg-slate-300 ">
      {skills.map((skill) => (
        <div key={skill.skill} className="p-2">
          <h2
            className="text-center hover:scale-110 hover:animate-spin  hover:grayscale-[50%] text-[18px]  p-2 gap-2 w-[176px] h-[64px] items-center rounded-md flex flex-row justify-between"
            style={{
              backgroundColor: `${skill.color}`,
              color: skill.color !== "black" ? "black" : "white",
              fontFamily: skill.level === Level.Advanced ? "monospace" : "",
              fontStyle: skill.level !== Level.Advanced ? "italic" : "",
            }}
          >
            <p
              style={{
                textDecoration:
                  skill.level === Level.Intermediate ? "underline" : "",
                filter: "unset",
              }}
            >
              {skill.skill}
            </p>
            {skill.level === Level.Advanced && (
              <p className="text-xl not-italic">😎</p>
            )}
            {skill.level === Level.Intermediate && (
              <p className="text-xl not-italic">🤓</p>
            )}
            {skill.level === Level.Beginner && (
              <p className="text-xl not-italic">✍</p>
            )}
          </h2>
        </div>
      ))}
    </div>
  );
};
export default Skills;
