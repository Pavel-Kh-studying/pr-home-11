'use strict';

//Реализовать функцию конструктор MyArray.

//Реализовать следующие методы функции конструктора:
//MyArray.isMyArray();  // подсказка: instanceof

//Реализовать прототип для создаваемых коллекций, со следующими методами:
//MyArray.prototype.push();
//MyArray.prototype.pop(); // tip: delete
//MyArray.prototype.unshift();
//MyArray.prototype.shift();

//MyArray.prototype.concat();
//MyArray.prototype.reverse();

// advanced
//MyArray.prototype.forEach();
//MyArray.prototype.map();


function MyArray() {
  this.length = 0;
  this.isMyArray = function isMyArray() {
    if (this instanceof MyArray) {
      return true;
    }
    return false;
  }
}

function MyArrayPrototype() {
  this.push = function push(pushArray) {
    for (let i = 0; i < pushArray.length; i++) {
      this[this.length] = pushArray[i];
      ++this.length;
    }
    return this.length;
  }
  this.pop = function pop() {
    const lastItem = this[this.length - 1];
    delete this[--this.length];
    return lastItem;
  }
  this.unshift = function unshift(unshiftArray) {
    for (let i = (this.length + unshiftArray.length - 1); i >= unshiftArray.length; i--) {
      this[i] = this[i - unshiftArray.length];
    }
    for (let i = 0; i < unshiftArray.length; i++) {
      this[i] = unshiftArray[i];
    }
    return this.length;
  }
  this.shift = function shift() {
    const firstItem = this[0];
    delete this[0];
    for (let i = 1; i < this.length; i++) {
      this[i - 1] = this[i];
    }
    delete this[--this.length];
    return firstItem;
  }
  this.concat = function concat(concatArray) {
    for (let i = 0; i < concatArray.length; i++) {
      this[this.length + i] = concatArray[i];
    }
    return this;
  }
  this.reverse = function reverse() {
    const reversedArray = [];
    for (let i = 0; i < this.length; i++) {
      reversedArray[i] = this[this.length - 1 - i];
    }
    return reversedArray;
  }
  this.forEach = function forEach() {
    
  }
  this.map = function map() {
    
  }
}

MyArray.prototype = new MyArrayPrototype();

const array = new MyArray();