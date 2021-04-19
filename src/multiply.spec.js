import test from 'jest-gwt';
import multiply from './multiply';

describe('multiply', () => {
  test('positive numbers', {
    given: {
      POSITIVE_multiplier,
      POSITIVE_multiplicand,
    },
    when: {
      multiplying_numbers,
    },
    then: {
      product_is_POSITIVE,
    },
  });

  test('negative multiplier', {
    given: {
      NEGATIVE_multiplier,
      POSITIVE_multiplicand,
    },
    when: {
      multiplying_numbers,
    },
    then: {
      product_is_NEGATIVE,
    },
  });

  test('negative multiplicand', {
    given: {
      POSITIVE_multiplier,
      NEGATIVE_multiplicand,
    },
    when: {
      multiplying_numbers,
    },
    then: {
      product_is_NEGATIVE,
    },
  });

  test('negative numbers', {
    given: {
      NEGATIVE_multiplier,
      NEGATIVE_multiplicand,
    },
    when: {
      multiplying_numbers,
    },
    then: {
      product_is_POSITIVE,
    },
  });

  test('zero multiplier', {
    given: {
      ZERO_multiplier,
      any_multiplicand,
    },
    when: {
      multiplying_numbers,
    },
    then: {
      product_is_ZERO,
    },
  });

  test('zero multiplicand', {
    given: {
      any_multiplier,
      ZERO_multiplicand,
    },
    when: {
      multiplying_numbers,
    },
    then: {
      product_is_ZERO,
    },
  });
});

function POSITIVE_multiplier() {
  this.multiplier = 5;
}

function NEGATIVE_multiplier() {
  this.multiplier = -5;
}

function ZERO_multiplier() {
  this.multiplier = 0;
}

function any_multiplier() {
  this.multiplier = 5;
}

function POSITIVE_multiplicand() {
  this.multiplicand = 3;
}

function NEGATIVE_multiplicand() {
  this.multiplicand = -3;
}

function ZERO_multiplicand() {
  this.multiplicand = 0;
}

function any_multiplicand() {
  this.multiplicand = 5;
}

function multiplying_numbers() {
  this.product = multiply(this.multiplier, this.multiplicand);
}

function product_is_POSITIVE() {
  expect(this.product).toBe(15);
}

function product_is_NEGATIVE() {
  expect(this.product).toBe(-15);
}

function product_is_ZERO() {
  expect(this.product).toBe(0);
}
