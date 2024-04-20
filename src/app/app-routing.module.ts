import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibrairyComponent } from './librairy/librairy.component';

import { MusicComponent } from './music/music.component';

import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path: 'librairy', component: LibrairyComponent},
  
  {path: 'music/:musicId', component: MusicComponent},
  
  {path: 'search', component: SearchComponent},
  {path: '', redirectTo: 'search', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
