import image from "../assets/no-projects.png";
import Button from "./Button.jsx";

export default function NoProjectSelected({onStartAddProject}) {
  return (
    <div className="mt-52  text-center w-2/3">
      <img src={image} alt="notepad" className="w-16 object-contain mx-auto" />
      <h2 className="text-xl font-bold text-stone-500">No projects selected</h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one
      </p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>Create new project</Button>
      </p>
    </div>
  );
}
