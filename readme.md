# Cypress v9 Project

This project uses [Cypress](https://docs.cypress.io/) v9 for end-to-end testing.

## 📦 Prerequisites

- Node.js (v12 or v14 recommended for Cypress v9)
- npm or yarn
- Git (optional, for cloning the repo)

## 🚀 Installation

1. Clone the repository:

```bash
```git clone https://github.com/normanlirio/cypress-test.git```p;5567
cd your-repo-name

Install dependencies:
npm install

yarn install

Running Tests
Run in Cypress Test Runner (UI Mode)
npx cypress open


Select a spec file to start the test run.

Run in Headless Mode

npm run headless:test

Run in Headed Mode

npm run headed:test


Test Run recording
https://drive.google.com/file/d/1Hz-CeWJO_3tbwiQVnDSEX5gNEpvuiXqU/view?usp=sharing

Notes:
1. Test fails intermittently due to carousel doesn't load within expected time
2. Unable to proceed to order summary due to captcha