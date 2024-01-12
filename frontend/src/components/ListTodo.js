import React, { useEffect, useState } from "react";
import EditTodo from "./EditTodo";

function ListTodo() {
  const [list, setList] = useState([]);
  const getList = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos");
      const jsonData = await response.json();
      setList(jsonData);
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleOnDelete = async (item) => {
    const { id } = item;
    try {
      const response = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      });

      setList(list.filter((item) => item.id !== id));
      console.log("deleted");
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getList();
  }, []);
  return (
    <div>
      <table className="table-auto mx-auto w-1/2 my-10 text-center">
        <thead className="bg-orange-400 text-white">
          <tr>
            <th className="font-semibold px-4 py-2">Description</th>
            <th className="font-semibold px-4 py-2">Edit</th>
            <th className=" font-semibold px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <tr key={item.id}>
              <td className="border-b-2 px-4 py-2">{item.description}</td>
              <td className="border-b-2 px-4 py-2">
                <EditTodo item={item} />
              </td>

              <td className="border-b-2 px-4 py-2 text-orange-400 hover:text-red-500">
                <button onClick={() => handleOnDelete(item)}>
                  <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListTodo;
