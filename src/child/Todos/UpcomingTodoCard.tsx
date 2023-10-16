import { useQueryClient, useMutation } from "react-query"
import { deleteTodos } from "../../api"
import { ToastSuccess } from "../Others/Toast"
import { useState } from "react"

type todoProps = {
  todo: {
    id: number
    title: string
    deskripsi: string
    date: string
    check: number
  }
  handleIsActive: React.Dispatch<React.SetStateAction<string>>
}

export function UpcomingTodoCard({ todo, handleIsActive }: todoProps) {
  const queryClient = useQueryClient()
  const [selectedOption, setSelectedOption] = useState<string>("")

  // handle onclick today todo
  const today: number = new Date().getDate()
  const handleOnClickTodayTodo = () => {
    today === +todo.date.split(" ")[1] && handleIsActive("today")
  }

  // delete mutation
  const deleteTodosMutation = useMutation({
    mutationFn: deleteTodos,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] })
    },
  })

  // handle delete
  const handleDeleteTodos = () => {
    ToastSuccess()
    deleteTodosMutation.mutate(todo.id)
    setSelectedOption(`${todo.id}`)
  }

  return (
    <div
      className="h-20 border-2 rounded-lg hover:shadow-md hover:cursor-pointer"
      onClick={handleOnClickTodayTodo}
    >
      <div className="m-2">
        <div className="flex items-center">
          <input
            type="radio"
            value={`${todo.id}`}
            checked={selectedOption === `${todo.id}`}
            onChange={handleDeleteTodos}
            className="radio radio-xs border-2 border-blue-700 bg-hover"
          />
          <div className="font-semibold text-sm ml-2 ">{todo.title}</div>
        </div>
      </div>
    </div>
  )
}
