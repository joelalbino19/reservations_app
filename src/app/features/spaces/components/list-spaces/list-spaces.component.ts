import { Component, OnInit } from '@angular/core';
import { SpaceService } from '../../services/space.service';
import { Space } from '../../models/space.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-spaces',
  templateUrl: './list-spaces.component.html',
  styleUrls: ['./list-spaces.component.scss']
})
export class ListSpacesComponent implements OnInit {
  spaces: Space[] = [];

  reservationsColumn: {
      dataField: keyof Space;
      caption: string
    }[] = [
        {
          dataField: 'name',
          caption: 'Nombre del espacio'
        },
        {
          dataField: 'capacity',
          caption: 'Capacidad'
        },
        {
          dataField: 'location',
          caption: 'Ubicación'
        }
      ];

  constructor(private spaceService: SpaceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadSpaces();
  }

  loadSpaces() {
    this.spaceService.getSpaces().subscribe(
      {
        next: (data: Space[]) => {
          this.spaces = data;
          this.spaceService.spaceListDT = data;
        },
        error: (error) => {
          console.error('There was an error!', error);
        },
      })
  }

  createSpace() {
    this.router.navigate(['/spaces/create']);
  }
}
