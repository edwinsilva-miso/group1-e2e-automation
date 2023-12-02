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
    And I enter a website to my profile <website>
    And I wait for 1 seconds
    Then I see that the url facebook is not correct <message>

    Examples:
        |url                                    | message                                                               | website               |
        | mi Facebook                           | The URL must be in a format like https://www.facebook.com/yourPage    |  google.com           |