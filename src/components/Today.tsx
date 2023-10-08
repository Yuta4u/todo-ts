import { TodayTodo } from "../child/Todos/TodayTodo"
import { AddTodo } from "../child/Button/AddTodo"
import { NewTodo } from "../child/Todos/NewTodo"
import { useState } from "react"

export function Today() {
  const [nTodo, setNTodo] = useState<boolean>(false)
  const date = Date().split(" ")
  const today = `${date[0] + " " + date[2] + " " + date[1]}`

  return (
    <div className="my-20 mx-auto tablet:w-9/12 laptop:w-2/4">
      <div className="flex gap-2 mb-7">
        <div className="text-2xl font-bold">Today</div>
        <div className="text-xs text-gray-500 mt-3">{today}</div>
      </div>
      <TodayTodo />
      {nTodo ? (
        <NewTodo handleNTodo={setNTodo} />
      ) : (
        <AddTodo handleNTodo={setNTodo} />
      )}
    </div>
  )
}
