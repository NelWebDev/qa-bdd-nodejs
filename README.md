# QA Automation with BDD in Node.js

This project is a QA automation framework built with Node.js using BDD (Behavior-Driven Development) principles. It leverages Cucumber.js and Puppeteer to perform automated tests on a local t-shirt store application running at `http://localhost:3001`.

## Features

- BDD with Gherkin syntax for clear and readable test scenarios.
- Puppeteer for browser automation and interaction.
- Test cases for core functionalities:
  - Verifying the website's title.
  - Filtering t-shirts by size.
  - Adding items to the shopping cart.
  - Removing items from the shopping cart.

## Project Structure

```plaintext
qa-auto-bdd/
├── features/                     # Contains Gherkin feature files and step definitions
│   ├── web-title.feature         # Feature file for scenarios
│   └── steps_definitions/        # Step definitions for the feature file
│       └── web-title.steps.js
├── package.json                  # Project metadata and dependencies
├── package-lock.json             # Ensures dependency version consistency
├── README.md                     # Project documentation
└── .gitignore                    # Files and directories to exclude from


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

