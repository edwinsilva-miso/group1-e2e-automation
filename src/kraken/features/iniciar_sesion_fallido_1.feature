Feature: Pruebas ghost

  @user1 @web
  Scenario: Iniciar sesión fallido (Datos en blanco)
    Given I navigate to page "<GHOST_URL>"
    And I wait for 1 seconds
    When I click sign in
    And I wait for 1 seconds
    Then I see that i havent filled out the form
