Feature: Pruebas ghost
  @user1 @web
  Scenario: Modificar bio del profile con más de 200 caracteres - error
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
    Then I see that the new bio is not correct <message>

    Examples:
        |bio                |website                                |message                       |
        |Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor N del T persona                   |sitiowebsinextension.com               |Bio is too long  |