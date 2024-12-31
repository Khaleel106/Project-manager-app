import { useRef } from "react";
import Modal from "./Modal.jsx";

import Input from "./Input.jsx";

export default function NewProject({ onAdd, onCancel }) {
  const modal = useRef();
  const title = useRef();
  const des = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDes = des.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDes.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDes,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops... looks like you entered you forgot to enter the values
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure to provide a valid for every input field
        </p>
      </Modal>
      <div className="w-[35rem] mt-12">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-700 hover:text-stone-950 hover:scale-105 transition-all"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="px-6 py-2 rounded-md bg-stone-700 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={des} label="Description" textarea />
          <Input type="date" ref={dueDate} label="Due Date" />
        </div>
      </div>
    </>
  );
}
