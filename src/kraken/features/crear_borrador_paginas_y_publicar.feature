Feature: Pruebas ghost

  @user1 @web
  Scenario: Crear página con publicación al instante
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
    And I go back to pages
    And I wait for 1 seconds
    And I enter the last page
    And I wait for 1 seconds
    And I click publish button
    And I wait for 1 seconds
    And I click continue button
    And I wait for 1 seconds
    And I click publish page right now
    And I wait for 1 seconds
    Then I see the page is published