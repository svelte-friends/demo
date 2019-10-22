module.exports = {
  testPathIgnorePatterns: ['/node_modules/', '/cypress/'],
  transform: {
    '^.+\\.svelte$': 'svelte-test/transform',
    '^.+\\.js$': 'babel-jest',
    '^.+\\.ts$': 'ts-jest',
  },
  moduleFileExtensions: ['js', 'svelte', 'ts'],
  globals: {
    svelte: {
      compilerOptions: {
        accessors: true,
      },
    },
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"]
};