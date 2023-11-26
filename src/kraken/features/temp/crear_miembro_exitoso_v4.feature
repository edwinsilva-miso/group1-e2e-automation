Feature: Pruebas ghost

  @user1 @web
  Scenario: Crear un miembro exitoso v4
    Given I navigate to page "<GHOST_URLV4>"
    And I wait for 1 seconds
    When I enter email v4 "<ADMIN_EMAIL>"
    And I wait for 1 seconds
    And I enter password v4 "<ADMIN_PASSWORD>"
    And I wait for 1 seconds
    And I click sign in v4
    And I wait for 1 seconds
    And I click to member button
    And I wait for 1 seconds
    And I click new member
    And I wait for 1 seconds
    And I enter name "$name_1"
    And I wait for 1 seconds
    And I enter member email "$email_1"
    And I wait for 1 seconds
    And I click save member v4
    And I wait for 2 seconds
    Then I see that the member was created with the name "$$name_1" and email "$$email_1"
