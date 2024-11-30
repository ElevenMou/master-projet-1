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
  constructor(public activeModal: NgbActiveModal) {}
  deleteEtudiant(id: number) {}
}
