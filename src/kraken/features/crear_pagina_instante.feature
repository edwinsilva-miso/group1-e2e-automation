Feature: Pruebas ghost

  @user1 @web
  Scenario: Crear página con publicación al instante
    Given I navigate to page "http://localhost:2368/ghost"
    And I wait for 5 seconds
    When I enter email "<ADMIN_EMAIL>"
    And I enter password "<ADMIN_PASSWORD>"
    And I click next
    And I wait for 6 seconds

    And I click to pages button
    And I wait for 2 seconds
    And I click new page
    And I wait for 2 seconds
    And I add a page title
    And I add a page text
    And I wait for 6 seconds
    And I click publish button
    And I wait for 4 seconds
    And I click continue button
    And I wait for 2 seconds
    And I click publish page right now
    And I wait for 2 seconds
    And I click back to editor
    And I wait for 2 seconds
    And I click to pages button
    And I wait for 5 seconds