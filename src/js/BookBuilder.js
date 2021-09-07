import { Book } from "./Book";

export class BookBuilder {
  constructor() {
    this.coverType = 'soft';
    this.coverColor = 'red';
    this.pages = 100;
  }

  setCoverType(newType) {
    this.coverType = newType;
    return this;
  }

  setCoverColor(newCoverColor) {
    this.coverColor = newCoverColor;
    return this;
  }
  
  setPages(newPages) {
    this.pages = newPages;
    return this;
  }

  build() {
    return new Book(this);
  }
}