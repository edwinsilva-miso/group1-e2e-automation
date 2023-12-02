Feature: Pruebas ghost
  @user1 @web
  Scenario: Modificar nombre en el perfil con una cantidad de caracteres mayor a 190
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
    And I enter a name to my profile <name>
    And I wait for 1 seconds
    And I click save & close
    And I wait for 1 seconds
    Then I see that the name is correct <message>

    Examples:
        |name                        | message                     |
        |Esmeralda del mar Ximena Marias del socorro Esmeralda del mar Ximena Marias del socorro del sagrado corazon del Niño de San Juan De los perpetuos del socorro de los altos de las montañas de los valles de la concordia Zapata de la torre                            | Name is too long    |