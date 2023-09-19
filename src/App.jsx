import First from "./Home/First";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./LoginSignup/Login";




function App() {
  return (
   <>
  
   <BrowserRouter>
      <Routes>

      <Route path="/" element={ <First/>}></Route>

       <Route path="/login" element={<Login/>}></Route>




        </Routes>
     </BrowserRouter>  


  
 
   
   </>
  )
}

export default App