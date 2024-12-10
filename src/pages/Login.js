import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simuler une authentification (remplacer par un appel API)
    if (email === "test@example.com" && password === "password") {
      alert("Connexion réussie");
      navigate("/dashboard"); // Redirige vers le tableau de bord après connexion
    } else {
      alert("Identifiants incorrects");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Connexion</h1>
      <form style={styles.form} onSubmit={handleSubmit}>
        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="email">
            Adresse e-mail
          </label>
          <input
            style={styles.input}
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Votre adresse e-mail"
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="password">
            Mot de passe
          </label>
          <input
            style={styles.input}
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Votre mot de passe"
            required
          />
        </div>
        <button style={styles.button} type="submit">
          Se connecter
        </button>
      </form>
      <p style={styles.linkText}>
        Pas encore de compte ?{" "}
        <span style={styles.link} onClick={() => navigate("/register")}>
          Inscrivez-vous ici
        </span>
      </p>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f9f9f9",
    padding: "20px",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "20px",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "400px",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  inputGroup: {
    marginBottom: "15px",
  },
  label: {
    fontSize: "1rem",
    marginBottom: "5px",
    color: "#555",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "4px",
    border: "1px solid #ddd",
    outline: "none",
  },
  button: {
    padding: "10px",
    fontSize: "1rem",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "10px",
  },
  linkText: {
    marginTop: "15px",
    fontSize: "0.9rem",
    color: "#555",
  },
  link: {
    color: "#007bff",
    cursor: "pointer",
    textDecoration: "underline",
  },
};

export default Login;
