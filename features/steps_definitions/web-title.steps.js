import { Given, Then, When, After } from '@cucumber/cucumber';
import { expect } from 'chai';
import puppeteer from 'puppeteer';
import TShirtPage from '../pageObjects/TShirtPage.js';
import config from '../../config.js';


let browser, page, tShirtPage;

Given('I open the website', async function () {
  browser = await puppeteer.launch({ headless: false });
  page = await browser.newPage();
  tShirtPage = new TShirtPage(page);
  await page.goto(config.BASE_URL);
});

Then('the title of the page should be {string}', async function (expectedTitle) {
  const actualTitle = await page.title();
  expect(actualTitle).to.equal(expectedTitle);
});

When('I filter the t-shirts by size {string}', async function (size) {
  await tShirtPage.filterBySize(size);
});

Then('the t-shirt list should display {string}', async function (expectedTShirt) {
  const displayedTShirts = await tShirtPage.getDisplayedTShirts();
  expect(displayedTShirts).to.include(expectedTShirt);
});

When('I add a t-shirt to the cart', async function () {
  await tShirtPage.addToCart();
});

Then('the bag quantity is {string}', async function (expectedQuantity) {
  const actualQuantity = await tShirtPage.getCartQuantity();
  expect(actualQuantity).to.equal(expectedQuantity);
});

When('I press the delete button on the cart', async function () {
  await tShirtPage.removeItemFromCart();
});

After(async function () {
  await browser.close();
});
