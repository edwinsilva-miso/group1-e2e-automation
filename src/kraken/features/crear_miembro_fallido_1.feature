Feature: Pruebas ghost

  @user1 @web
  Scenario: Crear miembro fallido (Correo ya existente de un miembro)
    Given I navigate to page "http://localhost:2368/ghost"
    And I wait for 5 seconds
    When I enter email "<ADMIN_EMAIL>"
    And I enter password "<ADMIN_PASSWORD>"
    And I click next
    And I wait for 2 seconds

    And I click to member button
    And I wait for 2 seconds
    And I click new member
    And I wait for 2 seconds
    And I add a member name
    And I add a member email
    And I add a member note
    And I click save
    And I wait for 2 seconds

    And I click to member button
    And I wait for 2 seconds
    And I click new member
    And I wait for 2 seconds
    And I add a member email
    And I wait for 2 seconds
    And I click save
    And I wait for 2 seconds
    Then I get an error from member creation
    And I wait for 2 seconds

    And I click to member button
    And I wait for 2 seconds
    And I click leave button
    And I wait for 2 seconds
    And I click member joselito
    And I wait for 2 seconds
    And I click setting member button
    And I wait for 2 seconds
    And I click delete member button
    And I wait for 2 seconds
    And I click confirm delete member button
    And I wait for 5 seconds
