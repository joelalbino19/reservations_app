import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SpaceService } from '../../services/space.service';

@Component({
  selector: 'app-register-space',
  templateUrl: './register-space.component.html',
  styleUrls: ['./register-space.component.scss']
})
export class RegisterSpaceComponent implements OnInit {
  spaceForm: FormGroup;
  isEditMode = false;
  spaceId: string | null = '';

  constructor(
    private fb: FormBuilder,
    private spaceService: SpaceService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.spaceForm = this.fb.group({
      name: ['', Validators.required],
      capacity: ['', Validators.required],
      location: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.spaceId = this.route.snapshot.paramMap.get('id');
    this.filterSpace();
  }

  filterSpace() {
    if (this.spaceId) {
      this.isEditMode = true;
      let space = this.spaceService.spaceListDT.find((item) => item.id == this.spaceId)
      if (space) {
        this.spaceForm.patchValue(space);
        return;
      } {
        this.router.navigate(['/spaces/spaces-list']);
      }
    }
  }
  onSubmit(): void {
    if (this.spaceForm.valid) {
      const spaceData = this.spaceForm.value;

      this.spaceService.createSpace(spaceData).subscribe(() => {
        this.router.navigate(['/spaces']);
      });
    }
  }
  onBack() {
    this.router.navigate(['/spaces']);
  }
}
