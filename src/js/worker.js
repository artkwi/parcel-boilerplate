onmessage = function(message) {
  console.log(message);
  let sum = 0;
  for (let i = 0; i < 10000000000; i++) {
    sum++;
  }
  this.postMessage(sum);
}