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
  return (
    <>
      <div className="flex py-3 gap-3" key={data.id}>
        <input type="checkbox" className="checkbox checkbox-xs mt-2 ml-0.5" />
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
