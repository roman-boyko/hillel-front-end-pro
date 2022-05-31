import {Route, Routes} from "react-router-dom";

import Home from "../../routes/Home";
import About from "../../routes/About";
import Error from "../../routes/Error";

const SimpleExample = () => {
  return (
    <>
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </>
  )
}

export default SimpleExample;
