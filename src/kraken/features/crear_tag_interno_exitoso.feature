Feature: Pruebas ghost

  @user1 @web
  Scenario: Crear un Tag exitoso (interno)
    Given I navigate to page "http://localhost:2368/ghost"
    And I wait for 5 seconds
    When I enter email "<ADMIN_EMAIL>"
    And I enter password "<ADMIN_PASSWORD>"
    And I click next
    And I wait for 2 seconds
    Then I navigate to page "<TAG_URL>"
    And I wait for 6 seconds
    And I click internal tag button
    And I wait for 7 seconds
    And I click new Tag
    And I wait for 2 seconds
    And I add Tag name
    And I wait for 2 seconds
    And I add Tag color
    And I wait for 2 seconds
    And I add Tag description
    And I wait for 2 seconds
    And I click save
    And I wait for 5 seconds