"use strict";

export function removeElement(arr, el) {
  while (arr.includes(el)) {
    arr.splice(arr.indexOf(el), 1);
  }

  return arr;
}
