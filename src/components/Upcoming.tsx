import { ReactComponent as PlusIcon } from "../assets/icons/plus.svg"

export function Upcoming() {
  const date = Date().split(" ")
  const today = `${date[0] + " " + date[2] + " " + date[1]}`

  return (
    <div className="w-2/4 mx-auto my-20 ">
      <div className="flex gap-2">
        <div className="text-2xl font-bold">Upcoming</div>
        <div className="text-xs text-gray-500 mt-3">{today}</div>
      </div>
      <div className="divider" />

      <div className="flex gap-2 mt-5">
        <button className="btn btn-circle btn-xs btn-ghost text-red-600 hover:bg-red-600 hover:text-slate-50">
          <PlusIcon className="w-4 h-4" />
        </button>
        <div className="text-sm text-gray-500 pt-0.5">Add task</div>
      </div>
    </div>
  )
}
