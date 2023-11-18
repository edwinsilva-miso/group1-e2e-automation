Feature: Pruebas ghost

  @user1 @web
  Scenario: Crear miembro fallido (Correo ya existente de un miembro)
    Given I navigate to page "http://localhost:2368/ghost"
    And I wait for 5 seconds
    When I enter email "<ADMIN_EMAIL>"
    And I enter password "<ADMIN_PASSWORD>"
    And I click sign in
    And I wait for 2 seconds

    And I click to member button
    And I wait for 2 seconds
    And I click new member
    And I wait for 2 seconds
    And I add a member name "$name_1"
    And I add a member email "$email_1"
    And I add a member note
    And I click save
    And I wait for 2 seconds

    And I click to member button
    And I wait for 2 seconds
    And I click new member
    And I wait for 2 seconds
    And I add a member email "$$email_1"
    And I wait for 2 seconds
    And I click save
    And I wait for 2 seconds
    Then I get an error from member creation
    And I wait for 2 seconds

    And I click to member button
    And I wait for 2 seconds
    And I click leave button
    And I wait for 2 seconds
    And I click member "$$email_1"
    And I wait for 2 seconds
    And I click setting member button
    And I wait for 2 seconds
    And I click delete member button
    And I wait for 2 seconds
    And I click confirm delete member button
    And I wait for 5 seconds
