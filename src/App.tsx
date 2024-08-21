import { Outlet } from "react-router"
import AuthProvider from "./Contexts/Account"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <AuthProvider>
      <ToastContainer autoClose={3000}/>
      <Outlet />
    </AuthProvider>
  )
}

export default App
