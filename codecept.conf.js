export const config = {
  tests: './tests/*_test.js',
  output: './output',
  timeout: 60,  // 👈 60 segundos

  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://front.serverest.dev',
      show: false,
      headless: true,
      slowMo: 500,
      smartWait: 10000,  // 👈 10 segundos
      navigationTimeout: 60000,  // 👈 60 segundos
      waitForNavigation: 'networkidle'
    },
    REST: {
      endpoint: 'https://serverest.dev',
      defaultHeaders: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
  },

  include: {
    I: './steps_file.js'
  },

  noGlobals: true,
  plugins: {},
  name: 'automacao-web-codeceptJS'
};