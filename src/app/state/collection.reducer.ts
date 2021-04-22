import { createReducer, on, Action } from "@ngrx/store";
import {
  addBook,
  removeBook,
  clearCollection,
  showDetails
} from "./books.actions";

export const initialState: ReadonlyArray<string> = [];

export const collectionReducer = createReducer(
  initialState,
  on(clearCollection, () => {
    return [];
  }),
  on(showDetails, details => {
    console.log(details);
    return !details;
  }),
  on(removeBook, (state, { bookId }) => state.filter(id => id !== bookId)),
  on(addBook, (state, { bookId }) => {
    if (state.indexOf(bookId) > -1) return state;

    return [...state, bookId];
  })
);

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
