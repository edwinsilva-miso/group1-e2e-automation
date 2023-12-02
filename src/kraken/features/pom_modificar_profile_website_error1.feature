Feature: Pruebas ghost
  @user1 @web
  Scenario: Modificar la url del website en el perfil
    Given I navigate to page "<GHOST_URL>"
    And I wait for 1 seconds
    When I enter email and password POM "<ADMIN_EMAIL>" "<ADMIN_PASSWORD>"
    And I wait for 1 seconds
    And I enter to profile POM
    And I wait for 1 seconds
    And I enter a new website to my profile POM <website>
    And I wait for 1 seconds
    Then I see that the new website is not correct POM <message>

    Examples:
        |website                            | message                     |
        |sitiowebsinextension               | Please enter a valid URL    |
