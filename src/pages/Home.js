import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Bienvenue sur AppVac</h1>
        <p style={styles.subtitle}>
          Trouvez facilement des vacations hospitalières ou publiez vos offres.
        </p>
      </header>
      <div style={styles.buttons}>
        <button style={styles.button} onClick={() => navigate("/login")}>
          Se connecter
        </button>
        <button
          style={styles.buttonSecondary}
          onClick={() => navigate("/register")}
        >
          S'inscrire
        </button>
      </div>
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
  header: {
    textAlign: "center",
    marginBottom: "20px",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#333",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#666",
  },
  buttons: {
    marginTop: "20px",
    display: "flex",
    gap: "15px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  buttonSecondary: {
    padding: "10px 20px",
    fontSize: "1rem",
    color: "#007bff",
    backgroundColor: "#fff",
    border: "2px solid #007bff",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Home;
