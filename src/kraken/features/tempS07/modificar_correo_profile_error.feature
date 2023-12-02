Feature: Pruebas ghost
  @user1 @web
  Scenario: Modificar correo en el perfil y el correo no tiene el formato correcto
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
    And I enter a email to my profile <email>
    And I wait for 1 seconds
    And I click save & close
    And I wait for 1 seconds
    Then I see that the email is not correct <message>

    Examples:
        |email                          | message                     |
        |coreosinarroba                 | Please enter a valid email address   |