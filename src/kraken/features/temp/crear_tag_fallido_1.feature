Feature: Pruebas ghost

  @user1 @web
  Scenario: Crear un Tag fallido (No se llena el formulario)
    Given I navigate to page "<GHOST_URL>"
    And I wait for 7 seconds
    When I enter email "<ADMIN_EMAIL>"
    And I enter password "<ADMIN_PASSWORD>"
    And I click sign in
    And I wait for 2 seconds
    Then I click to page tag button
    And I wait for 10 seconds
    And I click new Tag
    And I wait for 2 seconds
    And I click save
    And I wait for 5 seconds