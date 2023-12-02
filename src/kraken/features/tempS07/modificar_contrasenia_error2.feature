Feature: Pruebas ghost
  @user1 @web
  Scenario: Modificar contraseña del profile - error contraseña insegura
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
    And I click change password
    And I wait for 1 seconds
    And I enter a old password to my profile <password>
    And I wait for 1 seconds
    And I enter a new password to my profile <password>
    And I wait for 1 seconds
    And I enter a verify password to my profile <password>
    And I wait for 1 seconds
    And I click change password
    And I wait for 1 seconds

    Examples:
        |old                    |new            |verify         |message                       |
        |1234                   |1234           |1234          |Sorry, you cannot use an insecure password.  |