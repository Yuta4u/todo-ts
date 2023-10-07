import { useState } from "react"
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg"
import CalendarComponent from "../Others/Calendar"

type TempNewTodoProps = {
  title: string
  deskripsi: string
  date: string
}

export function ModalNewTodo() {
  const [tempNewTodo, setTempNewTodo] = useState<TempNewTodoProps>({
    title: "",
    deskripsi: "",
    date: "",
  })

  // on change function
  const handleOnChangeNewTodoDate = (value: Date) => {
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
    <dialog id="add-todo" className="modal">
      <div className="flex flex-col h-52 border-2 p-4 relative rounded-lg bg-white w-2/5">
        <input
          type="text"
          name="title"
          placeholder="Todo Name"
          className="input input-sm rounded-none p-0  font-semibold focus:outline-none"
          onChange={handleOnChangeNewTodo}
        />
        <textarea
          className="textarea textarea-ghost text-xs rounded-none p-0 focus:outline-none h-3/5 resize-none"
          name="deskripsi"
          placeholder="Deskripsi"
          onChange={handleOnChangeNewTodo}
        ></textarea>

        {/* BUTTON DATE  */}
        <div className="dropdown mb-9 mt-1.5">
          <div
            tabIndex={0}
            className="btn btn-xs rounded-md bg-white text-xs text-teal-600 border-2 normal-case"
          >
            {tempNewTodo.date ? tempNewTodo.date : "Due date"}
            <div
              tabIndex={0}
              className={`${!tempNewTodo.date ? "hidden" : ""}`}
            >
              <CloseIcon
                className="w-4 h-4 text-transparent border-none mt-0.5 -mx-1"
                onClick={() =>
                  setTempNewTodo({
                    ...tempNewTodo,
                    ["date"]: "",
                  })
                }
              />
            </div>
          </div>
          <div tabIndex={0} className="dropdown-content mt-5 absolute z-10">
            <CalendarComponent handleOnChange={handleOnChangeNewTodoDate} />
          </div>
        </div>

        <div className="divider absolute inset-x-0 bottom-4"></div>
        <div className="flex justify-end p-2 absolute inset-x-0 bottom-0">
          {/* BUTTON CANCEL  */}
          <form method="dialog">
            <button className="btn btn-xs rounded-md bg-hover mr-1 normal-case">
              Cancel
            </button>
          </form>

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
    </dialog>
  )
}
