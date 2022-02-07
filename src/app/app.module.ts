import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PublicationsComponent } from './publications/publications.component';
import { CreatePublicationComponent } from './create-publication/create-publication.component';
import { BoardProfileComponent } from './board-profile/board-profile.component';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { UpdatePublicationComponent } from './update-publication/update-publication.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { SearchComponent } from './search/search.component';
import { SearchResultComponent } from './search-result/search-result.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PublicationsComponent,
    CreatePublicationComponent,
    BoardProfileComponent,
    AuthPageComponent,
    UpdatePublicationComponent,
    UpdateUserComponent,
    SearchComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
