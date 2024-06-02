import Category from "./Category"
import Home from "./Home";
import Single from "./Single";
import Cat from "./Cat";
import { Link, Routes, Route } from "react-router-dom";
function Second() {
return(
  <Routes>
  <Route path=':id' element={<Cat />}/>
</Routes>
)
}

export default Second;
