var addNumbers = require("./");
var test = require("tape");

test('addNumbers', function (assert) {
  assert.plan(3);
  assert.strictEqual(addNumbers(1, 2), 3)
  assert.strictEqual(addNumbers(-1, 3), 2)
  addNumbers(3, 4, function (result) {
    assert.strictEqual(result, 7);
  });
});
