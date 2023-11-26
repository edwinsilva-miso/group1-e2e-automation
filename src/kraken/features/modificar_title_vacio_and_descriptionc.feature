Feature: Pruebas ghost
  @user1 @web
  Scenario: Modificar el titulo y la descripción de herramientas generales - exitoso
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
 

    Examples:
        |title                      |description              |
        |                           |My description           |    