export class ClientObserver {
  constructor() { }

  update(model) {
    console.log('I recived message: ', model.message )
  }
}