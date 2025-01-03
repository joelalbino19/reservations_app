import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpacesRoutingModule } from './spaces-routing.module';  // Asegúrate de importar el módulo de rutas
import { SpacesListPage } from './pages/spaces-list/spaces-list.page';
import { RegisterSpacePage } from './pages/register-space/register-space.page';
import { SpaceService } from './services/space.service';
import { ListSpacesComponent } from './components/list-spaces/list-spaces.component';
import { RegisterSpaceComponent } from './components/register-space/register-space.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DxSchedulerModule } from 'devextreme-angular';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    SpacesListPage,
    ListSpacesComponent,
    RegisterSpacePage,
    RegisterSpaceComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SpacesRoutingModule,
    DxSchedulerModule,
    SharedModule
  ]
})
export class SpacesModule { }
