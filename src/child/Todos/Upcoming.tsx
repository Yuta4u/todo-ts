import { ReactComponent as UpcomingIcon } from "../../assets/icons/calendar.svg"

type UpcomingProps = {
  isActiveProps: React.Dispatch<React.SetStateAction<boolean>>
  isActiveFlag: boolean
}

export function Upcoming({ isActiveProps, isActiveFlag }: UpcomingProps) {
  return (
    <button
      onClick={() => isActiveProps(false)}
      className={`w-full flex p-2 rounded text-sm gap-2  ${
        !isActiveFlag ? "bg-red-200" : "hover:bg-hover"
      }`}
    >
      <UpcomingIcon className="w-5 h-5" />
      Upcoming
    </button>
  )
}
