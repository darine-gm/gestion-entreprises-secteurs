import { Injectable } from '@angular/core';
import { Entreprise } from '../model/entreprise.model';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {

  entreprises: Entreprise[];

  constructor() {

    console.log("création du service entreprise");

     this.entreprises = [
  {
    idEntreprise: 1,
    nomEntreprise: "Tunisie Telecom",
    adresse: "Tunis",
    dateCreation: new Date("1995-04-17"),
    chiffreAffaires: 1200000
  },

  {
    idEntreprise: 2,
    nomEntreprise: "Carthage Solutions",
    adresse: "Sousse",
    dateCreation: new Date("2010-09-12"),
    chiffreAffaires: 750000   
  },

  {
    idEntreprise: 3,
    nomEntreprise: "TechnoPlus",
    adresse: "Sfax",
    dateCreation: new Date("2018-02-25"),
    chiffreAffaires: 450000
  }
];
  }

  listeEntreprises(): Entreprise[] {
    return this.entreprises;
  }

  ajouterEntreprise(entreprise: Entreprise) {
    this.entreprises.push(entreprise);
  }

  supprimerEntreprise(ent: Entreprise) {

    const index = this.entreprises.indexOf(ent, 0);

    if (index > -1) {
      this.entreprises.splice(index, 1);
    }
  }

  consulterEntreprise(id: number): Entreprise {
    return this.entreprises.find(e => e.idEntreprise == id)!;
  }

  updateEntreprise(ent: Entreprise) {

    const index = this.entreprises.indexOf(ent, 0);

    if (index > -1) {
      this.entreprises.splice(index, 1);
      this.entreprises.splice(index, 0, ent);
    }
  }
}