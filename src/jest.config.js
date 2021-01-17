module.exports = {
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.config.js',
    '!**/*.next.config.js',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/coverage/**',
    '!**/lib/**',
    '!**/config/**',
    '!**/pages/**',
    '!**/components/**',
    '!**/modules/promo/form/promo-products/products-modal/attributes/**',
    '!**/modules/promo/form/promo-products/products-modal/sku/item-table/attributes-items.js',
    '!**/modules/promo/helper/attributes.js',
    '!**/modules/promo/form/promo-title/generate-promo-codes.js',
    '!**/mock-data/**',
    '!**/src/**',
    '!**/styles.js',
    '!**/store/**',
    '!**/general-config.js',
    '!**/hooks/**'
  ],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/.next/',
    '/config/',
    '/lib/',
    '/coverage/',
    '/components/',
    '/pages/',
    '/mock-data/',
    '/src/',
    '/store'
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest'
  },
  transformIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  reporters: [
    'default',
    [
      './node_modules/jest-html-reporter',
      {
        pageTitle: 'Test Report'
      }
    ]
  ]
}
