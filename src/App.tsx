import { Outlet } from "react-router"
import AuthProvider from "./Contexts/Account"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import VacanciesProvider from "./Contexts/VacanciesContext";

function App() {
  return (
    <AuthProvider>
      <VacanciesProvider>
        <ToastContainer autoClose={3000}/>
        <Outlet />
      </VacanciesProvider>
    </AuthProvider>
  )
}

export default App
