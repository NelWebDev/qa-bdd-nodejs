Feature: T-Shirt Store Automation

  Scenario: Verify the title of the website
    Given I open the website
    Then the title of the page should be "React Shopping Cart"

  Scenario: Filter t-shirts by size M
    Given I open the website
    When I filter the t-shirts by size "M"
    Then the t-shirt list should display "Black Tule Oversized"

  Scenario: Add to cart a t-shirt
    Given I open the website
    When I filter the t-shirts by size "M"
    When I add a t-shirt to the cart
    Then the bag quantity is "1"

  Scenario: Empty the cart
    Given I open the website
    When I add a t-shirt to the cart
    Then the bag quantity is "1"
    When I press the delete button on the cart
    Then the bag quantity is "0"
