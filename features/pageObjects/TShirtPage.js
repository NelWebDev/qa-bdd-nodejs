export default class TShirtPage {
    constructor(page) {
      this.page = page;
      this.sizeFilterSelector = '.checkmark';
      this.tShirtTitleSelector = '.shelf-item__title';
      this.addToCartButtonSelector = '.shelf-item__buy-btn';
      this.cartQuantitySelector = '.bag__quantity';
      this.deleteButtonSelector = '.shelf-item__del';
    }
  
    async filterBySize(size) {
      await this.page.waitForSelector(this.sizeFilterSelector);
      const buttons = await this.page.$$(this.sizeFilterSelector);
      for (let button of buttons) {
        const buttonText = await this.page.evaluate((el) => el.textContent.trim(), button);
        if (buttonText === size) {
          await button.click();
          return;
        }
      }
      throw new Error(`Size filter "${size}" not found`);
    }
  
    async getDisplayedTShirts() {
      await this.page.waitForSelector(this.tShirtTitleSelector);
      return this.page.$$eval(this.tShirtTitleSelector, (elements) =>
        elements.map((el) => el.textContent.trim())
      );
    }
  
    async addToCart() {
      await this.page.waitForSelector(this.addToCartButtonSelector);
      const buttons = await this.page.$$(this.addToCartButtonSelector);
      await buttons[0].click();
    }
  
    async getCartQuantity() {
      await this.page.waitForSelector(this.cartQuantitySelector);
      const quantityText = await this.page.$eval(this.cartQuantitySelector, (el) => el.textContent.trim());
      return quantityText;
    }
  
    async removeItemFromCart() {
      await this.page.waitForSelector(this.deleteButtonSelector);
      const buttons = await this.page.$$(this.deleteButtonSelector);
      if (buttons.length > 0) {
        await buttons[0].click(); // Click on the first delete button
      } else {
        throw new Error('No items found in the cart to remove');
      }
    }
  }
  