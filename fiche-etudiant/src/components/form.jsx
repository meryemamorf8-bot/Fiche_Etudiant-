
import { useState } from "react";
import "./form.css";

function StudentForm({
  onAjouterEtudiant,
  onModifierEtudiant,
  etudiantAModifier,
  onAnnuler
}) {

  // Initialisation des états
  const [nom, setNom] = useState(etudiantAModifier?.nom || "");
  const [prenom, setPrenom] = useState(etudiantAModifier?.prenom || "");
  const [email, setEmail] = useState(etudiantAModifier?.email || "");
  const [telephone, setTelephone] = useState(etudiantAModifier?.telephone || "");
  const [filiere, setFiliere] = useState(etudiantAModifier?.filiere || "");
  const [annee, setAnnee] = useState(etudiantAModifier?.annee || "");
  const [groupe, setGroupe] = useState(etudiantAModifier?.groupe || "");
  const [ville, setVille] = useState(etudiantAModifier?.ville || "");
  const [image, setImage] = useState(etudiantAModifier?.image || "");

  const [erreurs, setErreurs] = useState({});

  // Gestion de la photo
  const gererImage = (e) => {
    const fichier = e.target.files[0];

    if (fichier) {
      const imageURL = URL.createObjectURL(fichier);
      setImage(imageURL);
    }
  };

  // Validation du formulaire
  const validerFormulaire = () => {
    const nouvellesErreurs = {};

    if (!nom.trim()) {
      nouvellesErreurs.nom = "Le nom est obligatoire";
    }

    if (!prenom.trim()) {
      nouvellesErreurs.prenom = "Le prénom est obligatoire";
    }

    if (!email.trim()) {
      nouvellesErreurs.email = "L'email est obligatoire";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nouvellesErreurs.email = "L'adresse email est invalide";
    }

    if (!telephone.trim()) {
      nouvellesErreurs.telephone = "Le téléphone est obligatoire";
    }

    setErreurs(nouvellesErreurs);

    return Object.keys(nouvellesErreurs).length === 0;
  };

  // Soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validerFormulaire()) {
      return;
    }

    const nouvelEtudiant = {
      nom,
      prenom,
      email,
      telephone,
      filiere,
      annee,
      groupe,
      ville,
      image
    };

    if (etudiantAModifier) {
      onModifierEtudiant(nouvelEtudiant);
    } else {
      onAjouterEtudiant(nouvelEtudiant);
    }
  };

  return (
    <div className="form-container">

      <h2>
        {etudiantAModifier
          ? "Modifier un étudiant"
          : "Inscription d'un étudiant"}
      </h2>

      <form onSubmit={handleSubmit}>

        {/* Nom */}
        <div className="form-group">
          <label htmlFor="nom">Nom *</label>
          <input
            type="text"
            id="nom"
            value={nom}
            placeholder="Entrez votre nom"
            onChange={(e) => setNom(e.target.value)}
            required
          />
          {erreurs.nom && (
            <span className="error">{erreurs.nom}</span>
          )}
        </div>

        {/* Prénom */}
        <div className="form-group">
          <label htmlFor="prenom">Prénom *</label>
          <input
            type="text"
            id="prenom"
            value={prenom}
            placeholder="Entrez votre prénom"
            onChange={(e) => setPrenom(e.target.value)}
            required
          />
          {erreurs.prenom && (
            <span className="error">{erreurs.prenom}</span>
          )}
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            value={email}
            placeholder="exemple@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {erreurs.email && (
            <span className="error">{erreurs.email}</span>
          )}
        </div>

        {/* Téléphone */}
        <div className="form-group">
          <label htmlFor="telephone">Téléphone *</label>
          <input
            type="tel"
            id="telephone"
            value={telephone}
            placeholder="Entrez votre téléphone"
            onChange={(e) => setTelephone(e.target.value)}
            required
          />
          {erreurs.telephone && (
            <span className="error">{erreurs.telephone}</span>
          )}
        </div>

        {/* Filière */}
        <div className="form-group">
          <label htmlFor="filiere">Filière</label>
          <select
            id="filiere"
            value={filiere}
            onChange={(e) => setFiliere(e.target.value)}
          >
            <option value="">Choisir une filière</option>
            <option value="GLSI">GLSI</option>
            <option value="Informatique">Informatique</option>
            <option value="Réseaux">Réseaux</option>
            <option value="Multimédia">Multimédia</option>
          </select>
        </div>

        {/* Année d'étude */}
        <div className="form-group">
          <label htmlFor="annee">Année d'étude</label>
          <select
            id="annee"
            value={annee}
            onChange={(e) => setAnnee(e.target.value)}
          >
            <option value="">Choisir une année</option>
            <option value="1ère année">1ère année</option>
            <option value="2ème année">2ème année</option>
            <option value="3ème année">3ème année</option>
          </select>
        </div>

        {/* Groupe */}
        <div className="form-group">
          <label htmlFor="groupe">Groupe</label>
          <input
            type="text"
            id="groupe"
            value={groupe}
            placeholder="Exemple : Groupe 1"
            onChange={(e) => setGroupe(e.target.value)}
          />
        </div>

        {/* Ville */}
        <div className="form-group">
          <label htmlFor="ville">Ville</label>
          <input
            type="text"
            id="ville"
            value={ville}
            placeholder="Entrez votre ville"
            onChange={(e) => setVille(e.target.value)}
          />
        </div>

        {/* Photo */}
        <div className="form-group">
          <label htmlFor="photo">Photo</label>
          <input
            type="file"
            id="photo"
            accept="image/*"
            onChange={gererImage}
          />

          {image && (
            <img
              src={image}
              alt="Aperçu étudiant"
              className="preview-image"
            />
          )}
        </div>

        {/* Boutons */}
        <div className="buttons">

          <button type="submit" className="btn-submit">
            {etudiantAModifier ? "Enregistrer les modifications" : "Ajouter"}
          </button>

          {etudiantAModifier && (
            <button
              type="button"
              className="btn-cancel"
              onClick={onAnnuler}
            >
              Annuler
            </button>
          )}

        </div>

      </form>
    </div>
  );
}

export default StudentForm;
