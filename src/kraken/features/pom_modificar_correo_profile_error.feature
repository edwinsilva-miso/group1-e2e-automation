Feature: Pruebas ghost
  @user1 @web
  Scenario: Modificar correo en el perfil y el correo no tiene el formato correcto
    Given I navigate to page "<GHOST_URL>"
    And I wait for 1 seconds
    When I enter email and password POM "<ADMIN_EMAIL>" "<ADMIN_PASSWORD>"
    And I wait for 1 seconds
    And I enter to profile POM
    And I wait for 1 seconds
    And I enter a new website to my profile POM <website>
    And I wait for 1 seconds
    And I enter a new email to my profile POM <email>
    And I wait for 1 seconds
    And I click save & close button
    And I wait for 1 seconds
    Then I see that the new email is not correct POM <message>

    Examples:
        |email                          | message                     |
        |correosinarroba                 | Please enter a valid email address   |