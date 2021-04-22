import { Component } from "@angular/core";
import { Store, select } from "@ngrx/store";

import { selectBookCollection, selectBooks } from "./state/books.selectors";
import {
  retrievedBookList,
  addBook,
  removeBook,
  clearCollection,
  showDetails
} from "./state/books.actions";
import { GoogleBooksService } from "./book-list/books.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  books$ = this.store.pipe(select(selectBooks));
  bookCollection$ = this.store.pipe(select(selectBookCollection));
  author = "Oliver Sacks";
  details = false;

  onAdd(bookId) {
    this.store.dispatch(addBook({ bookId }));
  }

  onRemove(bookId) {
    this.store.dispatch(removeBook({ bookId }));
  }

  onClear() {
    this.store.dispatch(clearCollection());
  }

  onDetails() {
    this.store.dispatch(showDetails(this.details));
  }

  constructor(private booksService: GoogleBooksService, private store: Store) {}

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe(Book => this.store.dispatch(retrievedBookList({ Book })));
  }
}

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
