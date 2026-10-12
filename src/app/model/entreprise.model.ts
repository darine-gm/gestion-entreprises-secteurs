import { Secteur } from "./secteur.models";

export class Entreprise {

  idEntreprise!: number;
  nomEntreprise!: string;
  adresse!: string;
  dateCreation!: Date;
  chiffreAffaires!: number;
  secteur! :Secteur;
}