import { useQuery, useQueryClient } from "react-query"
import { UpcomingTodo } from "../child/Todos/UpcomingTodo"
import { getTodos } from "../api"

type TodosProps = {
  id: number
  title: string
  deskripsi: string
  date: string
  check: number
}[]

type UpcomingProps = {
  handleIsActive: React.Dispatch<React.SetStateAction<string>>
}

export function Upcoming({ handleIsActive }: UpcomingProps) {
  const queryClient = useQueryClient()
  const data: TodosProps | undefined = queryClient.getQueryData("todos")

  useQuery({
    queryFn: getTodos,
    queryKey: ["todos"],
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  })

  // Month Year
  // ==========
  const monthYearFunc = () => {
    const date = Date().split(" ")
    const tempMonth = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ]
    const month = tempMonth.filter((e) => e.substring(0, 3) === date[1])
    return `${month} ${date[3]}`
  }

  const monthYear = monthYearFunc()
  // ==========

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
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    const indexDays = days.lastIndexOf(dayStr)
    const day = days[indexDays - 1]
    return day
  }

  const tempSortedData = tempData?.sort((a, b) => a.date - b.date)
  const upComingData = tempSortedData?.map((e) => {
    const dateArr = new Date(e.date).toString().split(" ")
    const day = fixDay(dateArr[0])
    const date =
      dateArr[2].length === 2 && dateArr[2][0] === "0"
        ? dateArr[2][1]
        : dateArr[2]
    const month = dateArr[1]

    return {
      ...e,
      ["date"]: `${day} ${date} ${month}`,
    }
  })
  // ======================

  return (
    <div className="my-14 mx-auto tablet:w-9/12 laptop:w-3/4 ">
      <div className="flex gap-2 flex-col">
        <div className="text-xl font-semibold mb-2 fixed">{monthYear}</div>
      </div>
      <UpcomingTodo todos={upComingData} handleIsActive={handleIsActive} />
    </div>
  )
}
