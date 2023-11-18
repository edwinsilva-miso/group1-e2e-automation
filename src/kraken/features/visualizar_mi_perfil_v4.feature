Feature: Pruebas ghost
  @user1 @web
  Scenario: Modificar locacion del adminstrador v4
    Given I navigate to page "<GHOST_URLV4>"
    And I wait for 1 seconds
    When I enter email v4 "<ADMIN_EMAIL>"
    And I enter password v4 "<ADMIN_PASSWORD>"
    And I click sign in v4
    And I wait for 1 seconds
    And I click on the user menu v4
    And I wait for 1 seconds
    And I click to see my profile v4
    And I wait for 1 seconds
    And I click on the user menu v4
    And I wait for 1 seconds
    And I click on sign out
    And I wait for 1 seconds
    Then I see i was redirected to the sign in page v4