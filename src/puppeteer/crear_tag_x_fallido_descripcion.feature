Feature: Pruebas ghost

  @user1 @web
  Scenario: Crear Tag X Fallido (descipcion tag x demasiado Largo)
    Given I navigate to page "config.urlGhostNew"
    And I wait for 5 seconds
    When I enter email "config.username"
    And I enter password "config.password"
    And I click sign in
    And I wait for 7 seconds
    And I click to tags button
    And I wait for 7 seconds
    And I take a screenshot
    And I click new tag
    And I wait for 7 seconds
    And I expand the complements accordeon
    And I add a tag name
    And I add a tag accentColor
    And I add a tag description
    And I add a twitter title
    And I add a twitter description  more than 500 characters
    And I click save
    And I take a screenshot
    Then I see the twitter description has a notification error regarding the lenght