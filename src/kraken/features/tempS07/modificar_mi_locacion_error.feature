Feature: Pruebas ghost
  @user1 @web
  Scenario: Modificar mi locación
    Given I navigate to page "<GHOST_URL>"
    And I wait for 1 seconds
    When I enter email "<ADMIN_EMAIL>"
    And I enter password "<ADMIN_PASSWORD>"
    And I click sign in
    And I wait for 1 seconds
    And I click on the user menu
    And I wait for 1 seconds
    And I click to see my profile
    And I wait for 10 seconds
    And I enter a location to my profile <location>
    And I wait for 1 seconds
    And I click save & close
    And I wait for 1 seconds
    Then I see that the location is correct <message>

    Examples:
        |location               | message                       |
        |Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias               | Location is too long          |
