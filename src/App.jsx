import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JobPage from "./Pages/JobPage";
import ErrorPage from "./Pages/ErrorPage";
import HomePage from "./Pages/HomePage";
import PreLoader from "./Components/PreLoader/PreLoader";
import Realizations from "./Pages/Realizations";
import ConstructionDataCenter from "./Pages/ConstructionDataCenter";
import AuditDataCenter from "./Pages/AuditDataCenter";
import ServiceDataCenter from "./Pages/ServiceDataCenter";
import ProjectingDataCenter from "./Pages/ProjectingDataCenter";
import DataCenterContener from "./Pages/DataCenterContener";
import Blogpage from "./Pages/Blogpage";
import CreatePostPage from "./Pages/CreatePostPage";
import DashboardPage from "./Pages/DashboardPage";
import BlogDetail from "./Pages/BlogDetailPage";
import EditPostPage from "./Pages/EditPostPage";
import LoginPage from "./Pages/LoginPage";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute"; // Import PrivateRoute
import { auth } from "./config/firebaseConfig";

function App() {
  console.log("Firebase auth:", auth);
  
  return (
    <>
      <img className="herobg" src="/assets/herobg.png" alt="background" />
      <PreLoader />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Budowa-Data-Center" element={<ConstructionDataCenter />} />
          <Route path="/Audyt-Data-Center" element={<AuditDataCenter />} />
          <Route path="/Projektowanie-Data-Center" element={<ProjectingDataCenter />} />
          <Route path="/Serwerownia-kontenerowa" element={<DataCenterContener />} />
          <Route path="/Serwis-Data-Center" element={<ServiceDataCenter />} />
          <Route path="/Kariera" element={<JobPage />} />
          <Route path="/Blog" element={<Blogpage />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/Realizacje" element={<Realizations />} />
          
          {/* 🔐 Zabezpieczone strony */}
          <Route path="/CreatePost" element={<PrivateRoute><CreatePostPage /></PrivateRoute>} />
          <Route path="/AdminPanel" element={<PrivateRoute><DashboardPage /></PrivateRoute>} />
          <Route path="/AdminPanel/edit/:id" element={<PrivateRoute><EditPostPage /></PrivateRoute>} />
          
          {/* 🔓 Publiczne strony */}
          <Route path="/Login" element={<LoginPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
