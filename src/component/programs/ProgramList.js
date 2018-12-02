import React, { Component } from "react";

import ProgramItem from "./ProgramItem";

const Programs = [
  {
    programTitle: "FULL TIME PROGRAM",
    programInfos:
      "un programme intensif de 3 mois pour devenir développeur fullstack js ou java. Un coaching technique et professionnel régulier et des liens très forts avec le monde de l'entreprise.",
    backgroundColor: "#daecf3",
    buttonName: "En savoir plus",
    color: "#696969",
    borderColor: "#696969"
  },
  {
    programTitle: "PART TIME PROGRAM",
    programInfos:
      "Tu peux développer ton produit technologique pendant l'année scolaire si tu es étudiant ou en parallèle de ton travail si tu es un professionnel. Ça se passe tous les weekends (demi-journée Samedi ou dimanche) dans notre Hackerspace !",
    backgroundColor: "#be1e32",
    buttonName: "En savoir plus",
    color: "#ffffff",
    borderColor: "#ffffff"
  },
  {
    programTitle: "KIDS CODING PROGRAM",
    programInfos:
      "Ce programme vise à initier les plus jeunes (8-12 ans) à l'informatique et à la programmation sur 4 niveaux. Un niveau dure 2 mois. À la fin du programme, l'enfant doit présenter son projet au PDG d'une entreprise technologique.",
    backgroundColor: "#1aa6b7",
    buttonName: "En savoir plus",
    color: "#ffffff",
    borderColor: "#ffffff"
  },
  {
    programTitle: "SUMMER ACADEMY",
    programInfos:
      "Développe ton produit technologique pendant 3 semaines pendant l'été. Un expérience très riche d'apprentissage et de rencontres avec des passionnés de la technologie.",
    backgroundColor: "#022d41",
    buttonName: "En savoir plus",
    color: "#ffffff",
    borderColor: "#ffffff"
  }
];

class ProgramList extends Component {
  render() {
    return (
      <div className="lists">
        <span className="programme">NOS PROGRAMMES</span>
        <div className="row">
          {Programs.map(item => (
            <ProgramItem
              programTitle={item.programTitle}
              programInfos={item.programInfos}
              backgroundColor={item.backgroundColor}
              buttonName={item.buttonName}
              color={item.color}
              borderColor={item.borderColor}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default ProgramList;
