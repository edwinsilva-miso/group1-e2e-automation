Feature: Pruebas ghost

  @user1 @web
  Scenario: Previsalizar pagina en mobile
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
    And I wait for 2 seconds
    And I add a page text
    And I wait for 2 seconds
    And I click preview button
    And I wait for 2 seconds
    And I click mobile preview button
    And I wait for 2 seconds
    And I click publish button
    And I wait for 2 seconds
    And I click continue button
    And I wait for 2 seconds
    And I click publish page right now
    And I wait for 3 seconds
    Then I click over post picture
    And I wait for 2 seconds