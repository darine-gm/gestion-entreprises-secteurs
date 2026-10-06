import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EntrepriseService } from '../services/entreprise.service';
import { Entreprise } from '../model/entreprise.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-entreprise',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update-entreprise.component.html',
})
export class UpdateEntrepriseComponent implements OnInit {

  currentEntreprise = new Entreprise();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private entrepriseService: EntrepriseService
  ) {
  }

  ngOnInit(): void {
    /*console.log(this.activatedRoute.snapshot.params['id']);*/
    this.currentEntreprise =
      this.entrepriseService.consulterEntreprise(
    
        this.activatedRoute.snapshot.params['id']
      );
  }

  updateEntreprise() {

    this.entrepriseService.updateEntreprise(this.currentEntreprise);

    this.router.navigate(['entreprises']);
  }
}