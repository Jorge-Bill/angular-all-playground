import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Book } from "../book-list/books.model";

@Component({
  selector: "app-book-collection",
  templateUrl: "./book-collection.component.html",
  styleUrls: ["./book-collection.component.css"]
})
export class BookCollectionComponent {
  @Input() books: Array<Book>;
  @Output() remove = new EventEmitter();
  @Output() clear = new EventEmitter();
  @Input() details = new EventEmitter();
}

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
