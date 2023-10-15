import Calendar from "react-calendar"
import "../../index.css"

type CalendarComponentProps = {
  handleOnChange: (value: string | undefined) => void
}

export const CalendarComponent = ({
  handleOnChange,
}: CalendarComponentProps) => {
  return (
    <Calendar
      className="calendar-container tablet:w-64 laptop:w-72"
      onChange={(value) => handleOnChange(value?.toString())}
    />
  )
}
