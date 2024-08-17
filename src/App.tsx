import { Outlet } from "react-router"
import AuthProvider from "./Contexts/Account"

function App() {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  )
}

export default App
