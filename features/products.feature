Feature: Onliner Product Search

  Scenario: User searches for a product
    Given I am on the main Onliner page
    When I enter iPhone in the search bar
    Then I should see search results for iPhone

  Scenario: User adds a product to the cart
    Given I am on the main Onliner page
    When I enter Macbook in the search bar
    And I click on the first search result
    And I add first product to the basket
    Then The product added to basket message should be displayed