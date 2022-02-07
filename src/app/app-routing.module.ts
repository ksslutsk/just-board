import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicationsComponent } from './publications/publications.component';
import { CreatePublicationComponent } from './create-publication/create-publication.component';
import { UpdatePublicationComponent } from './update-publication/update-publication.component';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { SearchResultComponent } from './search-result/search-result.component';

const routes: Routes = [
  { path: 'board', component: PublicationsComponent },
  { path: 'create-publication', component: CreatePublicationComponent},
  { path: '', redirectTo: 'board', pathMatch: 'full'},
  { path: 'update-publication/:id', component: UpdatePublicationComponent},
  { path: 'auth', component: AuthPageComponent },
  { path: 'settings', component: UpdateUserComponent},
  { path: 'search-result/:id', component: SearchResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
