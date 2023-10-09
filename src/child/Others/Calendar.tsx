import Calendar from "react-calendar"
import "../../index.css"

const CalendarComponent = ({ handleOnChange }: any) => {
  return (
    <Calendar
      className="calendar-container tablet:w-72"
      onChange={(value) => handleOnChange(value)}
    />
  )
}

export default CalendarComponent
