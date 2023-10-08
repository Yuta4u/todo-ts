import { motion } from "framer-motion"
import Calendar from "react-calendar"
import "../../index.css"

const CalendarComponent = ({ handleOnChange }: any) => {
  return (
    <motion.div
      initial={{ x: -500 }}
      animate={{ x: 0 }}
      transition={{ duration: 3, ease: "backOut", delay: 0.5 }}
      className="calendar-container tablet:w-72"
    >
      <Calendar onChange={(value) => handleOnChange(value)} />
    </motion.div>
  )
}

export default CalendarComponent
