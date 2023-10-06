import { ReactComponent as PlusIcon } from "../../assets/icons/plus.svg"

type NewTodoProps = {
  handleNTodo: React.Dispatch<React.SetStateAction<boolean>>
}

export function NewTodoBtn({ handleNTodo }: NewTodoProps) {
  // function
  return (
    <div className="flex gap-2 mt-5">
      <button
        onClick={() => handleNTodo(true)}
        className="btn btn-circle btn-xs btn-ghost text-red-600 hover:bg-red-600 hover:text-slate-50"
      >
        <PlusIcon className="w-4 h-4" />
      </button>
      <div className="text-sm text-gray-500 pt-0.5">Add task</div>
    </div>
  )
}
