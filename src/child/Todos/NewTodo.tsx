import { useState } from "react"
import CalendarComponent from "../Others/Calendar"

type NewTodoProps = {
  handleNTodo: React.Dispatch<React.SetStateAction<boolean>>
}

type TempNewTodoProps = {
  title: string
  deskripsi: string
  // date: string
}

export function NewTodo({ handleNTodo }: NewTodoProps) {
  const [tempNewTodo, setTempNewTodo] = useState<TempNewTodoProps>({
    title: "",
    deskripsi: "",
    // date: "",
  })

  const [newTodoDate, setNewTodoDate] = useState<any>("")
  console.log(newTodoDate)

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

      <details className="dropdown mb-32">
        <summary className="btn">open or close</summary>
        <div className="mt-5">
          <CalendarComponent handleOnChange={setNewTodoDate} />
        </div>
        {/* <div className="shadow menu dropdown-content z-[1]rounded-md w-72">
        
        </div> */}
      </details>
      <div className="divider absolute inset-x-0 bottom-4"></div>
      <div className="flex justify-end p-2 absolute inset-x-0 bottom-0">
        <button
          className="btn btn-xs rounded-md bg-slate-200 text-slate-600 mr-1"
          onClick={() => handleNTodo(false)}
        >
          cancel
        </button>
        <button
          className="btn btn-xs rounded-md bg-red-500 text-slate-50 hover:bg-red-700"
          disabled={Object.values(tempNewTodo).includes("")}
          onClick={() => console.log("lel")}
        >
          Add task
        </button>
      </div>
    </div>
  )
}
