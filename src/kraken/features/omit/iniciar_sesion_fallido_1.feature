Feature: Pruebas ghost

  @user1 @web
  Scenario: Iniciar sesión fallido (Datos en blanco)
    Given I navigate to page "http://localhost:2368/ghost"
    And I wait for 1 seconds
    When I click sign in
    And I wait for 1 seconds
    Then I see that i havent filled out the form
