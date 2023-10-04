import { Sidebar } from "./components/Sidebar"
import { Today } from "./components/Today"

import { useState } from "react"
import { Upcoming } from "./components/Upcoming"

function App() {
  const [isActive, setIsActive] = useState<string>("today")

  return (
    <div className="App flex">
      <Sidebar handleIsActive={setIsActive} isActive={isActive} />
      {isActive === "today" ? <Today /> : <Upcoming />}
    </div>
  )
}

export default App
