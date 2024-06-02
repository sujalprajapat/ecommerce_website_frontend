import { Route, Routes } from "react-router-dom";
// import Second from "./Second";
import Home from "./Home";
import Single from "./Single";
import Cat from "./Cat";
import Cart from "./Cart";
function App() {
  return (
    <div>
      {/* <Cart /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:text" element={<Cat />} />
        <Route path=':id' element={<Single />} />
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  )



}
export default App;