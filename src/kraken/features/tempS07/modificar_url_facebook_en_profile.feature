Feature: Pruebas ghost
  @user1 @web
  Scenario: Modificar url de facebook - exitoso
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
    And I enter a url facebook to my profile <url>
    And I wait for 1 seconds
    Then I see that the url facebook is correct <message>

    Examples:
        |url                                    | message                     |
        |https://www.facebook.com/anyPage       | URL of your personal Facebook Profile    |