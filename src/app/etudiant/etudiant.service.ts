import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EtudiantService {
  etudiants = [
    {
      id: 1,
      nom: 'mohamed',
      age: 25,
    },
    {
      id: 2,
      nom: 'mohamed',
      age: 25,
    },
    {
      id: 3,
      nom: 'mohamed',
      age: 25,
    },
  ];

  constructor() {}

  getEtudiants() {
    return this.etudiants;
  }

  addEtudiant(etudiant: any) {
    this.etudiants.push({
      id: etudiant.id,
      nom: etudiant.nom,
      age: etudiant.age,
    });
  }

  deleteEtudiant(id: number) {
    const index = this.etudiants.findIndex((etudiant) => etudiant.id === id);
    this.etudiants.splice(index, 1);
  }

  editEtudiant(etudiant: any) {
    const index = this.etudiants.findIndex((et) => et.id === etudiant.id);
    this.etudiants[index] = {
      id: etudiant.id,
      nom: etudiant.nom,
      age: etudiant.age,
    };
  }
}
