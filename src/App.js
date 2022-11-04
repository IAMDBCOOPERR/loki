import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import MovieInfo from "./MovieInfo";
import Similar from "./Similar";
import Share from "./Share";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/title/:id" element={<MovieInfo />} />
        <Route path="/similar/:id" element={<Similar />} />
        <Route path="/share/:id" element={<Share />} />
      </Routes>
    </>
  );
};
export default App;
