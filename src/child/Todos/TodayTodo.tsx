import { data } from "../../data"
import { useState } from "react"

export function TodayTodo({ data }: any) {
  const date = Date().split(" ")
  const today = `${date[0] + " " + +date[2] + " " + date[1]}`

  return (
    <>
      <div className="flex py-3 gap-3">
        <input type="checkbox" className="checkbox checkbox-xs mt-2 ml-0.5" />
        <div>
          <div className="title font-bold text-xl">{data.title}</div>
          <div className="text-xs text-gray-500 ">{data.deskripsi}</div>
        </div>
      </div>

      <div className="divider" />
    </>
  )
}
