Feature: Pruebas ghost
  @user1 @web
  Scenario: Modificar slug del profile - exitoso
    Given I navigate to page "<GHOST_URL>"
    And I wait for 1 seconds
    When I enter email and password POM "<ADMIN_EMAIL>" "<ADMIN_PASSWORD>"
    And I wait for 1 seconds
    And I enter to profile POM
    And I wait for 1 seconds
    And I enter a new slug to my profile <slug>
    And I wait for 1 seconds
    And I enter a new website to my profile POM <website>
    And I wait for 1 seconds
    Then I see that the new slug is correct <message>

    Examples:
        |slug                |website                                |message                       |
        |mi-slug            |sitiowebsinextension.com               |https://example.com/author  |