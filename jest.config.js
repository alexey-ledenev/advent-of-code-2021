module.exports = {
  testEnvironment: 'node',
  testMatch: ['<rootDir>/src/**/*(*.)@(test).ts'],
  testPathIgnorePatterns: ['/node_modules/'],
  transform: { '^.+\\.(ts)$': 'ts-jest' },
}
