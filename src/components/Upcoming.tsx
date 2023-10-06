export function Upcoming() {
  const date = Date().split(" ")
  const today = `${date[0] + " " + date[2] + " " + date[1]}`

  return (
    <div className="w-2/4 mx-auto my-20 ">
      <div className="flex gap-2">
        <div className="text-2xl font-bold">Upcoming</div>
        <div className="text-xs text-gray-500 mt-3">{today}</div>
      </div>
      <div className="divider" />
    </div>
  )
}
