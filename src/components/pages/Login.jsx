// src/Login.js
import { useState } from "react";
import "../../../public/css/Login.css";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Gérer la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    // Préparation des données pour l'API
    const loginData = {
      email: email,
      password: password,
    };

    try {
      // Appel API pour la connexion
      const response = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      // Si la connexion échoue
      if (!response.ok) {
        const errorData = await response.json();
        console.log(errorData);
        throw new Error("Échec de la connexion");
      }

      const data = await response.json();
      console.log("Utilisateur connecté:", data);
      // Tu peux ici rediriger l'utilisateur ou stocker le token dans le localStorage/sessionStorage
      localStorage.setItem("auth_token", data);
      window.location.href("/Dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <p className="error">{error}</p>}
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Connexion en cours..." : "Se connecter"}
        </button>
      </form>
    </div>
  );
};

export default Login;
