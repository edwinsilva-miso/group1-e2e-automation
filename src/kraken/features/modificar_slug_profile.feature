Feature: Pruebas ghost
  @user1 @web
  Scenario: Modificar bio del profile - exitoso
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
    And I enter a slug to my profile <slug>
    And I wait for 1 seconds
    And I enter a website to my profile <website>
    And I wait for 1 seconds
    Then I see that the slug is correct <message>

    Examples:
        |slug                |website                                |message                       |
        |mi-slug            |sitiowebsinextension.com               |https://example.com/author  |