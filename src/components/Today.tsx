import { TodayTodo } from "../child/Todos/TodayTodo"
import { AddTodo } from "../child/Button/AddTodo"
import { NewTodo } from "../child/Todos/NewTodo"
import { useState } from "react"
import { useQuery, useQueryClient } from "react-query"

// api
import { getData } from "../api"

type TodosProps = {
  id: number
  title: string
  deskripsi: string
  date: string
  check: boolean
}

type TodosDataProps = {
  user: "string"
  todos: TodosProps[]
}[]

export function Today() {
  const queryClient = useQueryClient()
  const [nTodo, setNTodo] = useState<boolean>(false)

  // today
  const date = Date().split(" ")
  const today = `${date[0] + " " + +date[2] + " " + date[1]}`

  // filtered data
  const data: TodosDataProps | undefined = queryClient.getQueryData("todos")
  const filteredTodos = data && data[0].todos.filter((e) => e.date === today)

  // handle get data
  const { isLoading } = useQuery("todos", getData, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className="my-20 mx-auto tablet:w-9/12 laptop:w-2/4">
      <div className="flex gap-2 mb-7">
        <div className="text-2xl font-bold">Today</div>
        <div className="text-xs text-gray-500 mt-3">{today}</div>
      </div>
      {filteredTodos?.map((_) => (
        <TodayTodo key={_.id} data={_} />
      ))}
      {nTodo ? (
        <NewTodo handleNTodo={setNTodo} />
      ) : (
        <AddTodo handleNTodo={setNTodo} />
      )}
    </div>
  )
}
