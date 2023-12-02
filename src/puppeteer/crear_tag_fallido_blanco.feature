Feature: Pruebas ghost

  @user1 @web
  Scenario: Creacion de tag Fallido (No se llena Formulario)
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
    And I click save
    And I wait for 7 seconds
    And I take a screenshot
    Then I see the name input has a notification error that it is required for the operation