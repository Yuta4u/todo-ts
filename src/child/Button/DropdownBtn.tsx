import { ReactComponent as Setting } from "../../assets/icons/setting.svg"

export function DropdownBtn() {
  return (
    <ul
      tabIndex={0}
      className="dropdown-content z-[1] menu shadow-2xl bg-white rounded w-52 mt-2"
    >
      <li>
        <div
          onClick={() => alert("hello")}
          className="text-black hover:bg-hover"
        >
          <Setting className="w-6 h-6" />
          Settings
        </div>
      </li>
    </ul>
  )
}
