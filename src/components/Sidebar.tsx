import { ReactComponent as ArrowDown } from "../assets/icons/arrow-down.svg"
import { ReactComponent as PlusIcon } from "../assets/icons/plus.svg"

export function Sidebar() {
  return (
    <div className="sidebar w-72 h-screen py-5 px-5 bg-white">
      {/* PROFILE  */}
      <div
        className="sidebar-profile -mx-2 py-1 px-2 w-fit rounded text-gray-600 hover:bg-profile-hover
       hover:text-black hover:cursor-grab"
      >
        {/* PROFILE AVATAR  */}
        <div className="avatar placeholder active:cursor-grabbing">
          <div className="bg-base-100 text-slate-50 rounded-full w-8">
            <span className="text-xs font-semibold">J</span>
          </div>
          {/* PROFILE NAME  */}
          <div className="ml-2 ">Josh</div>
          <div className="pl-3">
            <ArrowDown className="w-3 h-3 font-bold" />
          </div>
        </div>
      </div>
      <button className="btn btn-sm mt-7 w-full text-slate-50">
        <PlusIcon className="w-4 h-4" />
        Add todo
      </button>
    </div>
  )
}
