import { Box } from "@mui/material"
import Sidebar from "./components/Sidebar"
import MainContent from "./components/MainContent"

function App() {
  return (
    <Box sx={{ display: "flex", height: "100vh", bgcolor: "#f8f9fa" }}>
      <Sidebar />
      <MainContent />
    </Box>
  )
}

export default App
