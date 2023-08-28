import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriarListaPage } from './criar-lista.page';

const routes: Routes = [
  {
    path: '',
    component: CriarListaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriarListaPageRoutingModule {}
