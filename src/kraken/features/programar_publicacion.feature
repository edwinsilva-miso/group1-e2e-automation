Feature: Pruebas ghost

  @user1 @web
  Scenario: Programar publicación de post
    Given I navigate to page "http://localhost:2368/ghost"
    And I wait for 5 seconds
    When I enter email "<ADMIN_EMAIL>"
    And I enter password "<ADMIN_PASSWORD>"
    And I click next
    And I wait for 6 seconds
    And I click to Post button
    And I wait for 2 seconds
    And I click New post button
    And I wait for 2 seconds
    And I add a Post title
    And I add a Post text
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
    Then I click back to Post
    And I wait for 5 seconds