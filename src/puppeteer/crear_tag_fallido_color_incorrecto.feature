Feature: Pruebas ghost

  @user1 @web
  Scenario: Creacion de tag Fallido (Color Formato incorrecto)
    Given I navigate to page "config.urlGhostNew"
    And I wait for 5 seconds
    When I enter email "config.username"
    And I enter password "config.password"
    And I click sign in
    And I wait for 7 seconds
    And I click to tags button
    And I wait for 7 seconds
    And I take a screenshot
    And I click new tag
    And I wait for 7 seconds
    And I add a tag name
    And I add a tag accentColor (the full text with the # prefix)
    And I add a tag description
    And I click save
    And I take a screenshot
    Then I see the accentColor input has a notification error regarding the color format