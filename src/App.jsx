import First from "./Home/First";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./LoginSignup/Login";
import Details from "./Details/Details";
import Details2 from "./Details/Details2";




function App() {
  return (
   <>
  
   <BrowserRouter>
      <Routes>

      <Route path="/" element={ <First/>}></Route>

       <Route path="/login" element={<Login/>}></Route>
       <Route path="/UserDetails" element={<Details/>}></Route> 
       <Route path="/deta" element={<Details2/>}></Route>






        </Routes>
     </BrowserRouter>  


  
 
   
   </>
  )
}

export default App