import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriarListaPageRoutingModule } from './criar-lista-routing.module';

import { CriarListaPage } from './criar-lista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriarListaPageRoutingModule
  ],
  declarations: [CriarListaPage]
})
export class CriarListaPageModule {}
