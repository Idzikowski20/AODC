import { BrowserRouter as Router,Routes,Route,useLocation } from "react-router-dom"
import HomePageCarrier from "./Pages/HomePageCarrier"
import JobPage from "./Pages/JobPage"
import AboutPage from "./Pages/AboutPage"
import ErrorPage from "./Pages/ErrorPage"
import ContactPage from "./Pages/ContactPage"
import HomePage from "./Pages/HomePage"
import JobListPage from "./Pages/JobListPage"
import { useEffect } from "react"
import PreLoader from "./Components/PreLoader/PreLoader"
import CookieConsent from "./Components/CookieConsent/CookieConsent"
import { useCookies } from 'react-cookie';
import Realizations from "./Pages/Realizations"

function App() {
  const [cookies] = useCookies(["cookieConsent"]);

  const ScrollToTop = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  };
  return (
    <>
    <PreLoader />
    {!cookies.cookieConsent && <CookieConsent />}
   <Router>
    <ScrollToTop/>
      <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/kariera" element={<HomePageCarrier/>}/>
          <Route path="/jobPage" element={<JobPage/>}/>
          <Route path="/jobListPage" element={<JobListPage/>}/>
          <Route path="/aboutPage" element={<AboutPage/>}/>
          <Route path="/contactPage" element={<ContactPage/>}/>
          <Route path="/Realizacje" element={<Realizations/>}/>
          <Route path="*" element={<ErrorPage/>}/>
      </Routes>
   </Router>
   </>
  )
}

export default App
