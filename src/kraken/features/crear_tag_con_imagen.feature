Feature: Pruebas ghost

  @user1 @web
  Scenario: Crear un Tag exitoso (Con imagen)
    Given I navigate to page "<GHOST_URL>"
    And I wait for 5 seconds
    When I enter email "<ADMIN_EMAIL>"
    And I enter password "<ADMIN_PASSWORD>"
    And I click sign in
    And I wait for 2 seconds
    Then I click to page tag button
    And I wait for 7 seconds
    And I click new Tag
    And I wait for 2 seconds
    And I add Tag name
    And I add Tag color
    And I add Tag description
    And I wait for 2 seconds
    And I click uploader image
    And I wait for 2 seconds
    And I click first picture
    And I wait for 2 seconds
    And I click save
    And I wait for 5 seconds