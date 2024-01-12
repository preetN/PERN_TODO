import React, { useState } from "react";

function EditTodo({ item }) {
  const [modal, setModal] = useState(false);
  const [description, setDescription] = useState(item.description);
  const handleOnEdit = async (e) => {
    e.preventDefault();
    const { id } = item;
    const body = { description };
    try {
      const response = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      window.location = "/";
    } catch (error) {
      console.error(error.message);
    }
  };
  const handleOnClose = () => {
    setModal(false);
    setDescription(item.description);
  };
  return (
    <>
      <button
        className="text-gray-600 hover:text-green-500 "
        onClick={() => setModal(true)}
      >
        <i className="fa-regular fa-pen-to-square"></i>
      </button>
      {modal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-gray-500 bg-opacity-50">
            <div className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-1/3">
              <div className="flex justify-center w-full mb-5">
                <h1 className="font-semibold mb-2 w-11/12 text-orange-400 text-xl">
                  Update Task
                </h1>
                <button
                  className="text-orange-400 hover:text-red-500 "
                  onClick={handleOnClose}
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
              <form>
                <input
                  className="shadow border rounded w-full py-2 px-1 mb-4"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <button
                  className="mx-2 my-2 flex-none bg-orange-400 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded-full"
                  onClick={(e) => handleOnEdit(e)}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default EditTodo;
