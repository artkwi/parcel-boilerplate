export class RadioModel {
  constructor() {
    this.observers = [];
    this.message = 'Hello!';
  }

  // subscribe, register or addObserver
  subscribe(observer) {
    this.observers.push(observer);
  }

  // unsubscribe, unregister or removeObserver
  unsubscribe(observer) {
    this.observers = this.observers.filter((currentObserver) !== observer);
  }

  notify() {
    for (const observer of this.observers) {
      observer.update(this);
    }
  }
}