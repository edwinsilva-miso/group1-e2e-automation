Feature: Pruebas ghost

  @user1 @web
  Scenario: Crear un miembro exitoso
    Given I navigate to page "<GHOST_URL>"
    And I wait for 1 seconds
    When I enter email "<ADMIN_EMAIL>"
    And I wait for 1 seconds
    And I enter password "<ADMIN_PASSWORD>"
    And I wait for 1 seconds
    And I click sign in
    And I wait for 1 seconds
    And I click to member button
    And I wait for 1 seconds
    And I click new member
    And I wait for 1 seconds
    And I enter name "$name_1"
    And I wait for 1 seconds
    And I enter member email "$email_1"
    And I wait for 1 seconds
    And I click save member
    And I wait for 2 seconds
    Then I see that the member was created with the name "$$name_1" and email "$$email_1"
