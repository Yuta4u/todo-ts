type NewTodoProps = {
  handleNTodo: React.Dispatch<React.SetStateAction<boolean>>
}

export function NewTodo({ handleNTodo }: NewTodoProps) {
  return (
    <div className="w-full flex flex-col h-52 border-2 p-2 relative rounded-lg">
      <input
        type="text"
        placeholder="Todo Name"
        className="input input-sm rounded-none p-0  font-semibold focus:outline-none"
      />
      <input
        type="text"
        placeholder="Deskripsi"
        className="input input-xs text-xs rounded-none p-0 focus:outline-none"
      />
      <div className=" absolute bottom-3 right-3">
        <button
          className="btn btn-xs bg-slate-200 text-slate-600 mr-1"
          onClick={() => handleNTodo(false)}
        >
          cancel
        </button>
        <button className="btn btn-xs bg-red-500 text-slate-50 hover:bg-red-700 ">
          Add task
        </button>
      </div>
    </div>
  )
}
