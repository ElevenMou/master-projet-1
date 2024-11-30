import { Component } from '@angular/core';
import { EtudiantService } from '../etudiant.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-modal',
  standalone: true,
  imports: [],
  templateUrl: './delete-modal.component.html',
  styleUrl: './delete-modal.component.css',
})
export class DeleteModalComponent {
  etudiantData: any;
  constructor(
    private etudiantService: EtudiantService,
    private activeModal: NgbActiveModal
  ) {}

  deleteEtudiant() {
    this.etudiantService.deleteEtudiant(this.etudiantData.id);
    this.activeModal.close();
  }

  close() {
    this.activeModal.close();
  }
}
