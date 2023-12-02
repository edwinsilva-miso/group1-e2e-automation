Feature: Pruebas ghost
  @user1 @web
  Scenario: Modificar bio del profile - exitoso
    Given I navigate to page "<GHOST_URL>"
    And I wait for 1 seconds
    When I enter email and password POM "<ADMIN_EMAIL>" "<ADMIN_PASSWORD>"
    And I wait for 1 seconds
    And I enter to profile POM
    And I wait for 1 seconds
    And I click change the password
    And I wait for 1 seconds
    And I enter the old password to my profile <password>
    And I wait for 1 seconds
    And I enter the new password to my profile <password>
    And I wait for 1 seconds
    And I click change the password
    And I wait for 1 seconds

    Examples:
        |old                    |new            |verify         |message                       |
        |1234                   |1234           |1234          |Password must be at least 10 characters long.  |