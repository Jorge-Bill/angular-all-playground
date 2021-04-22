import { Book } from "../book-list/books.model";

export interface AppState {
  books: ReadonlyArray<Book>;
  collection: ReadonlyArray<string>;
  details: boolean;
}

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
