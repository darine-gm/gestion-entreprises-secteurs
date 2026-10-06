import { Component, OnInit } from '@angular/core';
import { Entreprise } from '../model/entreprise.model';
import { FormsModule } from '@angular/forms';
import { EntrepriseService } from '../services/entreprise.service';

@Component({
  selector: 'app-add-entreprise',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-entreprise.component.html'
})
export class AddEntrepriseComponent implements OnInit {

  newEntreprise = new Entreprise();

  message: string = '';

  constructor(private entrepriseService: EntrepriseService) {
  }

  ngOnInit(): void {
  }

  addEntreprise() {

    this.entrepriseService.ajouterEntreprise(this.newEntreprise);

    this.message =
      "Entreprise " +
      this.newEntreprise.nomEntreprise +
      " ajouter avec succes!";
  }
}