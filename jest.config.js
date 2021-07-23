module.exports = {
  verbose: true,
  collectCoverage: true,
  coverageReporters: ['lcov', 'text', 'text-summary'],
  transformIgnorePatterns: ['<rootDir>/node_modules'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  snapshotSerializers: ['jest-serializer-vue'],
  moduleFileExtensions: [
    'vue',
    'js',
    'ts'
  ],

  transform: {
    '.*\\.vue$': 'vue-jest',
    '.*\\.ts$': 'ts-jest',
    '.+\\.(css|scss|svg|png|jpg|jpeg|ttf|woff|woff2)$': 'jest-transform-stub'
  },

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@@/(.*)$': '<rootDir>/src/modules/$1',
    '^atoms': '<rootDir>/src/components/atoms',
    '^molecules': '<rootDir>/src/components/molecules',
    '^organisms': '<rootDir>/src/components/organisms',
    '^templates': '<rootDir>/src/components/templates'
  },

  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ]
}
