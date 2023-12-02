Feature: Pruebas ghost

  @user1 @web
  Scenario: Creacion Member fallido (Nombre demasiado largo)
    Given I navigate to page "config.urlGhostNew"
    And I wait for 5 seconds
    When I enter email "config.username"
    And I enter password "config.password"
    And I click sign in
    And I wait for 7 seconds
    And I click to member button
    And I wait for 7 seconds
    And I click new member
    And I wait for 7 seconds
    And I take a screenshot
    And I add a member name longer than 125 characters
    And I add a member email
    And I click save
    And I wait for 7 seconds
    And I take a screenshot
    Then I see the name input have a notification of the error regarding the name is too long