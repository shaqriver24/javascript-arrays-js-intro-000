var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var array = ["foo", 1];
  [element, ...array];
  return array;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var array = [1];
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  var array = [1, "foo"];
  [...array, element]
  return array
}

function destructivelyAddElementToEndOfArray(array, element) {
  var array = [1]
  array.push(element)
  return array
}

function accessElementInArray(array, index){
  var = array[1, 2, 3]

  return array[index]
}
