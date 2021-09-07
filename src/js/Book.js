export class Book {
  constructor(bookBuilder) {
    this.coverType = bookBuilder.coverType;
    this.coverColor = bookBuilder.coverColor;
    this.pages = bookBuilder.pages;
  }
}