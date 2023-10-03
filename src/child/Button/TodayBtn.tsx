import { ReactComponent as TodayIcon } from "../../assets/icons/record.svg"

type TodayBtnProps = {
  handleIsActive: React.Dispatch<React.SetStateAction<string>>
  isActive: string
}

export function TodayBtn({ handleIsActive, isActive }: TodayBtnProps) {
  return (
    <button
      onClick={() => handleIsActive("today")}
      className={`w-full flex p-2 mt-5 rounded text-sm gap-2  ${
        isActive === "today" ? "bg-red-200" : "hover:bg-hover"
      }`}
    >
      <TodayIcon className="w-5 h-5" />
      Today
    </button>
  )
}
