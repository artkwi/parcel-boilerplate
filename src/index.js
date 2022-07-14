import 'reset-css';
import Parallax from 'parallax-js'
import './js/timer';
import { BookBuilder } from './js/BookBuilder';
import { RadioModel } from './js/ObserverPattern/RadioModel';
import { ClientObserver } from './js/ObserverPattern/ClientObserver';

// let scene = document.querySelector('#scene');
// let sceneImage = document.querySelector('.scene__image-wrapper');
// let parallaxInstance = new Parallax(scene, {
//   relativeInput: true,
// });
// let parallaxInstanceImage = new Parallax(sceneImage, {
//   relativeInput: true,
// });

// custom cursor
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
  requestAnimationFrame(
    () => {
      cursor.setAttribute('style', `left: ${e.pageX}px; top: ${e.pageY}px;`);
    }, 1000
  )
})

// my parallax
let scene = document.querySelector('#scene');
let sceneIMage = document.querySelector('.scene__image');

document.addEventListener('mousemove', (e) => {
  const addTranslate = (layer) => {
    const speed = layer.getAttribute('data-depth');
    const x = (window.innerWidth/2 - e.pageX)*speed/10;
    const y = (window.innerHeight/2 - e.pageY)*speed/10;
  
    layer.style.transform = `translate(${x}px, ${y}px)`;

    if (x < 0) {
      layer.style.borderLeft= `1px solid red`;
    } else {
      layer.style.borderLeft= `1px solid green`;
    } 
  } 

  Array.from(scene.children).forEach(layer => addTranslate(layer));

  addTranslate(sceneIMage);
  
})


// try setTimeout

const x = () => {
  let i = 1;
  setTimeout(() => {
    console.log('i1',i);
  }, 1000);
  i = 2;
  console.log('i2',i);
}

x();

// Book test - Builder Design Pattern
const book = new BookBuilder().setPages(123).setCoverColor('yellow').build();
console.log('book', book);

// Observer Pattern
const radioModel = new RadioModel();
const clientObserver1 = new ClientObserver();
radioModel.subscribe(clientObserver1);
radioModel.notify();

// Service Worker
const worker = new Worker('./js/worker.js');
const buttonWorkerEl = document.getElementById('button-worker');
buttonWorkerEl.onclick = function() {
  // it blocks user IU
  // let sum = 0;
  // for (let i = 0; i < 10000000000; i++) {
  //   sum++;
  // }

  // it does not block user IU
  // computing is moved to service worker - another thread
  worker.postMessage('Test');
}

worker.onmessage = function(message) {
  console.log(message);
}