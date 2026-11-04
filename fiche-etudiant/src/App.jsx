import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import StudentCard from "./components/StudentCard.jsx";
import Footer from "./components/Footer.jsx";
// import studentImage from "./assets/student.jpg";

function App() {
  const [etudiants, setEtudiants] = useState([
    {
      prenom: "Slim",
      nom: "Boubaker",
      email: "slimboubaker@gmail.com",
      telephone: "+216 99 999 999",
      filiere: "Génie Logiciel",
      anneeEtude: "2ème année",
      groupe: "GLSI 2",
      ville: "Mahdia",
      //image: studentImage,
    },
    {
      prenom: "Sarra",
      nom: "Trabelsi",
      email: "sarra.trabelsi@gmail.com",
      telephone: "+216 22 345 678",
      filiere: "Réseaux",
      anneeEtude: "2ème année",
      groupe: "RI 1",
      ville: "Sousse",
    },
  ]);

  const [filiereChoisie, setFiliereChoisie] = useState("Toutes");

  const etudiantsAffiches =
    filiereChoisie === "Toutes"
      ? etudiants
      : etudiants.filter((e) => e.filiere === filiereChoisie);

  function ajouterEtudiant() {
    const nouvelEtudiant = {
      prenom: "Yassine",
      nom: "Ben Salem",
      email: "yassine.bensalem@gmail.com",
      telephone: "+216 44 444 444",
      filiere: "Génie Logiciel",
      anneeEtude: "2ème année",
      groupe: "GLSI 1",
      ville: "Sfax",
    };
    setEtudiants([...etudiants, nouvelEtudiant]);
  }

  function supprimerEtudiant(email) {
    setEtudiants(etudiants.filter((e) => e.email !== email));
  }

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

        <select
          value={filiereChoisie}
          onChange={(e) => setFiliereChoisie(e.target.value)}
        >
          <option value="Toutes">Toutes</option>
          <option value="Génie Logiciel">Génie Logiciel</option>
          <option value="Réseaux">Réseaux</option>
        </select>
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