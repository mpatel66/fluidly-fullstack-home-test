module.exports = function assertEquals (expected, actual) {

  if (Array.isArray(expected)) {
    if (!Array.isArray(actual)) throw new Error(`Expected type array but found type ${typeof actual}`);
    else if (expected.length !== actual.length) throw new Error(`Expected array length ${expected.length} but found ${actual.length}`);
    else {
      const match = expected.every((item, index) => actual[index] === item);
      if (!match) throw new Error(`Expected ${expected} but found ${actual}`);
      return match;
    }
  }

  if (expected !== actual) throw new Error(`Expected ${expected} but found ${actual}`);

};