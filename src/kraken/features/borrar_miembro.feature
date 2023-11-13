Feature: Pruebas ghost

  @user1 @web
  Scenario: Borrar miembro
    Given I navigate to page "http://localhost:2368/ghost"
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
    And I enter name "$name_3"
    And I wait for 1 seconds
    And I enter member email "$email_3"
    And I wait for 1 seconds
    And I click save member
    And I wait for 2 seconds
    Then I see that the member was created with the name "$$name_3" and email "$$email_3"
    And I wait for 1 seconds
    And I click on member dropdown
    And I wait for 1 seconds
    And I click on delete member
    And I wait for 1 seconds
    And I click on confirm delete
    And I wait for 1 seconds
    Then I see i was redirected to the members page