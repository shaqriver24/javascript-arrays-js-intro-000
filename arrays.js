var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var array = ["foo", 1];
  [element, ...array];
  return array;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var array = [1];
  array.unshift("foo")
  return array
}

function addElementToEndOfArray(array, element) {
  var array = [1, "foo"];
  [...array, element]
  return array
}
