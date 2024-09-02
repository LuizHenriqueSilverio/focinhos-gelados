import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { QuemSomosComponent } from './pages/quem-somos/quem-somos.component';
import { NgModule } from '@angular/core';
import { DoacoesComponent } from './pages/doacoes/doacoes.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: QuemSomosComponent},
  {path: 'donations', component: DoacoesComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
