import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import MovieInfo from "./MovieInfo"
import Similar from "./Similar"
import Share from "./Share"
import Watch from "./Watch.js"
const App = () => {
 return (
  <>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/title/:id/:id" element={<MovieInfo />} />
    <Route path="/similar/:id/:id" element={<Similar />} />
    <Route path="/share/:id" element={<Share />} />
    <Route path="/tv/:id/:id" element={<MovieInfo />} />
    <Route path="/watch/:id" element={<Watch />} />
   </Routes>
  </>
 )
}
export default App
