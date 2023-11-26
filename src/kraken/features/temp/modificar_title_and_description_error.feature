Feature: Pruebas ghost
  @user1 @web
  Scenario: Modificar el titulo y la descripción (vacio) de herramientas generales - exitoso
    Given I navigate to page "<GHOST_URL>"
    And I wait for 1 seconds
    When I enter email "<ADMIN_EMAIL>"
    And I enter password "<ADMIN_PASSWORD>"
    And I click sign in
    And I wait for 1 seconds
    And I click general setting button
    And I wait for 1 seconds
    And I click edit title and description
    And I wait for 1 seconds
    And I enter a title for general setting <title>
    And I wait for 1 seconds
    And I enter a description for general setting <description>
    And I wait for 1 seconds
    And I click save title and description changes
    And I wait for 2 seconds
    Then save button is not updated

    Examples:
        |title                      |description               |
        |My title                   |Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T..                          |    