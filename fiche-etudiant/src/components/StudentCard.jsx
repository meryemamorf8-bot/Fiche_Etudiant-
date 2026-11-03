import { useState } from "react";
import "./StudentCard.css";

function StudentCard(props) {
  // Tâche 2 : afficher / masquer les coordonnées
  const [coordonneesVisibles, setCoordonneesVisibles] = useState(false);

  // Tâche 4 : modifier la ville
  const [enEdition, setEnEdition] = useState(false);
  const [villeSaisie, setVilleSaisie] = useState(props.ville || "");

  const ville = props.ville || "Non renseignée";

  function basculerCoordonnees() {
    setCoordonneesVisibles(!coordonneesVisibles);
  }

  function enregistrer() {
    props.onModifierVille(props.email, villeSaisie);
    setEnEdition(false);
  }

  return (
    <div className="card">
      {props.image && <img src={props.image} alt="Photo de l'étudiant" />}
      <h1>Fiche étudiant</h1>

      <p><strong>Nom & Prénom :</strong> {props.prenom} {props.nom}</p>

      {coordonneesVisibles && (
        <>
          <p><strong>Email :</strong> {props.email}</p>
          <p><strong>Téléphone :</strong> {props.telephone}</p>
        </>
      )}

      <p><strong>Filière :</strong> {props.filiere}</p>
      <p><strong>Année d'étude :</strong> {props.anneeEtude}</p>
      <p><strong>Groupe :</strong> {props.groupe}</p>

      <p>
        <strong>Ville :</strong>{" "}
        {enEdition ? (
          <input
            value={villeSaisie}
            onChange={(e) => setVilleSaisie(e.target.value)}
          />
        ) : (
          ville
        )}
      </p>

      <div className="boutons">
        <button onClick={basculerCoordonnees}>
          {coordonneesVisibles
            ? "Masquer les coordonnées"
            : "Afficher les coordonnées"}
        </button>

        {enEdition ? (
          <button onClick={enregistrer}>Enregistrer</button>
        ) : (
          <button onClick={() => setEnEdition(true)}>Modifier la ville</button>
        )}

        <button onClick={() => props.onSupprimer(props.email)}>
          Supprimer
        </button>
      </div>
    </div>
  );
}

export default StudentCard;