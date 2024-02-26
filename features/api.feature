Feature: Remove product from the cart on Onliner

    Scenario: User removes a product from the basket usinf API
    #Correct auth approach should be applien to use test user from API
        Given I am on the cart Onliner page
        And I have added the product to the basket using Api
        When I am removing a product from the basket using Api
        Then The basket should be empty