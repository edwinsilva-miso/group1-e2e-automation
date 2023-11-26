Feature: Pruebas ghost

  @user1 @web
  Scenario: Crear tag interno existoso v4
    Given I navigate to page "<GHOST_URLV4>"
    And I wait for 5 seconds
    When I enter email v4 "<ADMIN_EMAIL>"
    And I enter password v4 "<ADMIN_PASSWORD>"
    And I click sign in v4
    And I wait for 2 seconds
    Then I click to page tag button
    And I wait for 2 seconds
    And I click internal tag button v4
    And I wait for 2 seconds
    And I click new Tag
    And I wait for 2 seconds
    And I add Tag name
    And I wait for 2 seconds
    And I add Tag color
    And I wait for 2 seconds
    And I add Tag description
    And I wait for 2 seconds
    And I click save v4
    And I wait for 5 seconds