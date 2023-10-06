import { motion } from "framer-motion"
import Calendar from "react-calendar"
import "../../index.css"

interface CalendarComponentProps {
  handleOnChange: any
}

const CalendarComponent = ({ handleOnChange }: any) => {
  //   const { setDate, date, selectRange } = props
  return (
    <motion.div
      initial={{ x: 1000 }}
      animate={{ x: 0 }}
      transition={{ duration: 1, ease: "backOut", delay: 0.5 }}
      className="calendar-container tablet:w-72 absolute z-10"
    >
      <Calendar onChange={(e) => handleOnChange(e)} />
    </motion.div>
  )
}

export default CalendarComponent
