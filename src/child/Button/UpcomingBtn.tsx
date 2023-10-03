import { ReactComponent as UpcomingIcon } from "../../assets/icons/calendar.svg"

type UpcomingBtnProps = {
  handleIsActive: React.Dispatch<React.SetStateAction<string>>
  isActive: string
}

export function UpcomingBtn({ handleIsActive, isActive }: UpcomingBtnProps) {
  return (
    <button
      onClick={() => handleIsActive("upcoming")}
      className={`w-full flex p-2 rounded text-sm gap-2  ${
        isActive === "upcoming" ? "bg-red-200" : "hover:bg-hover"
      }`}
    >
      <UpcomingIcon className="w-5 h-5" />
      Upcoming
    </button>
  )
}
