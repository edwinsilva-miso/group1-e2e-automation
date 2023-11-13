Feature: Pruebas ghost

  @user1 @web
  Scenario: Iniciar sesión fallido (Datos incorrectos)
    Given I navigate to page "http://localhost:2368/ghost"
    And I wait for 1 seconds
    When I enter email "<ADMIN_EMAIL>"
    And I wait for 1 seconds
    And I enter password "$string_1"
    And I wait for 1 seconds
    And I click sign in
    And I wait for 1 seconds
    Then I see that the credentials are incorrect
