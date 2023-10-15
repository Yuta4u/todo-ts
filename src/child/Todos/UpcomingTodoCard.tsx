import { useQueryClient, useMutation } from "react-query"
import { deleteTodos } from "../../api"
import { ToastSuccess } from "../Others/Toast"

type todoProps = {
  todo: {
    id: number
    title: string
    deskripsi: string
    date: string
    check: boolean
  }
}

export function UpcomingTodoCard({ todo }: todoProps) {
  const queryClient = useQueryClient()

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
  }

  return (
    <div className="h-20 border-2 rounded-lg hover:shadow-sm">
      <div className="m-2">
        <div className="flex items-center">
          <input
            type="checkbox"
            className="checkbox checkbox-xs border-2 border-blue-700 bg-hover"
            onClick={() => handleDeleteTodos()}
          />
          <div className="font-semibold text-sm ml-2 ">{todo.title}</div>
        </div>
      </div>
    </div>
  )
}
