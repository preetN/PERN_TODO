import React, { useState } from "react";

export default function InputTodo() {
  const [description, setDescription] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <>
      <h1 className="mb-32 font-semibold text-3xl tracking-tight bg-orange-400 text-white text-center py-4">
        PERN To Do
      </h1>
      <form className=" w-1/2 flex  mx-auto" onSubmit={handleOnSubmit}>
        <input
          className="flex-auto w-50 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button className="mx-2 flex-none bg-orange-400 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded-full">
          Add
        </button>
      </form>
    </>
  );
}
