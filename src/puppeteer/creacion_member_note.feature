Feature: Pruebas ghost

  @user1 @web
  Scenario: Creacion Member fallido ( Note Demasiado largo)
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
    And I add a member name
    And I add a member email
    And I add a member note more than 500 characters
    And I click save
    And I wait for 7 seconds
    And I take a screenshot
    Then I see the member note have a notification error regarding the note typed is too long