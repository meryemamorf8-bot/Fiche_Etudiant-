import { useState } from "react";
import "./StudentCard.css";

function StudentCard({ etudiant, onModifier, onSupprimer }) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="card">
      {etudiant.image && <img src={etudiant.image} alt="Photo" />}

      <h1>Fiche étudiant</h1>
      <p><strong>Nom & Prénom :</strong> {etudiant.prenom} {etudiant.nom}</p>

      {visible && (
        <>
          <p><strong>Email :</strong> {etudiant.email}</p>
          <p><strong>Téléphone :</strong> {etudiant.telephone}</p>
        </>
      )}

      <p><strong>Filière :</strong> {etudiant.filiere}</p>
      <p><strong>Année d'étude :</strong> {etudiant.anneeEtude}</p>
      <p><strong>Groupe :</strong> {etudiant.groupe}</p>
      <p><strong>Ville :</strong> {etudiant.ville || "Non renseignée"}</p>

      <div className="boutons">
        <button onClick={() => setVisible(!visible)}>
          {visible ? "Masquer" : "Afficher"} les coordonnées
        </button>
        <button onClick={() => onModifier(etudiant.id)}>Modifier</button>
        <button onClick={() => onSupprimer(etudiant.id)}>Supprimer</button>
      </div>
    </div>
  );
}

export default StudentCard;