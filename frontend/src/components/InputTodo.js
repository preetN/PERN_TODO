import React from "react";

export default function InputTodo() {
  return (
    <>
      <h1 className="mb-32 font-semibold text-3xl tracking-tight bg-orange-400 text-white text-center py-4">
        PERN To Do
      </h1>
      <form className=" w-1/2 flex  mx-auto">
        <input
          class="flex-auto w-50 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="description"
          type="text"
          placeholder="Description"
        />

        <button className="mx-2 flex-none bg-orange-400 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded-full">
          Add
        </button>
      </form>
    </>
  );
}
