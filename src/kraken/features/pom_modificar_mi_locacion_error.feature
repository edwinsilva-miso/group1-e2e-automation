Feature: Pruebas ghost
  @user1 @web
  Scenario: Modificar mi locación
    Given I navigate to page "<GHOST_URL>"
    And I wait for 1 seconds
    When I enter email and password POM "<ADMIN_EMAIL>" "<ADMIN_PASSWORD>"
    And I wait for 1 seconds
    And I enter to profile POM
    And I wait for 1 seconds
    And I enter a new location to my profile POM <location>
    And I wait for 1 seconds
    And I click save & close button
    And I wait for 1 seconds
    Then I see that the new location is correct POM <message>

    Examples:
        |location               | message                       |
        |Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias               | Location is too long          |
