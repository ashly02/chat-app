import "./style.scss"
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import {useContext} from "react"
import {AuthContext} from "./context/AuthContext"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
function App() {

  const {currentUser}=useContext(AuthContext)
  
  const ProtectedRoute=({children})=>{
    if(!currentUser){
      return <Navigate to="/login"/>
    }
    return children
  };
   
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Register/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="home" element={
          <ProtectedRoute>
            <Home/>
            </ProtectedRoute>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
