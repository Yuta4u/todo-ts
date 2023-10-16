import { ReactComponent as Setting } from "../../assets/icons/setting.svg"
import { ReactComponent as Github } from "../../assets/icons/github.svg"

export function DropdownBtn() {
  return (
    <ul
      tabIndex={0}
      className="dropdown-content z-[1] menu shadow-2xl bg-white rounded w-52 mt-2"
    >
      <li>
        <div
          onClick={() => alert("UPDATE SOON!")}
          className="text-black hover:bg-hover"
        >
          <Setting className="w-6 h-6" />
          Settings
        </div>
        <a href="https://github.com/Yuta4u">
          <div className="text-black hover:bg-hover flex">
            <Github className="w-6 h-6 mr-2" />
            Github
          </div>
        </a>
      </li>
    </ul>
  )
}
