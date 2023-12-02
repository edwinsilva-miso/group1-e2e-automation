Feature: Pruebas ghost
  @user1 @web
  Scenario: Modificar url de facebook - exitoso
    Given I navigate to page "<GHOST_URL>"
    And I wait for 1 seconds
    When I enter email and password POM "<ADMIN_EMAIL>" "<ADMIN_PASSWORD>"
    And I wait for 1 seconds
    And I enter to profile POM
    And I wait for 1 seconds
    And I enter a new website to my profile POM <website>
    And I wait for 1 seconds
    And I enter a new url facebook to my profile <url>
    And I wait for 1 seconds
    Then I see that the new url facebook is correct <message>

    Examples:
        |url                                    | message                     |
        |                                       | URL of your personal Facebook Profile    |