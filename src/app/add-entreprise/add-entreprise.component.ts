import { Component, OnInit } from '@angular/core';
import { Entreprise } from '../model/entreprise.model';
import { FormsModule } from '@angular/forms';
import { EntrepriseService } from '../services/entreprise.service';
import { Router } from '@angular/router';
import { Secteur } from '../model/secteur.models';

@Component({
  selector: 'app-add-entreprise',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-entreprise.component.html'
})
export class AddEntrepriseComponent implements OnInit {

  newEntreprise = new Entreprise();
  secteurs! :Secteur[];
  newIdSec ! : number;
  newSecteur! :Secteur ;
  message: string = '';

  constructor(private entrepriseService: EntrepriseService, private router:Router) {
  }

  ngOnInit(): void {
    this.secteurs =this.entrepriseService.listeSecteurs();
  }

  addEntreprise() {
    this.newSecteur = this.entrepriseService.consulterSecteur(this.newIdSec);
    this.newEntreprise.secteur = this.newSecteur;
    this.entrepriseService.ajouterEntreprise(this.newEntreprise);

    this.message =
      "Entreprise " +
      this.newEntreprise.nomEntreprise +
      " ajouter avec succes!";
      this.router.navigate(['entreprises']);
       
  }
}