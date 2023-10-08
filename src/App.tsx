import { Sidebar } from "./components/Sidebar"
import { Today } from "./components/Today"

import { useState } from "react"
import { Upcoming } from "./components/Upcoming"

import { ReactComponent as SidebarIcon } from "./assets/icons/sidebar.svg"

import "./index.css"

function App() {
  const [isActive, setIsActive] = useState<string>("today")
  const [showSidebar, setShowSidebar] = useState<boolean>(false)

  return (
    <div className="App flex">
      <button
        onClick={() => setShowSidebar(!showSidebar)}
        className="btn btn-square btn-xs bg-transparent border-none absolute top-7 left-5 text-red-200 "
      >
        <SidebarIcon className="w-5 h-5" />
      </button>
      <Sidebar
        handleIsActive={setIsActive}
        isActive={isActive}
        handleShowSidebar={setShowSidebar}
        showSidebar={showSidebar}
      />
      {isActive === "today" ? <Today /> : <Upcoming />}
    </div>
  )
}

export default App
