import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Etudiant } from './etudiant.model';

@Injectable({
  providedIn: 'root',
})
export class EtudiantService {
  backEndURL = 'http://100.85.195.32:8080/ecole/etudiants';
  //etudiants:any=[]
  etudiants = signal<Etudiant[]>([]);
  constructor(private http: HttpClient) {
    //
    this.getAllEtudiants();
  }

  /*getAllEtudiants():any{
    //return this.etudiants
    this.http.get(this.backEndURL).subscribe(data=>{
      this.etudiants=data
    })
    return this.etudiants
  }*/

  getAllEtudiants(): void {
    //return this.etudiants
    this.http.get<Etudiant[]>(this.backEndURL).subscribe((data) => {
      this.etudiants.set(data);
    });
  }
  /*addEtudiant(etudiant:any){
    //this.etudiants.push(etudiant)
    this.http.post(this.backEndURL,etudiant).subscribe()
  }*/
  addEtudiant(etudiant: any) {
    //this.etudiants.push(etudiant)
    this.http
      .post<Etudiant>(this.backEndURL, etudiant)
      .subscribe((newEtudiant) => {
        this.etudiants.update((state) => [...state, newEtudiant]);
      });
  }

  deleteEtudiant(id: number) {
    this.http
      .delete<boolean>(this.backEndURL + '/' + id)
      .subscribe((retour) => {
        if (retour) {
          this.etudiants.update((state) => state.filter((e) => e.id != id));
        }
      });
  }

  updateEtudiant(etudiant: any) {
    this.http
      .put<Etudiant>(this.backEndURL, etudiant)
      .subscribe((newEtudiant) => {
        this.etudiants.update((state) => {
          return state.map((e) => {
            if (e.id == newEtudiant.id) {
              return newEtudiant;
            } else {
              return e;
            }
          });
        });
      });
  }
}
