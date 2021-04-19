# Testing - The jest.config.js File

```javascript
module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,
  // Indicates whether the coverage information should be collected while
  // executing the test
  // collectCoverage: false, // we don't want vscode runner producing coverage

  // An array of glob patterns indicating a set of files for which coverage
  // information should be collected
  collectCoverageFrom: [
    '!src/**/styles.js',
  ],
  // The directory where Jest should output its coverage files
  coverageDirectory: '.build/coverage',
  // A list of paths to directories that Jest should use to search for files in
  roots: [
    './src',
  ],
  // The test environment that will be used for testing
  testEnvironment: 'node',
};
```

## clearMocks: boolean
Clears jest mock implementations without requiring you to remock them.
Different than `resetMocks: true` as the mocks are _gone_ with reset,
requiring you to `jest.mock('package-ref')` again.

## collectCoverageFrom: Array<string>
Which paths to collect coverage from. Uses glob patterns including negation.
We don't want to include styles files in the coverage, so let's just globally
ignore them.

## roots: Array<string>
What paths to include when searching for tests. We don't want to accidentally
find test that aren't ours.

## testEnvironment: string
What environment to use for tests that don't specify. Node is the fastest and
doesn't load unnecessary things. `jsdom` is used for tests requiring a dom.
More on this later.