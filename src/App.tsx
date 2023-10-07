import { Sidebar } from "./components/Sidebar"
import { SidebarT } from "./components/SidebarT"
import { Today } from "./components/Today"

import { useState } from "react"
import { Upcoming } from "./components/Upcoming"

import "./index.css"

function App() {
  const [isActive, setIsActive] = useState<string>("today")

  {
    /* <Sidebar handleIsActive={setIsActive} isActive={isActive} /> */
  }
  return (
    <div className="App flex">
      <SidebarT handleIsActive={setIsActive} isActive={isActive} />

      {isActive === "today" ? <Today /> : <Upcoming />}
    </div>
  )
}

export default App
