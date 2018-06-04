import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListarComponent } from './listar/listar.component';
import { ProcurarComponent } from './procurar/procurar.component';

const routes: Routes = [
    { path: '', component: ListarComponent },
    { path: 'add', component: AddComponent },
    { path: 'procurar', component: ProcurarComponent }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
// Modulo que permite a transição entre componentes
export class AppRoutingModule {}
