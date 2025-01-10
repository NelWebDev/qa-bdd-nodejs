import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from 'chai';
import puppeteer from 'puppeteer';

let browser, page;

Given('I open the website', async function () {
  browser = await puppeteer.launch({ headless: false });
  page = await browser.newPage();
  await page.goto('http://localhost:3001');
});

Then('the title of the page should be {string}', async function (expectedTitle) {
  const title = await page.title();
  expect(title).to.equal(expectedTitle);
  await browser.close();
});

When('I filter the t-shirts by size {string}', async function (size) {
  await page.waitForSelector('.checkmark');
  const buttons = await page.$$('.checkmark');

  for (let button of buttons) {
    const buttonText = await page.evaluate((el) => el.textContent.trim(), button);
    if (buttonText === size) {
      await button.click();
      return;
    }
  }
  throw new Error(`Size filter "${size}" not found`);
});

Then('the t-shirt list should display {string}', async function (expectedTitle) {
  await page.waitForFunction(
    (title) => {
      const elements = Array.from(document.querySelectorAll('.shelf-item__title'));
      return elements.some((el) => el.textContent.trim() === title);
    },
    {}, 
    expectedTitle
  );

  const tshirtTitles = await page.$$eval('.shelf-item__title', (elements) =>
    elements.map((el) => el.textContent.trim())
  );

  expect(tshirtTitles).to.include(expectedTitle);
});

Then('the bag quantity is {string}', async function (expectedQuantity) {
  await page.waitForFunction(
    (quantity) => {
      const bagElement = document.querySelector('.bag__quantity');
      return bagElement && bagElement.textContent.trim() === quantity;
    },
    {},
    expectedQuantity
  );
});

When('I add a t-shirt to the cart', async function () {
  await page.waitForSelector('.shelf-item__buy-btn');
  const addToCartButton = await page.$('.shelf-item__buy-btn');
  if (addToCartButton) {
    await addToCartButton.click();
  } else {
    throw new Error('Add to Cart button not found');
  }
});

When('I press the delete button on the cart', async function () {
  await page.waitForSelector('.shelf-item__del');
  const deleteButton = await page.$('.shelf-item__del');
  if (deleteButton) {
    await deleteButton.click();
  } else {
    throw new Error('Delete button not found');
  }
});

