Feature: Pruebas ghost
  @user1 @web
  Scenario: Modificar nombre en el perfil
    Given I navigate to page "<GHOST_URL>"
    And I wait for 1 seconds
    When I enter email and password POM "<ADMIN_EMAIL>" "<ADMIN_PASSWORD>"
    And I wait for 1 seconds
    And I enter to profile POM
    And I wait for 1 seconds
    And I enter a new name to my profile POM <name>
    And I wait for 1 seconds
    Then I see that the new name is correct POM <message>

    Examples:
        |name                             | message                     |
        |Jhoan                            | Use real name so people can recognize you    |