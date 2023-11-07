import { ReactComponent as ArrowDown } from "../assets/icons/arrow-down.svg"
import { ReactComponent as PlusIcon } from "../assets/icons/plus.svg"
import { ReactComponent as SidebarIcon } from "../assets/icons/sidebar.svg"

// CHILD
import { TodayBtn } from "../child/Button/TodayBtn"
import { UpcomingBtn } from "../child/Button/UpcomingBtn"
import { DropdownBtn } from "../child/Button/DropdownBtn"
import { ModalNewTodo } from "../child/Todos/ModalNewTodo"

declare global {
  interface HTMLElement {
    showModal: () => void
  }
}

type SidebarProps = {
  handleIsActive: React.Dispatch<React.SetStateAction<string>>
  handleShowSidebar: React.Dispatch<React.SetStateAction<boolean>>
  showSidebar: boolean
  isActive: string
}

export function Sidebar({
  handleIsActive,
  isActive,
  handleShowSidebar,
  showSidebar,
}: SidebarProps) {
  const handleShowModalAddTodo = () => {
    const modal = document.getElementById("add-todo")
    if (modal) {
      modal.showModal()
    }
  }

  const show = showSidebar ? "" : "hidden"

  return (
    <div
      className={`${
        showSidebar ? "w-72" : "w-0"
      } tablet:absolute laptop:static duration-300 h-screen z-50`}
    >
      <div
        className={`sidebar w-72 ${show} h-screen py-5 px-5 bg-red-50 fixed`}
      >
        <button
          onClick={() => handleShowSidebar(!showSidebar)}
          className="btn btn-square btn-xs absolute top-7 right-5 bg-transparent text-red-200 hover:text-black"
        >
          <SidebarIcon className="w-5 h-5" />
        </button>
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
                <span className="text-md font-semibold">Y</span>
              </div>
              <div className="ml-2 ">Yutad</div>
              <div className="pl-3">
                <ArrowDown className="w-3 h-3 font-bold" />
              </div>
            </div>
            <DropdownBtn />
          </div>
        </div>

        <button
          onClick={handleShowModalAddTodo}
          className={`btn btn-sm mt-5 w-full rounded bg-red-500 text-slate-50 hover:bg-red-700 normal-case`}
        >
          <PlusIcon className="w-4 h-4" />
          Add todo
        </button>
        <ModalNewTodo />

        {/* TODOS  */}
        <div className="todos">
          <TodayBtn handleIsActive={handleIsActive} isActive={isActive} />
          <UpcomingBtn handleIsActive={handleIsActive} isActive={isActive} />
        </div>
        <div className="text-xs absolute bottom-4 left-24 italic text-gray-500">
          Develop by Yuta4u
        </div>
      </div>
    </div>
  )
}
