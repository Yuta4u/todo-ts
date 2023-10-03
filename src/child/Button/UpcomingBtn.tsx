import { ReactComponent as UpcomingIcon } from "../../assets/icons/calendar.svg"

type UpcomingBtnProps = {
  isActiveProps: React.Dispatch<React.SetStateAction<string>>
  isActiveFlag: string
}

export function UpcomingBtn({ isActiveProps, isActiveFlag }: UpcomingBtnProps) {
  return (
    <button
      onClick={() => isActiveProps("upcoming")}
      className={`w-full flex p-2 rounded text-sm gap-2  ${
        isActiveFlag === "upcoming" ? "bg-red-200" : "hover:bg-hover"
      }`}
    >
      <UpcomingIcon className="w-5 h-5" />
      Upcoming
    </button>
  )
}
