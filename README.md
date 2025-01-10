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
