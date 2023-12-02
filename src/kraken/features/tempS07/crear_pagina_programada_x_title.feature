Feature: Pruebas ghost

  @user1 @web
  Scenario: Crear página programada exitosa (x title)
    Given I navigate to page "<GHOST_URL>"
    And I wait for 1 seconds
    When I enter email "<ADMIN_EMAIL>"
    And I enter password "<ADMIN_PASSWORD>"
    And I click sign in
    And I wait for 1 seconds
    And I click to pages button
    And I wait for 1 seconds
    And I click new page
    And I wait for 1 seconds
    And I add a page title
    And I wait for 1 seconds
    And I add a page text
    And I wait for 1 seconds
    And I click setting button
    And I wait for 1 seconds
    And I click x data option
    And I wait for 1 seconds
    And I add a x title
    And I wait for 1 seconds
    And I click publish button
    And I wait for 1 seconds
    And I click publish time option
    And I wait for 1 seconds
    And I click schedule option
    And I wait for 1 seconds
    And I click publish continue button
    And I wait for 1 seconds
    And I click publish scheduled page button
    And I wait for 1 seconds
    Then I see the page is scheduled
