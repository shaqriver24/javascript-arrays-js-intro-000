var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var array = ["foo", 1];
  [element, ...array];
  return array;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  const array = [1];
  const array = [element, ...array]
  return array
}
