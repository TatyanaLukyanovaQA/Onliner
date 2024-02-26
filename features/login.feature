Feature: Onliner Login

  Scenario: User can log in with valid credentials
    Given I am on the main Onliner page
    When I open login page
    And I login as Test User
    #Manually need go throught capture
    Then I should be logged in successfully