import { SidebarBtn } from "./child/Button/SidebarBtn"
import { Sidebar } from "./components/Sidebar"
import { Today } from "./components/Today"
import { Upcoming } from "./components/Upcoming"
import { useState } from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import "./index.css"

const queryClient = new QueryClient()

function App() {
  const [isActive, setIsActive] = useState<string>("today")
  const [showSidebar, setShowSidebar] = useState<boolean>(true)

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App flex">
        <SidebarBtn
          handleShowSidebar={setShowSidebar}
          showSidebar={showSidebar}
        />
        <Sidebar
          handleIsActive={setIsActive}
          isActive={isActive}
          handleShowSidebar={setShowSidebar}
          showSidebar={showSidebar}
        />
        {isActive === "today" ? <Today /> : <Upcoming />}
      </div>
    </QueryClientProvider>
  )
}

export default App
