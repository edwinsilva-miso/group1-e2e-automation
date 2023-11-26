Feature: Pruebas ghost

  @user1 @web
  Scenario: Crear un Tag fallido (No se llena el formulario) v4
    Given I navigate to page "<GHOST_URLV4>"
    And I wait for 7 seconds
    When I enter email v4 "<ADMIN_EMAIL>"
    And I enter password v4 "<ADMIN_PASSWORD>"
    And I click sign in v4
    And I wait for 2 seconds
    Then I click to page tag button
    And I wait for 10 seconds
    And I click new Tag
    And I wait for 2 seconds
    And I click save v4
    And I wait for 5 seconds