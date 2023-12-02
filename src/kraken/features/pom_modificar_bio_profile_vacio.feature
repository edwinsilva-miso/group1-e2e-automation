Feature: Pruebas ghost
  @user1 @web
  Scenario: Modificar bio del profile - exitoso
    Given I navigate to page "<GHOST_URL>"
    And I wait for 1 seconds
    When I enter email and password POM "<ADMIN_EMAIL>" "<ADMIN_PASSWORD>"
    And I wait for 1 seconds
    And I enter to profile POM
    And I wait for 1 seconds
    And I enter a new bio to my profile <bio>
    And I wait for 1 seconds
    And I enter a new website to my profile POM <website>
    And I wait for 1 seconds
    Then I see that the new bio is correct <message>

    Examples:
        |bio                |website                                |message                       |
        |                   |sitiowebsinextension.com               |Recommended: 200 characters. You‘ve used 0  |