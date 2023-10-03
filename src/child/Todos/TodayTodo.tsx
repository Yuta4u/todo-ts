import { useState } from "react"

export function TodayTodo() {
  const [done, setDone] = useState<boolean>(false)

  return (
    <>
      <div className="flex py-3 w-full gap-3">
        <input
          type="checkbox"
          className="checkbox checkbox-xs mt-1.5"
          disabled={done}
          checked={done}
          onClick={() => setDone(!done)}
        />
        <div>
          <div className="title font-bold text-xl">ini title</div>
          <div className="text-xs text-gray-500">ini deskripsi</div>
        </div>
      </div>
      <div className="divider" />
      <div className="flex py-3 w-full gap-3">
        <input type="checkbox" className="checkbox checkbox-xs mt-1.5" />
        <div>
          <div className="title font-bold text-xl">ini title</div>
          <div className="text-xs text-gray-500">ini deskripsi</div>
        </div>
      </div>
      <div className="divider" />
    </>
  )
}
