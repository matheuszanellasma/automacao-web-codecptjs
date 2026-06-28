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
    }

  },
  mocha: {
    reporterOptions: {
      reportDir: 'output',
      reportFilename: 'report',
      html: true,
      json: true
    }
  },
  include: {
    I: './steps_file.js'
  },

  noGlobals: true,
  plugins: {

    html: {
      enabled: true,
      outputDir: 'output/'
    }
  },
  name: 'automacao-web-codeceptJS'
};