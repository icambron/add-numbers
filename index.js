module.exports = addNumbers;

function addNumbers(first, second, callback) {
  if (callback) {
    setImmediate(function () { callback(addNumbers(first, second)); });
  } else {
    return first + second;
  }
}
