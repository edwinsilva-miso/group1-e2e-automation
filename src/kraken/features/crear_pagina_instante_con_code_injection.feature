Feature: Pruebas ghost

  @user1 @web
  Scenario: Crear un pagina al instaante exitoso (Con Inyección de códgio)
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
    And I click code injection option
    And I wait for 1 seconds
    And I add a tag header 2
    And I wait for 1 seconds
    And I add a tag footer 2


