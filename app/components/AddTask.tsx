'use client'
// 'use client' is needed because it is a server component like all in app file. Server components don't work with useState so to fix this we use the command!

import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import { useState } from "react";

const AddTask = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div>
      <button onClick={() => setModalOpen(true)} className="btn btn-primary w-full">
        Add new task 
      <AiOutlinePlus 
        className="ml-2" 
        size={18} />
      </button>

      <Modal modalOpen={modalOpen} />
    </div>
  )
}

export default AddTask
