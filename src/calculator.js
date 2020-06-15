exports._check = (x) => {
  // DRY up the codebase with this function
  // First, move the duplicate error checking code here
  // Then, invoke this function inside each of the others
  // HINT: you can invoke this function with exports._check()
  if(typeof x !== 'number')
  {
   throw new TypeError(`${x} is not a number`);
  }
};

exports.add = (x, y) => {
  export._check(x);
  export._check(y);
  return x + y;
};

exports.subtract = (x, y) => {
  export._check(x);
  export._check(y);
  return x - y;
};

exports.multiply = (x, y) => {
  export._check(x);
  export._check(y);
  return x * y;
};

exports.divide = (x, y) => {
  export._check(x);
  export._check(y);
  return x / y;
};

module.exports = exports;
