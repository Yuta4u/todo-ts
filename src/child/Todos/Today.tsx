import { ReactComponent as TodayIcon } from "../../assets/icons/record.svg"

type TodayProps = {
  isActiveProps: React.Dispatch<React.SetStateAction<boolean>>
  isActiveFlag: boolean
}

export function Today({ isActiveProps, isActiveFlag }: TodayProps) {
  return (
    <button
      onClick={() => isActiveProps(true)}
      className={`w-full flex p-2 mt-5 rounded text-sm gap-2  ${
        isActiveFlag ? "bg-red-200" : "hover:bg-hover"
      }`}
    >
      <TodayIcon className="w-5 h-5" />
      Today
    </button>
  )
}
