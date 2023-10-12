export function UpcomingTodo() {
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

  return (
    <div className="mt-16">
      <div className="grid grid-cols-7">
        {upcomingDates.map((e) => (
          <button
            disabled={+e[1] < today}
            className={`btn btn-ghost grow rounded-none capitalize focus:border-b-red-500`}
          >
            <div
              className={`text-center tablet:text-xs laptop:text-sm font-medium  `}
            >
              <div className="text-gray-500 text-xs font-thin">{e[0]}</div>
              <div>{e[1]}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
