import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EntrepriseService } from '../services/entreprise.service';
import { Entreprise } from '../model/entreprise.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Secteur } from '../model/secteur.models';


@Component({
  selector: 'app-update-entreprise',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update-entreprise.component.html',
})
export class UpdateEntrepriseComponent implements OnInit {

  currentEntreprise = new Entreprise();
  secteurs!: Secteur[];
  updatedSecId!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private entrepriseService: EntrepriseService
  ) {
  }

  ngOnInit(): void {
    this.secteurs = this.entrepriseService.listeSecteurs();
    this.currentEntreprise =
      this.entrepriseService.consulterEntreprise(
    
        this.activatedRoute.snapshot.params['id']);
    this.updatedSecId = this.currentEntreprise.secteur.idSecteur;

    
  }

  updateEntreprise() {
    this.currentEntreprise.secteur =this.entrepriseService.consulterSecteur(this.updatedSecId);
    this.entrepriseService.updateEntreprise(this.currentEntreprise);

    this.router.navigate(['entreprises']);
  }
}