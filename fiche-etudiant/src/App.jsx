import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import StudentForm from "./components/form.jsx";
import StudentCard from "./components/StudentCard.jsx";
import Footer from "./components/Footer.jsx";
import etudiant1 from "./assets/etudiant1.jpg";
import etudiant3 from "./assets/etudiante3.png";
import etudiant4 from "./assets/etudiant4.png";

function App() {
  const [etudiants, setEtudiants] = useState([
    {
      id: 1,
      prenom: "Slim",
      nom: "Boubaker",
      email: "slimboubaker@gmail.com",
      telephone: "+216 99 999 999",
      filiere: "GLSI",
      anneeEtude: "2ème année",
      groupe: "GLSI 2",
      ville: "Mahdia",
      image: etudiant1,
    },
  
    {
      id: 3,
      prenom: "Mariem",
      nom: "Khalfallah",
      email: "mariem.khalfallah@gmail.com",
      telephone: "+216 27 567 890",
      filiere: "RSI",
      anneeEtude: "2ème année",
      groupe: "RSI 2",
      image: etudiant3,
    },
  ]);

  const [recherche, setRecherche] = useState("");

  // TP4 : ajouter (reçoit l'étudiant du formulaire)
  function ajouterEtudiant(nouvelEtudiant) {
    const etudiantAvecId = {
      ...nouvelEtudiant,
      id: Date.now(),
    };

    setEtudiants((anciensEtudiants) => [...anciensEtudiants, etudiantAvecId]);
  }

  // TP3 : supprimer
  function supprimerEtudiant(id) {
    setEtudiants((anciensEtudiants) =>
      anciensEtudiants.filter((etudiant) => etudiant.id !== id)
    );
  }

  // TP3 : modifier
  function modifierEtudiant(id) {
    const nouveauPrenom = prompt("Nouveau prénom :");

    if (nouveauPrenom === null || nouveauPrenom.trim() === "") {
      return;
    }

    setEtudiants((anciensEtudiants) =>
      anciensEtudiants.map((etudiant) =>
        etudiant.id === id
          ? { ...etudiant, prenom: nouveauPrenom.trim() }
          : etudiant
      )
    );
  }

  // TP3 : filtrer par filière
  const etudiantsFiltres = etudiants.filter((etudiant) =>
    etudiant.filiere.toLowerCase().includes(recherche.toLowerCase())
  );

  return (
    <div className="container">
      <Header />
      <Navbar />

      <StudentForm onAjouterEtudiant={ajouterEtudiant} />

      <div className="actions">
        <input
          className="recherche"
          type="text"
          value={recherche}
          placeholder="Rechercher par filière..."
          onChange={(e) => setRecherche(e.target.value)}
        />
      </div>

      <main className="liste">
        {etudiantsFiltres.map((etudiant) => (
          <StudentCard
            key={etudiant.id}
            etudiant={etudiant}
            onModifier={modifierEtudiant}
            onSupprimer={supprimerEtudiant}
          />
        ))}
      </main>

      <Footer />
    </div>
  );
}

export default App;