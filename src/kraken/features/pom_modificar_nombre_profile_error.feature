Feature: Pruebas ghost
  @user1 @web
  Scenario: Modificar nombre en el perfil con una cantidad de caracteres mayor a 190
    Given I navigate to page "<GHOST_URL>"
    And I wait for 1 seconds
    When I enter email and password POM "<ADMIN_EMAIL>" "<ADMIN_PASSWORD>"
    And I wait for 1 seconds
    And I enter to profile POM
    And I wait for 1 seconds
    And I enter a new name to my profile POM <name>
    And I wait for 1 seconds

    Examples:
        |name                        | message                     |
        |Esmeralda del mar Ximena Marias del socorro Esmeralda del mar Ximena Marias del socorro del sagrado corazon del Niño de San Juan De los perpetuos del socorro de los altos de las montañas de los valles de la concordia Zapata de la torre                            | Name is too long    |