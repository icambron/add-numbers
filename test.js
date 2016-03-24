var addNumbers = require("./");
var test = require("tape");

test('addNumbers', function (assert) {
  assert.plan(2);
  assert.strictEqual(addNumbers(1, 2), 3);
  assert.strictEqual(addNumbers(-1, 3), 2);
});
