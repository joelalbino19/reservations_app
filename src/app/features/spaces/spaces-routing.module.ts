import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpacesListPage } from './pages/spaces-list/spaces-list.page';
import { RegisterSpacePage } from './pages/register-space/register-space.page';

const routes: Routes = [
  {
    path: '',
    component: SpacesListPage
  },
  {
    path: 'create',
    component: RegisterSpacePage
  },
  { path: 'edit/:id', component: RegisterSpacePage }, // Componente para editar espacios
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpacesRoutingModule { }
