import { useQuery, useQueryClient } from "react-query"
import { getTodos } from "../api"

type TodosProps = {
  id: number
  title: string
  deskripsi: string
  date: string
  check: boolean
}[]

export function Upcoming() {
  const queryClient = useQueryClient()
  const data: TodosProps | undefined = queryClient.getQueryData("todos")

  useQuery({
    queryFn: getTodos,
    queryKey: ["todos"],
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  })

  // today
  const date = Date().split(" ")
  const today = `${date[0] + " " + +date[2] + " " + date[1]}`

  // handle sorted function
  // ======================
  const tempData = data?.map((e) => {
    return {
      ...e,
      ["date"]: new Date(
        `${e.date.split(" ")[1]} ${e.date.split(" ")[2]}`
      ).getTime(),
    }
  })

  // handle fix day
  const fixDay = (dayStr: string) => {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    const indexDays = days.indexOf(dayStr)
    const day = days[indexDays - 1]
    return day
  }

  const tempSortedData = tempData?.sort((a, b) => a.date - b.date)
  const sortedData = tempSortedData?.map((e) => {
    const dateArr = new Date(e.date).toString().split(" ")
    const day = fixDay(dateArr[0])
    const date = dateArr[2]
    const month = dateArr[1]

    return {
      ...e,
      ["date"]: `${day} ${date} ${month}`,
    }
  })

  // ======================

  const upComingTodos = sortedData?.filter((e) => e.date != today)

  return (
    <div className="w-2/4 mx-auto my-20 ">
      <div className="flex gap-2">
        <div className="text-2xl font-bold">Upcoming</div>
        {upComingTodos?.map((e, i) => (
          <div key={i}>
            <div>{e.title}</div>
            <div>{e.deskripsi}</div>
            <div>{e.date}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
