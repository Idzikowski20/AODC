import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../../config/firebaseConfig";

const PrivateRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) return <div>Ładowanie...</div>;

  return user ? children : <Navigate to="/Login" />;
};

export default PrivateRoute;
