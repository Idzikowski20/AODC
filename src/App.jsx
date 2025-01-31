import { BrowserRouter as Router,Routes,Route,useLocation } from "react-router-dom"
import JobPage from "./Pages/JobPage"
import ErrorPage from "./Pages/ErrorPage"
import HomePage from "./Pages/HomePage"
import PreLoader from "./Components/PreLoader/PreLoader"
import Realizations from "./Pages/Realizations"
import ConstructionDataCenter from "./Pages/ConstructionDataCenter"
import AuditDataCenter from "./Pages/AuditDataCenter"
import ServiceDataCenter from "./Pages/ServiceDataCenter"
import ProjectingDataCenter from "./Pages/ProjectingDataCenter"
function App() {
  return (
    <>
    <PreLoader />
   <Router>
      <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/Budowa-Data-Center" element={<ConstructionDataCenter/>}/>
          <Route path="/Audyt-Data-Center" element={<AuditDataCenter/>}/>
          <Route path="/Projektowanie-Data-Center" element={<ProjectingDataCenter/>}/>
          <Route path="/Serwis-Data-Center" element={<ServiceDataCenter/>}/>
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
