function App(){
  const etudiant = {
    nom: "Amor",
    prenom: "Meryem",
    email:"meryemamorf8@gmail.com",
    telephone:"+216 95535074",
    annee: "2éme année GLSI",
    classe : "GLSI2 C",
    groupe : "G1",
    ville :"Mahdia",
  }
  return (
    <div>
      <H1>Fiche Etudiant</H1>
      <p>Nom :{etudiant.nom}</p>
      <p>Prénom :{etudiant.prenom}</p>
      <p>Email :{etudiant.email}</p>
      <p>Téléphone :{etudiant.telephone}</p>
      <p>Année :{etudiant.annee}</p>
      <p>Classe :{etudiant.classe}</p>
      <p>Groupe :{etudiant.groupe}</p>
      <p>Ville :{etudiant.ville}</p>
    </div>
  );
  export default App
}