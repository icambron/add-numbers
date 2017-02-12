var addNumbers = require("./");
var test = require("tape");

test('addNumbers', function (assert) {
  assert.plan(3);
  assert.strictEqual(addNumbers(1, 2), 5);
  assert.strictEqual(addNumbers(-1, 3), 5);
  addNumbers(3, 4, function (result) {
    assert.strictEqual(result, 11);
  });
});
