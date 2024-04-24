import { BrowserRouter as Router,Routes,Route,useLocation } from "react-router-dom"
import JobPage from "./Pages/JobPage"
import ErrorPage from "./Pages/ErrorPage"
import HomePage from "./Pages/HomePage"
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
          <Route path="/Kariera" element={<JobPage/>}/>
          <Route path="/Realizacje" element={<Realizations/>}/>
          <Route path="*" element={<ErrorPage/>}/>
      </Routes>
   </Router>
   </>
  )
}

export default App
