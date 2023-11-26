Feature: Pruebas ghost
  @user1 @web
  Scenario: Modificar url de twitter vacio- exitoso
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
    And I enter a url twitter to my profile <url>
    And I wait for 5 seconds
    And I enter a website to my profile <website>
    And I wait for 5 seconds
    Then I see that the url twitter is not correct <message>

    Examples:
        |url                                  | message                                          | website      |
        |mi Twitter                           | Your Username is not a valid Twitter Username    |google.com    |