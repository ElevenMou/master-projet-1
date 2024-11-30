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
    //const index=this.etudiants.findIndex(etudiant=>(etudiant.id==id))
    //this.etudiants.splice(index,1)
  }

  updateEtudiant(etudiant: any) {
    //const index=this.etudiants.findIndex(currentEtudiant=>(currentEtudiant.id==etudiant.id))
    //this.etudiants[index]=etudiant
  }
}
