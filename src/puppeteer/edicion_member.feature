Feature: Pruebas ghost

  @user1 @web
  Scenario: Edicion member
    Given I navigate to page "config.urlGhostNew"
    And I wait for 5 seconds
    When I enter email "config.username"
    And I enter password "config.password"
    And I click sign in
    And I wait for 7 seconds
    And I click to member button
    And I wait for 7 seconds
    And I click on first member in the list
    And I wait for 7 seconds
    And I take a screenshot
    And I click 3 times in member name
    And I click Backspace in the keyboard
    And I click 3 times in member email
    And I click Backspace in the keyboard
    And I add a member name
    And I add a member email
    And I click save
    And I wait for 7 seconds
    And I take a screenshot
    And I click member
    And I wait for 7 seconds
    And I take a screenshot
    Then I the member was changed