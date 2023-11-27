Feature: Pruebas ghost

  @user1 @web
  Scenario: Crear un pagina exitoso (Con x title)
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
    And I click x data option
    And I wait for 1 seconds
    And I add a x title
    And I wait for 1 seconds
