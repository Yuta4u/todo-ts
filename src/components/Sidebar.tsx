import { ReactComponent as ArrowDown } from "../assets/icons/arrow-down.svg"
import { ReactComponent as PlusIcon } from "../assets/icons/plus.svg"

// CHILD
import { TodayBtn } from "../child/Button/TodayBtn"
import { UpcomingBtn } from "../child/Button/UpcomingBtn"
import { Dropdown } from "../child/Dropdown"

import { useState } from "react"

export function Sidebar() {
  const [isActive, setIsActive] = useState<string>("today")

  return (
    <div className="sidebar w-72 h-screen py-5 px-5 bg-primary">
      {/* PROFILE  */}
      <div
        className="sidebar-profile -mx-2 py-1 px-2 w-fit rounded text-gray-500 hover:bg-hover
        hover:text-black hover:cursor-grab"
      >
        <div className="dropdown dropdown-bottom">
          <div
            tabIndex={0}
            className="avatar placeholder active:cursor-grabbing"
          >
            <div className="bg-cyan-500 text-stone-50 rounded-full w-8">
              <span className="text-md font-semibold">J</span>
            </div>
            <div className="ml-2 ">Josh</div>
            <div className="pl-3">
              <ArrowDown className="w-3 h-3 font-bold" />
            </div>
          </div>
          <Dropdown />
        </div>
      </div>
      <button className="btn btn-sm mt-5 w-full rounded bg-red-500 text-slate-50 hover:bg-red-700 ">
        <PlusIcon className="w-4 h-4" />
        Add todo
      </button>

      {/* TODOS  */}
      <div className="todos">
        <TodayBtn isActiveProps={setIsActive} isActiveFlag={isActive} />
        <UpcomingBtn isActiveProps={setIsActive} isActiveFlag={isActive} />
      </div>
    </div>
  )
}
