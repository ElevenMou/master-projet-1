import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EtudiantService } from '../etudiant.service';
import { FormComponent } from '../form/form.component';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  // etudiants:any
  etudiants: any;
  constructor(
    private etudiantService: EtudiantService,
    private modal: NgbModal
  ) {
    this.etudiants = this.etudiantService.etudiants;
  }
  /*ngOnInit() {
    console.log(this.etudiantService.getAllEtudiants())
    this.etudiants=this.etudiantService.getAllEtudiants()
  }*/
  openModal() {
    this.modal.open(FormComponent);
  }

  editEtudiant(etudiant: any) {
    const ref = this.modal.open(FormComponent);
    ref.componentInstance.etudiantData = etudiant;
    ref.componentInstance.action = 'Modifier';
  }

  openDeleteModal(etudiant: any) {
    const ref = this.modal.open(DeleteModalComponent);
    ref.componentInstance.etudiantData = etudiant;
    ref.result.then((result) => {
      if (result == 'oui') {
        this.etudiantService.deleteEtudiant(etudiant.id);
      }
    });
  }
}
