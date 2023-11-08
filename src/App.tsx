import { SidebarBtn } from "./child/Button/SidebarBtn"
import { Sidebar } from "./components/Sidebar"
import { Today } from "./components/Today"
import { Upcoming } from "./components/Upcoming"
import { useState, useEffect } from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { ToastContainer } from "react-toastify"
import { isMobile } from "react-device-detect"
import "react-toastify/dist/ReactToastify.css"
import "./index.css"

const queryClient = new QueryClient()

function App() {
  const [isActive, setIsActive] = useState<string>("today")
  const [showSidebar, setShowSidebar] = useState<boolean>(true)

  useEffect(() => {
    if (isMobile) {
      setShowSidebar(false)
    }
  }, [])

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
        {isActive === "today" ? (
          <Today />
        ) : (
          <Upcoming handleIsActive={setIsActive} />
        )}
        <ToastContainer />
      </div>
    </QueryClientProvider>
  )
}

export default App
