import { ReactComponent as SidebarIcon } from "../../assets/icons/sidebar.svg"

type SidebarBtnProps = {
  handleShowSidebar: React.Dispatch<React.SetStateAction<boolean>>
  showSidebar: boolean
}

export function SidebarBtn({
  handleShowSidebar,
  showSidebar,
}: SidebarBtnProps) {
  return (
    <button
      onClick={() => handleShowSidebar(!showSidebar)}
      className="btn btn-square btn-xs bg-transparent border-none absolute top-7 left-5 text-red-200 "
    >
      <SidebarIcon className="w-5 h-5" />
    </button>
  )
}
