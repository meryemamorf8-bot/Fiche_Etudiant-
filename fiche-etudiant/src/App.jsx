import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import StudentCard from "./components/StudentCard.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [etudiants, setEtudiants] = useState([
    {
      prenom: "Slim",
      nom: "Boubaker",
      email: "slimboubaker@gmail.com",
      telephone: "+216 99 999 999",
      filiere: "Génie Logiciel et Systèmes d'Information",
      anneeEtude: "2ème année",
      groupe: "GLSI 2",
      ville: "Mahdia",
      image: studentImage,
    },
    {
      prenom: "Sarra",
      nom: "Trabelsi",
      email: "sarra.trabelsi@gmail.com",
      telephone: "+216 22 345 678",
      filiere: "Réseaux Informatiques",
      anneeEtude: "2ème année",
      groupe: "RI 1",
      ville: "Sousse",
    },
    {
      prenom: "Mariem",
      nom: "Khalfallah",
      email: "mariem.khalfallah@gmail.com",
      telephone: "+216 27 567 890",
      filiere: "Génie Logiciel et Systèmes d'Information",
      anneeEtude: "2ème année",
      groupe: "GLSI 2",
    },
  ]);

  const [filiereChoisie, setFiliereChoisie] = useState("Toutes");

  const filieres = ["Toutes", ...new Set(etudiants.map((e) => e.filiere))];

  const etudiantsAffiches =
    filiereChoisie === "Toutes"
      ? etudiants
      : etudiants.filter((e) => e.filiere === filiereChoisie);

  // Tâche 1 : ajouter
  function ajouterEtudiant() {
    const nouvelEtudiant = {
      prenom: "Yassine",
      nom: "Ben Salem",
      email: "yassine.bensalem@gmail.com",
      telephone: "+216 44 444 444",
      filiere: "Génie Logiciel et Systèmes d'Information",
      anneeEtude: "2ème année",
      groupe: "GLSI 1",
      ville: "Sfax",
    };

    // évite deux étudiants avec le même email (key unique)
    if (etudiants.some((e) => e.email === nouvelEtudiant.email)) {
      alert("Cet étudiant est déjà dans la liste.");
      return;
    }

    setEtudiants([...etudiants, nouvelEtudiant]);
  }

  // Tâche 3 : supprimer
  function supprimerEtudiant(email) {
    setEtudiants(etudiants.filter((e) => e.email !== email));
  }

  // Tâche 4 : modifier la ville
  function modifierVille(email, nouvelleVille) {
    setEtudiants(
      etudiants.map((e) =>
        e.email === email ? { ...e, ville: nouvelleVille } : e
      )
    );
  }

  return (
    <div className="container">
      <Header />
      <Navbar />

      <div className="actions">
        <button onClick={ajouterEtudiant}>+ Ajouter un étudiant</button>

        {/* Tâche 5 : filtre */}
        <div className="filtre">
          <label>Filière : </label>
          <select
            value={filiereChoisie}
            onChange={(e) => setFiliereChoisie(e.target.value)}
          >
            {filieres.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>
        </div>
      </div>

      <main className="liste">
        {etudiantsAffiches.map((etudiant) => (
          <StudentCard
            key={etudiant.email}
            prenom={etudiant.prenom}
            nom={etudiant.nom}
            email={etudiant.email}
            telephone={etudiant.telephone}
            filiere={etudiant.filiere}
            anneeEtude={etudiant.anneeEtude}
            groupe={etudiant.groupe}
            ville={etudiant.ville}
            image={etudiant.image}
            onSupprimer={supprimerEtudiant}
            onModifierVille={modifierVille}
          />
        ))}
      </main>

      <Footer />
    </div>
  );
}

export default App;