import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'categories',
    loadChildren: () =>
    import('./pages/categories/categories.module')
    .then(module => module.CategoriesModule)
  },
  {
    path: 'entries',
    loadChildren: () =>
    import('./pages/entries/entries.module')
    .then(module => module.EntriesModule)
  },
  {
    path: 'reports',
    loadChildren: () =>
    import('./pages/reports/reports.module')
    .then(module => module.ReportsModule)
  },
  {
    path: '',
    redirectTo: '/reports',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
