Feature: Pruebas ghost
  @user1 @web
  Scenario: Modificar bio del profile con más de 200 caracteres - error
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
    And I enter a bio to my profile <bio>
    And I wait for 1 seconds
    And I enter a website to my profile <website>
    And I wait for 1 seconds
    Then I see that the bio is not correct <message>

    Examples:
        |bio                |website                                |message                       |
        |Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor N del T persona                   |sitiowebsinextension.com               |Bio is too long  |