import { Component, OnInit } from "@angular/core";
import { BooksService, Book } from "../books.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-books-list",
  templateUrl: "./books-list.component.html",
  styleUrls: ["./books-list.component.scss"]
})
export class BooksListComponent implements OnInit {
  books$: Observable<Book[]>;

  constructor(private bookService: BooksService) {}

  ngOnInit() {
    this.books$ = this.bookService.fetchData();
  }
}
