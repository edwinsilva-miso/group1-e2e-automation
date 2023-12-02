Feature: Pruebas ghost
  @user1 @web
  Scenario: Modificar la url del website en el perfil
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
    And I enter a website to my profile <website>
    And I wait for 1 seconds
    And I click save & close
    And I wait for 2 seconds
    Then I see that the website is not correct <message>

    Examples:
        |website                            | message                     |
        |sitiowebsinextension               | Please enter a valid URL    |
