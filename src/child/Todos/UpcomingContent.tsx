import { UpcomingTodoCard } from "./UpcomingTodoCard"

type todo = {
  id: number
  title: string
  deskripsi: string
  date: string
  check: number
}[]

type UpcomingTodoContentProps = {
  todos: todo[]
  dates: string[][]
  handleIsActive: React.Dispatch<React.SetStateAction<string>>
}

export function UpcomingTodoContent({
  todos,
  dates,
  handleIsActive,
}: UpcomingTodoContentProps) {
  const today: number = new Date().getDate()
  console.log(dates, "lel")

  const upcomingTodoDataFunc = () => {
    let res: todo[][] = []
    dates.map((date) => {
      const dateStr = date.join(" ")
      const filteredTodo = todos.filter(
        (todo) => todo[0].date.substring(0, 6) === dateStr
      )
      res.push(filteredTodo)
    })
    return res
  }

  const upcomingTodoData = upcomingTodoDataFunc()

  return (
    <div className="w-full h-96 flex gap-5 laptop:justify-center tablet:justify-normal">
      {dates.map((date, i) => (
        <div className="flex flex-col" key={`todos-${i}`}>
          <div className="flex">
            <div className="font-bold text-xs mb-2 ml-0.5">
              {date.join(" ")}{" "}
              {+date[1] === today
                ? "‧ Today"
                : +date[1] === today + 1
                ? "‧ Tomorrow"
                : ""}
            </div>
            <div className="font-extralight text-xs ml-1.5">
              {upcomingTodoData[i].length}
            </div>
          </div>
          <div className="w-64">
            {upcomingTodoData[i][0] ? (
              <div className="flex flex-col gap-5">
                {upcomingTodoData[i][0].map((todo, j) => (
                  <UpcomingTodoCard
                    todo={todo}
                    key={j}
                    handleIsActive={handleIsActive}
                  />
                ))}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
