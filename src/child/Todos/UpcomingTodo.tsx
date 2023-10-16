import { useState } from "react"
import { UpcomingTodoContent } from "./UpcomingContent"
import { UpcomingTodoCard } from "./UpcomingTodoCard"

type todos = {
  date: string
  id: number
  title: string
  deskripsi: string
  check: number
}

type upcomingTodoProps = {
  todos: todos[] | undefined
}

export function UpcomingTodo({ todos }: upcomingTodoProps) {
  const [activeBtn, setActiveBtn] = useState("")
  const today: number = new Date().getDate()

  // handle upcoming dates
  // =====================
  function getPreviousDate(num: number) {
    var today = new Date()
    var previousDate = new Date(today.getTime() + 24 * num * 60 * 60 * 1000)
    return previousDate
  }

  const upcomingDateFunc = () => {
    const arr = []
    for (let i = -3; i < 4; i++) {
      const date = getPreviousDate(i).toString().split(" ")
      arr.push([`${date[0]}`, `${+date[2]}`])
    }
    return arr
  }
  const upcomingDates = upcomingDateFunc()
  const upcomingContent = upcomingDates.slice(3, upcomingDates.length)

  // =====================

  // todos data
  const handleTodosData = (todos: todos[] | undefined) => {
    let res: todos[][] = []
    let temp: todos[] = []
    todos?.map((e, i) => {
      const last = todos.length - 1 === i
      if (temp.length === 0) {
        temp.push(e)
      } else {
        if (temp[0].date === e.date) {
          temp.push(e)
        } else {
          res.push(temp)
          temp = [e]
        }
      }
      // if last data
      if (last) {
        res.push(temp)
      }
    })
    return res
  }

  const todosData = handleTodosData(todos)

  return (
    <>
      <div className="mt-16">
        <div className="grid grid-cols-7 mb-10 fixed w-9/12">
          {upcomingDates.map((e, i) => (
            <button
              key={i}
              value={+e[1]}
              onClick={(e: any) => setActiveBtn(e.currentTarget.value)}
              disabled={+e[1] < today}
              className={`btn btn-ghost rounded-none capitalize  ${
                e[1] === activeBtn ? "border-b-red-500 border-b-2" : ""
              } `}
            >
              <div
                className={`text-center tablet:text-xs laptop:text-sm font-medium  `}
              >
                <div className="text-gray-500 text-xs font-thin">{e[0]}</div>
                <div
                  className={`font-semibold ${
                    +e[1] === today ? "text-red-500" : ""
                  }`}
                >
                  {e[1]}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className="flex overflow-auto pt-16 gap-10 scrollbar-hide whitespace-nowrap">
        <UpcomingTodoContent todos={todosData} dates={upcomingContent} />
      </div>
    </>
  )
}
