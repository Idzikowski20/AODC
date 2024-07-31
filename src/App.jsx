import { BrowserRouter as Router,Routes,Route,useLocation } from "react-router-dom"
import JobPage from "./Pages/JobPage"
import ErrorPage from "./Pages/ErrorPage"
import HomePage from "./Pages/HomePage"
// import Privacy from "./Pages/Privacy"
// import { useEffect } from "react"
import PreLoader from "./Components/PreLoader/PreLoader"
import Realizations from "./Pages/Realizations"

function App() {
  return (
    <>
    <PreLoader />
   <Router>
      <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/Kariera" element={<JobPage/>}/>
          <Route path="/Realizacje" element={<Realizations/>}/>
          {/* <Route path="/Polityka" element={<Privacy/>}/> */}
          <Route path="*" element={<ErrorPage/>}/>
      </Routes>
   </Router>
   </>
  )
}

export default App
