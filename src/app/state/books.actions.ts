import { createAction, props } from "@ngrx/store";

export const addBook = createAction(
  "[Book List] Add Book",
  props<{ bookId }>()
);

export const removeBook = createAction(
  "[Book Collection] Remove Book",
  props<{ bookId }>()
);

export const clearCollection = createAction("[Book Collection] Clear");

export const showDetails = createAction("[Book Collection] Show Details");

export const retrievedBookList = createAction(
  "[Book List/API] Retrieve Books Success",
  props<{ Book }>()
);

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
