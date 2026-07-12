export const config = {
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://front.serverest.dev',
      show: process.env.HEADLESS !== 'true',
      headless: process.env.HEADLESS === 'true',
      slowMo: 500,
      smartWait: 10000,
      navigationTimeout: 60000,
      waitForNavigation: 'networkidle'
    }
  },
  include: {
    I: './steps_file.js'
  },
  mocha: {
    reporterOptions: {
      reportDir: 'output',
      reportFilename: 'report',
      html: true,
      json: true
    }
  },
  bootstrap: null,
  timeout: 60,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshot: {
      enabled: true,
      on: 'fail'
    },
    screenshotOnFail: {
      enabled: true
    }
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: './tests/*_test.js',
  noGlobals: true,
  name: 'automacao-web-codeceptJS'
}