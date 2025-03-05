import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../config/firebaseConfig"; // Import Firebase konfiguracji
import "./Login.css";
import {
  MDBBtn,
  MDBContainer,
  MDBCol,
  MDBInput
} from "mdb-react-ui-kit";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [countdown, setCountdown] = useState(3); // 🔥 Zmienna do odliczania
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // ✅ Automatyczne przekierowanie, jeśli użytkownik jest zalogowany
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/AdminPanel"); // Przekierowanie jeśli użytkownik jest zalogowany
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  // ✅ Obsługa logowania
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    // Walidacja
    if (!email || !password) {
      setError("❌ Wprowadź email i hasło.");
      setLoading(false);
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setSuccess("✅ Udało się zalogować!");

      // 🔥 Uruchamiamy odliczanie przed przekierowaniem
      let counter = 3;
      setCountdown(counter);

      const interval = setInterval(() => {
        counter -= 1;
        setCountdown(counter);
        if (counter === 0) {
          clearInterval(interval);
          navigate("/AdminPanel"); // Przekierowanie po odliczaniu
        }
      }, 1000);
    } catch (error) {
      setError("❌ Nieprawidłowy email lub hasło.");
    } finally {
      setLoading(false);
    }
  };

  // Funkcja obsługująca naciśnięcie klawisza Enter w polu hasła
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleLogin(e); // Logowanie po naciśnięciu Enter
    }
  };

  return (
    <MDBContainer className="my-5 gradient-form">
      <div className="row login-container">
        <MDBCol col="6" className="mb-5">
          <div className="d-flex flex-column ms-5 me-5">
            <div className="text-center">
              <h4 className="mt-1 mb-5 pb-1">Panel Administracyjny</h4>
            </div>

            <p>Zaloguj się do Panelu</p>

            {error && <p className="error-message">{error}</p>}
            {success && (
              <p className="success-message">
                {success} <br />
                🔄 Automatyczne przekierowanie za {countdown}...
              </p>
            )}

            <MDBInput
              wrapperClass="mb-4"
              label="Email"
              id="form1"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Hasło"
              id="form2"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={handleKeyDown}  // Obsługuje Enter
              required
            />

            <div className="text-center pt-1 mb-5 pb-1">
              <button className="mb-4 w-100 gradient-custom-2 login-button" onClick={handleLogin} disabled={loading}>
                {loading ? "Logowanie..." : "Zaloguj się"}
              </button>
            </div>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">Zapomniałeś hasła?</p>
              <button outline className="mx-2 danger" color="danger">
                Przywróć
              </button>
            </div>
          </div>
        </MDBCol>

        <MDBCol col="6" className="mb-5">
          <div className="d-flex flex-column justify-content-center gradient-custom-2 h-100 mb-4">
            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h4 className="mb-4">We are more than just a company</h4>
              <p className="small mb-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </MDBCol>
      </div>
    </MDBContainer>
  );
}

export default Login;
