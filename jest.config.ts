/* eslint-disable */
export default {
  displayName: 'currency',
  preset: 'ts-jest',
  moduleFileExtensions: ['ts', 'js'],
  coveragePathIgnorePatterns: ['/node_modules/', '/cypress/'],
  coverageDirectory: 'coverage/currency',
  moduleNameMapper: {
    '^root$': '<rootDir>/src/app',
    '^root/(.*)$': '<rootDir>/src/$1',
  },
};