Feature: Pruebas ghost
  @user1 @web
  Scenario: Cerrar sesión
    Given I navigate to page "<GHOST_URL>"
    And I wait for 1 seconds
    When I enter email "<ADMIN_EMAIL>"
    And I wait for 1 seconds
    And I enter password "<ADMIN_PASSWORD>"
    And I wait for 1 seconds
    And I click sign in
    And I wait for 1 seconds
    And I click on the user menu
    And I wait for 1 seconds
    And I click on sign out
    And I wait for 1 seconds
    Then I see i was redirected to the sign in page
