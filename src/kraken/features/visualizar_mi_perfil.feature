Feature: Pruebas ghost
  @user1 @web
  Scenario: Modificar locacion del adminstrador
    Given I navigate to page "<GHOST_URL>"
    And I wait for 1 seconds
    When I enter email "<ADMIN_EMAIL>"
    And I enter password "<ADMIN_PASSWORD>"
    And I click sign in
    And I wait for 1 seconds
    And I click on the user menu
    And I wait for 1 seconds
    And I click to see my profile
    And I wait for 1 seconds
    And I click cancel button
    And I wait for 1 seconds
    And I click done button
    And I wait for 1 seconds
    And I click on the user menu
    And I wait for 1 seconds
    And I click on sign out
    And I wait for 1 seconds
    Then I see i was redirected to the sign in page
