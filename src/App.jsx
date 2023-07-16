import { Route, Routes } from "react-router-dom"
import Navbar from "./components/NavBar"
import Home from "./components/Home"
import AddForm from "./components/AddForm"
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/add' element ={<AddForm/>}  />
    </Routes>
    </>
  )
}

export default App
