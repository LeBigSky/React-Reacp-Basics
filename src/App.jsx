
import Nabil from './Nabil'; //Importation de mon composant Nabil
import { useState } from 'react'; // Importation de la méthode UseState propre a React
import './App.css'; //Importation du CSS

function App() {

  let cache=false // Une saimple variable (que je ne pourrais pas modifier dynamiquement, car elle n'est pas déclarée en UseState)
  let texte= "ceci est un texte avec du texte ecrit en texte" // Une saimple variable (que je ne pourrais pas modifier dynamiquement, car elle n'est pas déclarée en UseState)
  let abo="Abonnez-vous tous la chaine de Nabssek maintenant et recevez de l'argent" // Une saimple variable (que je ne pourrais pas modifier dynamiquement, car elle n'est pas déclarée en UseState)

  // STATES: PERMET DE CREER DES VARIABLE MODIFIABLE !
  // SYNTAXE DU USESTATE |=> voir ci dessous
  // 1) const  |=> const c'est le type de variable qui est attendu pour un UseState 
  // 2) [ nomDeMaVariable, modificateur ]  |=> dans le crochets on a la variable et, son modifcateur qui est généralement le nome de la variable précéedé de "set" exemple: [voiture, setVoiture]
  // 3) = useState(0) |=> après les crochets, on as = useState et la valeur initiale de ma variable a l'intérieur des parenthèse. 

  // Ci dessus le UseState Compteur
  const [compteur, setCompteur] = useState(0)

  // Une simple fonction qui utilise le modificateur de ma variable compteur pour l'incrémenté a chaque fois que j'appel cette fonction
  function increment() {
    setCompteur(compteur + 1)
  }

  return (
    <div className="App">
      {/* AFFICHAGE CONDITIONNEL */}
      {/* RESULTAT UNIQUE: si ma variable est true affiche sinon: rien */}
      <hr />
      {cache === true && <h1>Siham</h1> }

      {/* AFFICHAGE CONDITIONNEL */}
      {/* RESULTAT VARIABLE (soit l'un, soit l'autre) si ma variable est true affiche Chouaib sinon, Siham */}

      {cache === true ? <h1>Chouaïb</h1> : <h1>Siham</h1>}
      <hr />
      
      {/* PROPS: PASSER DES DONNER */}
      {/* ici mes Props se etage1, etage2, fonction et l'élément que je leur passe: abo, texte, increment */}
      <Nabil etage1={abo} etage2={texte} fonction={increment} />
      <hr />
      {/* AFFICHE MA VARIABLE */}
      <h1>{compteur}</h1>
      
    

    </div>
  );
}

export default App;
