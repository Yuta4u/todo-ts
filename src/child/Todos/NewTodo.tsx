import { useState } from "react"
import CalendarComponent from "../Others/Calendar"

type NewTodoProps = {
  handleNTodo: React.Dispatch<React.SetStateAction<boolean>>
}

type TempNewTodoProps = {
  title: string
  deskripsi: string
  date: string
}

export function NewTodo({ handleNTodo }: NewTodoProps) {
  const [tempNewTodo, setTempNewTodo] = useState<TempNewTodoProps>({
    title: "",
    deskripsi: "",
    date: "",
  })

  // on submit function

  // on change function
  const handleOnChangeNewTodoDate = (value: string) => {
    const date = value?.toString().substring(0, 10).split(" ")
    const formatDate = date && `${date[0] + " " + +date[2] + " " + date[1]}`
    setTempNewTodo({
      ...tempNewTodo,
      ["date"]: formatDate && formatDate,
    })
  }

  const handleOnChangeNewTodo = (
    event:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target
    setTempNewTodo({
      ...tempNewTodo,
      [name]: value,
    })
  }

  return (
    <div className="w-full flex flex-col h-52 border-2 p-4 relative rounded-lg">
      <input
        type="text"
        name="title"
        placeholder="Todo Name"
        className="input input-sm rounded-none p-0  font-semibold focus:outline-none"
        onChange={handleOnChangeNewTodo}
      />
      <textarea
        className="textarea textarea-ghost text-xs rounded-none p-0 focus:outline-none h-3/5 scroll-m-96 overflow-hidden h"
        name="deskripsi"
        placeholder="Deskripsi"
        onChange={handleOnChangeNewTodo}
      ></textarea>

      {/* BUTTON DATE  */}
      <div className="dropdown mb-9">
        <div
          tabIndex={0}
          className="btn btn-xs rounded-md bg-white text-xs text-teal-600 border-2 normal-case"
        >
          {tempNewTodo.date ? tempNewTodo.date : "Due date"}
        </div>
        <div tabIndex={0} className="dropdown-content mt-5 absolute z-10">
          <CalendarComponent handleOnChange={handleOnChangeNewTodoDate} />
        </div>
      </div>

      <div className="divider absolute inset-x-0 bottom-4"></div>
      <div className="flex justify-end p-2 absolute inset-x-0 bottom-0">
        {/* BUTTON CANCEL  */}
        <button
          className="btn btn-xs rounded-md bg-hover mr-1 normal-case"
          onClick={() => handleNTodo(false)}
        >
          Cancel
        </button>

        {/*  BUTTON ADD TODO  */}
        <button
          className="btn btn-xs rounded-md bg-red-500 text-slate-50 hover:bg-red-700 normal-case"
          disabled={Object.values(tempNewTodo).includes("")}
          onClick={() => console.log(tempNewTodo)}
        >
          Add todo
        </button>
      </div>
    </div>
  )
}
