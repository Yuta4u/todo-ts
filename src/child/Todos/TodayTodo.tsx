import { data } from "../../data"
import { useState } from "react"

type TodayTodoDataProps = {
  title: string
  deskripsi: string
  date: string
}

export function TodayTodo() {
  const date = Date().split(" ")
  const today = `${date[0] + " " + +date[2] + " " + date[1]}`
  let [tempData, setTempData] = useState<any>(data)

  return (
    <>
      {tempData.map((e: TodayTodoDataProps, i: number) =>
        e.date === today ? (
          <div key={i}>
            <div className="flex py-3 gap-3">
              <input
                type="checkbox"
                onClick={() => setTempData([])}
                className="checkbox checkbox-xs mt-2 ml-0.5"
              />
              <div>
                <div className="title font-bold text-xl">{e.title}</div>
                <div className="text-xs text-gray-500 ">{e.deskripsi}</div>
              </div>
            </div>

            <div className="divider" />
          </div>
        ) : (
          ""
        )
      )}
    </>
  )
}
