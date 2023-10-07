import { useState } from "react"
import { Sidebar } from "./Sidebar"
import { ReactComponent as SidebarIcon } from "../assets/icons/sidebar.svg"

type SidebarProps = {
  handleIsActive: React.Dispatch<React.SetStateAction<string>>
  isActive: string
}

export function SidebarT({ handleIsActive, isActive }: SidebarProps) {
  return (
    <div className={`drawer absolute`}>
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
          Open drawer
        </label>
      </div>
      <div className="drawer-side" aria-label="close sidebar">
        <label
          htmlFor="my-drawer"
          //   aria-label="close sidebar"
          className="drawer-button absolute z-50"
        >
          <button className="btn btn-square btn-ghost btn-sm absolute top-6 right-5 text-zinc-400 hover:text-zinc-500">
            <SidebarIcon className="w-5 h-5" />
          </button>
        </label>

        <Sidebar handleIsActive={handleIsActive} isActive={isActive} />
      </div>
    </div>
  )
}
