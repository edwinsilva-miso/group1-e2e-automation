Feature: Pruebas ghost

  @user1 @web
  Scenario: Edicion tag
    Given I navigate to page "config.urlGhostNew"
    And I wait for 5 seconds
    When I enter email "config.username"
    And I enter password "config.password"
    And I click sign in
    And I wait for 7 seconds
    And I click to tags button
    And I wait for 7 seconds
    And I click in the first tag in the list
    And I wait for 7 seconds
    And I change the tag name
    And I change tag description
    And I click save
    And I wait for 7 seconds
    And I click tags
    And I wait for 7 seconds
    And I take a screenshot
    Then I see the tag was edited