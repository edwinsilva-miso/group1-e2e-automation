Feature: Pruebas ghost

  @user1 @web
  Scenario: Crear página con publicación al instante v4
    Given I navigate to page "<GHOST_URLV4>"
    And I wait for 5 seconds
    When I enter email v4 "<ADMIN_EMAIL>"
    And I enter password v4 "<ADMIN_PASSWORD>"
    And I click sign in v4
    And I wait for 2 seconds
    And I click to pages button
    And I wait for 2 seconds
    And I click new page
    And I wait for 2 seconds
    And I add a page title
    And I add a page text
    And I wait for 2 seconds
    And I click publish button v4
    And I wait for 2 seconds
    And I click publish button v4
    And I wait for 2 seconds
    And I click to pages button
    And I wait for 5 seconds