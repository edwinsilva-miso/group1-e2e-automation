Feature: Pruebas ghost

  @user1 @web
  Scenario: Crear página con publicación programada
    Given I navigate to page "<GHOST_URL>"
    And I wait for 5 seconds
    When I enter email "<ADMIN_EMAIL>"
    And I enter password "<ADMIN_PASSWORD>"
    And I click sign in
    And I wait for 2 seconds
    And I click to pages button
    And I wait for 2 seconds
    And I click new page
    And I wait for 2 seconds
    And I add a page title
    And I add a page text
    And I wait for 6 seconds
    And I click publish button
    And I wait for 2 seconds
    And I click right now drop list
    And I wait for 2 seconds
    And I click Schedule for later
    And I wait for 2 seconds
    And I click continue button
    And I wait for 2 seconds
    And I click publish date scheduled button
    And I wait for 2 seconds
    And I click back to editor2
    And I wait for 2 seconds
    And I click back to Pages
    And I wait for 5 seconds