import { ReactComponent as TodayIcon } from "../../assets/icons/record.svg"

type TodayBtnProps = {
  isActiveProps: React.Dispatch<React.SetStateAction<string>>
  isActiveFlag: string
}

export function TodayBtn({ isActiveProps, isActiveFlag }: TodayBtnProps) {
  return (
    <button
      onClick={() => isActiveProps("today")}
      className={`w-full flex p-2 mt-5 rounded text-sm gap-2  ${
        isActiveFlag === "today" ? "bg-red-200" : "hover:bg-hover"
      }`}
    >
      <TodayIcon className="w-5 h-5" />
      Today
    </button>
  )
}
