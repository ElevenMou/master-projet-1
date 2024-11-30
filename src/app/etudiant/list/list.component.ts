import { Component } from '@angular/core';
import { EtudiantService } from '../etudiant.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  etudiants: any[] = [];

  constructor(
    private etudiantService: EtudiantService,
    private modal: NgbModal
  ) {}
  ngOnInit() {
    this.etudiants = this.etudiantService.getEtudiants();
  }

  deleteEtudiant(id: number) {
    const ref = this.modal.open(DeleteModalComponent);
    ref.componentInstance.etudiantData = this.etudiants.find(
      (et) => et.id === id
    );
  }

  editEtudiant(id: number) {
    const ref = this.modal.open(FormComponent);
    ref.componentInstance.etudiantData = this.etudiants.find(
      (et) => et.id === id
    );
  }
}
