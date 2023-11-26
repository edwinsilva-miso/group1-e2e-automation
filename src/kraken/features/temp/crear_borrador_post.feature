Feature: Pruebas ghost

  @user1 @web
  Scenario: Crear borrador de post
    Given I navigate to page "<GHOST_URL>"
    And I wait for 5 seconds
    When I enter email "<ADMIN_EMAIL>"
    And I enter password "<ADMIN_PASSWORD>"
    And I click sign in
    And I wait for 2 seconds
    And I click to Post button
    And I wait for 2 seconds
    And I click New post button
    And I wait for 2 seconds
    And I add a Post title
    And I add a Post text
    And I wait for 2 seconds
    And I click to Post button2
    And I wait for 5 seconds
