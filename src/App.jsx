import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import JobPage from "./Pages/JobPage";
import ErrorPage from "./Pages/ErrorPage";
import HomePage from "./Pages/HomePage";
import PreLoader from "./Components/PreLoader/PreLoader";
import Realizations from "./Pages/Realizations";
import ConstructionDataCenter from "./Pages/ConstructionDataCenter";
import AuditDataCenter from "./Pages/AuditDataCenter";
import ServiceDataCenter from "./Pages/ServiceDataCenter";
import ProjectingDataCenter from "./Pages/ProjectingDataCenter";
import Blogpage from "./Pages/Blogpage";
import CreatePostPage from "./Pages/CreatePostPage";
import DashboardPage from "./Pages/DashboardPage";
import BlogDetail from "./Pages/BlogDetailPage";
import EditPostPage from "./Pages/EditPostPage";
import LoginPage from "./Pages/LoginPage";
import ContactPage from "./Pages/ContactPage";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import { auth } from "./config/firebaseConfig";
import ContenerDataCenterPage from "./Pages/ContenerDataCenterPage";
import DzialhandlowyPage from "./Pages/Dzialhandlowypage";

const MetaTags = () => {
  const location = useLocation();

  const metaData = {
    "/": {
      title: "Budowa, audyt, projektowanie, chłodzenie Data Center",
      description: "Doświadczony zespół AODC: projektowanie, budowa i serwis Data Center. Pasja, odpowiedzialność i kompleksowa realizacja każdego projektu!",
    },
    "/Serwerownie-Kontenerowe": {
      title: "Budowa mobilnej serwerowni, Data Center, Mobilna Serwerownia Kontenerowa",
      description: "Projektujemy i budujemy mobilne centra danych w formie serwerowni kontenerowych, które idealnie dopasowujemy do potrzeb naszych klientów",
    },
    "/Budowa-Data-Center": {
      title: "Budowa serwerowni, Data Center, Serwerownia Kontenerowa",
      description: "Twoja firma potrzebuje stabilnej, a zarazem innowacyjnej infrastruktury IT? Sprawdź, jak możemy pomóc w budowie niezawodnej serwerowni.",
    },
    "/Audyt-Data-Center": {
      title: "Profesjonalny Audyt Data Center",
      description: "Wsparcie od audytu data center, przez strategię optymalizacji, po realizację rozwiązań – kompleksowo na każdym etapie. Zapraszamy!",
    },
    "/Projektowanie-Data-Center": {
      title: "Projektowanie Data Center | aodc.pl",
      description: "Specjalizujemy się w projektowaniu Data Center. Nasze projekty dostosowujemy do indywidualnych potrzeb inwestora oraz standardów branżowych.",
    },
    "/Serwis-Data-Center": {
      title: "Bezpieczeństwo | Chłodzenie | Zasilanie Awaryjne Serwerowni",
      description: "Zapewniamy kompleksowe podejście do bezpieczeństwa serwerowni, które chroni Twoje centrum danych przed potencjalnymi zagrożeniami.",
    }
  };

  const { title, description } = metaData[location.pathname] || {
    title: "AODC - Data Center",
    description: "Kompleksowe usługi dla Twojego centrum danych.",
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

function App() {
  console.log("Firebase auth:", auth);

  return (
    <HelmetProvider>
      <img className="herobg" src="/assets/herobg.png" alt="background" />
      <PreLoader />
        <Router>
        <MetaTags />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Budowa-Data-Center" element={<ConstructionDataCenter />} />
          <Route path="/Audyt-Data-Center" element={<AuditDataCenter />} />
          <Route path="/Projektowanie-Data-Center" element={<ProjectingDataCenter />} />
          <Route path="/Serwis-Data-Center" element={<ServiceDataCenter />} />
          <Route path="/Serwerownie-Kontenerowe" element={<ContenerDataCenterPage />} />
          <Route path="/Kariera" element={<JobPage />} />
          <Route path="/Blog" element={<Blogpage />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/Realizacje" element={<Realizations />} />
          <Route path="/Kontakt" element={<ContactPage />} />
          <Route path="/Dzial-handlowy" element={<DzialhandlowyPage />} />
          
          {/* 🔐 Zabezpieczone strony */}
          <Route path="/CreatePost" element={<PrivateRoute><CreatePostPage /></PrivateRoute>} />
          <Route path="/AdminPanel" element={<PrivateRoute><DashboardPage /></PrivateRoute>} />
          <Route path="/AdminPanel/edit/:id" element={<PrivateRoute><EditPostPage /></PrivateRoute>} />
          
          {/* 🔓 Publiczne strony */}
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
