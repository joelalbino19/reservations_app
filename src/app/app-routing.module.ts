import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard'; // Guard para verificar autenticación

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full' // Redirecciona a la página de login si no hay otra ruta
  },
  {
    path: 'login', // Ruta para el login
    loadChildren: () =>
      import('./features/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'register', // Ruta para el login
    loadChildren: () =>
      import('./features/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./features/home/home.module').then(m => m.HomeModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'reservations', // Rutas protegidas: solo accesibles si el usuario está autenticado
    loadChildren: () =>
      import('./features/reservations/reservations.module').then(m => m.ReservationsModule),
    canActivate: [AuthGuard]
  },
  {
    path: '**', // Ruta para manejar rutas no encontradas
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
