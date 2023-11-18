Feature: Pruebas ghost

  @user1 @web
  Scenario: Crear borrador de post v4
    Given I navigate to page "<GHOST_URLV4>"
    And I wait for 5 seconds
    When I enter email v4 "<ADMIN_EMAIL>"
    And I enter password v4 "<ADMIN_PASSWORD>"
    And I click sign in v4
    And I wait for 2 seconds
    And I click to Post button
    And I wait for 2 seconds
    And I click New post button
    And I wait for 2 seconds
    And I add a Post title
    And I add a Post text
    And I wait for 2 seconds
    And I click back to Post
    And I wait for 5 seconds