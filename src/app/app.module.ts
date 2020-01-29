import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { BooksListComponent } from "./books-list/books-list.component";
import { SearchComponent } from "./search/search.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, BooksListComponent, SearchComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
