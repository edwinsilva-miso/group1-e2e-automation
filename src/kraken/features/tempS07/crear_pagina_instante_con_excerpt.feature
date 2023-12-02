Feature: Pruebas ghost

  @user1 @web
  Scenario: Crear página basica (Error en Excerpt- se excede cantidad de caracrtees +300)
    Given I navigate to page "<GHOST_URL>"
    And I wait for 5 seconds
    When I enter email "<ADMIN_EMAIL>"
    And I enter password "<ADMIN_PASSWORD>"
    And I click sign in
    And I wait for 2 seconds
    And I click to pages button
    And I wait for 2 seconds
    And I click new page
    And I wait for 2 seconds
    And I add a page title
    And I wait for 1 seconds
    And I add a page text
    And I wait for 1 seconds
    And I click setting button
    And I wait for 1 seconds
    And I add text in Excerpt
    And I wait for 2 seconds
    And I click setting button
    And I wait for 1 seconds
    And I click publish button
    And I wait for 1 seconds

