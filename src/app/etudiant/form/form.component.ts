import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { EtudiantService } from '../etudiant.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  formData: any;
  etudiantData: any;

  constructor(
    private fb: FormBuilder,
    private etudiantService: EtudiantService,
    private activeModal: NgbActiveModal
  ) {
    this.formData = this.fb.group({
      id: [0, Validators.required],
      nom: ['', Validators.required],
      age: [0, Validators.required],
    });
  }

  ngOnInit(): void {
    this.formData.patchValue(this.etudiantData);
  }
  addEtudiant() {
    if (this.etudiantData) {
      this.etudiantService.updateEtudiant(this.formData.value);
      this.activeModal.close();
    } else {
      this.etudiantService.addEtudiant(this.formData.value);
      this.activeModal.close();
    }
  }
}
