import SkillEditor from "./components/SkillEditor";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="flex flex-col">
      <div className="">
        <SkillEditor />
      </div>
      <div className=" pt-10">
        <Skills />
      </div>
      <div>{/* <div>footer</div> */}</div>
    </div>
  );
}

export default App;
