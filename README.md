# QA Automation with BDD in Node.js

This project is a QA automation framework using Node.js, Cucumber.js, and Puppeteer for BDD (Behavior-Driven Development) testing. It interacts with a local t-shirt store application hosted at `http://localhost:3001`.

## Features
- **Clear Gherkin-syntax** for BDD test scenarios.
- **Puppeteer integration** for browser automation.
- **Reusable Page Objects** for selectors and actions.
- Comprehensive tests:
  - Verify website title.
  - Filter t-shirts by size.
  - Add and remove items from the cart.

## Project Structure
```plaintext
qa-auto-bdd/
├── features/                     # Gherkin feature files and step definitions
│   ├── web-title.feature         # Feature scenarios
│   ├── pageObjects/              # Page Object models
│   │   └── TShirtPage.js         # Actions and selectors for the t-shirt page
│   ├── steps_definitions/        # Step definitions
│   │   └── web-title.steps.js    # Steps implementing scenarios
├── config.js                     # Configuration for URL and shared constants
├── package.json                  # Project metadata
├── README.md                     # Project documentation
└── .gitignore                    # Files to exclude

## Installation

To get started with this project, you need to have the following installed:

1. **Node.js** (v16.16.0 or later): Download and install it from [nodejs.org](https://nodejs.org/).
2. **Git**: Download and install it from [git-scm.com](https://git-scm.com/).

Once you have Node.js and Git installed, follow these steps:

1. Clone the repository:

    git clone https://github.com/NelWebDev/qa-bdd-nodejs.git
    cd your-repository-name

2. Install dependencies using npm:

    npm install

## Running the Project

To launch the local server for testing (assuming you are running the website locally with Docker on `http://localhost:3001/`), follow these steps:

1. If you're using Docker, ensure that the container is running the web application (t-shirt store).
2. Open the web application in Chrome and make sure it is accessible at [http://localhost:3001]

Make sure the website is up and running before executing the tests.

## Running Tests

To run the tests, use the following command:

npx cucumber-js

