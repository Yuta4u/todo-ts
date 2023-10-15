import { deleteTodos } from "../../api"
import { useMutation, useQueryClient } from "react-query"
import { ToastSuccess } from "../Others/Toast"

type todo = {
  id: number
  title: string
  deskripsi: string
  date: string
  check: boolean
}

type TodayTodoProps = {
  data: todo
}

export function TodayTodo({ data }: TodayTodoProps) {
  const queryClient = useQueryClient()

  // delete mutation
  const deleteTodosMutation = useMutation({
    mutationFn: deleteTodos,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] })
    },
  })

  // handle delete
  const handleDeleteTodos = (): void => {
    ToastSuccess()
    deleteTodosMutation.mutate(data.id)
  }

  return (
    <>
      <div className="flex py-3 gap-3" key={data.id}>
        <input
          type="checkbox"
          className="checkbox checkbox-xs mt-2 ml-0.5"
          onClick={handleDeleteTodos}
        />
        <div>
          <div className="title font-bold text-xl">{data.title}</div>
          <div className="text-xs text-gray-500 h-12 text-wrap whitespace-pre">
            {data.deskripsi}
          </div>
        </div>
      </div>
      <div className="divider" />
    </>
  )
}
