import { Sidebar } from "./components/Sidebar"
import { Today } from "./components/Today"

import { Upcoming } from "./components/Upcoming"

function App() {
  return (
    <div className="App flex">
      <Sidebar />
      <Today />
      {/* <Upcoming /> */}
    </div>
  )
}

export default App
