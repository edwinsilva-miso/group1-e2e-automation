Feature: Pruebas ghost
  @user1 @web
  Scenario: Modificar nombre en el perfil con vacío
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
    And I enter a name to my profile <name>
    And I wait for 1 seconds
    Then I see that the name is correct <message>

    Examples:
        |name                        | message                     |
        |                            | Use real name so people can recognize you    |