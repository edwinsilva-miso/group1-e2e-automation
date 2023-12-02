Feature: Pruebas ghost
  @user1 @web
  Scenario: Modificar url de twitter vacio- exitoso
    Given I navigate to page "<GHOST_URL>"
    And I wait for 1 seconds
    When I enter email and password POM "<ADMIN_EMAIL>" "<ADMIN_PASSWORD>"
    And I wait for 1 seconds
    And I enter to profile POM
    And I wait for 1 seconds
    And I enter a new url twitter to my profile <url>
    And I wait for 1 seconds
    And I enter a website to my profile <website>
    And I wait for 1 seconds
    Then I see that the url twitter is not correct <message>

    Examples:
        |url                                  | message                                          | website      |
        |mi Twitter                           | Your Username is not a valid Twitter Username    |google.com    |