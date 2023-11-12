Feature: Creación de tags

@user1 @web
Scenario: Como primer usuario inicio sesion y creo un tag fallido
  Given I navigate to page "http://localhost:2368/ghost"
  And I wait for 5 seconds
  When I enter email "<USERNAME1>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click next
  And I wait for 2 seconds
  Then I navigate to page "<TAG_URL>"
  And I wait for 2 seconds
  And I click new Tag
  And I wait for 2 seconds
  And I click save
  And I wait for 5 seconds


@user2 @web
Scenario: Como primer usuario inicio sesion y creo un tag publico-exitoso
  Given I navigate to page "http://localhost:2368/ghost"
  And I wait for 5 seconds
  When I enter email "<USERNAME1>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click next
  And I wait for 2 seconds
  Then I navigate to page "<TAG_URL>"
  And I wait for 2 seconds
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

@user3 @web
Scenario: Como primer usuario inicio sesion y creo un tag internal-exitoso
  Given I navigate to page "http://localhost:2368/ghost"
  And I wait for 5 seconds
  When I enter email "<USERNAME1>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click next
  And I wait for 2 seconds
  Then I navigate to page "<TAG_URL>"
  And I wait for 2 seconds
  And I click internal tag button
  And I wait for 2 seconds
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

  @user4 @web
Scenario: Como primer usuario inicio sesion y creo un tag publico-exitoso y con meta data
  Given I navigate to page "http://localhost:2368/ghost"
  And I wait for 5 seconds
  When I enter email "<USERNAME1>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click next
  And I wait for 2 seconds
  Then I navigate to page "<TAG_URL>"
  And I wait for 2 seconds
  And I click new Tag
  And I wait for 2 seconds
  And I add Tag name
  And I wait for 2 seconds
  And I add Tag color
  And I wait for 2 seconds
  And I add Tag description
  And I wait for 2 seconds
  And I click first expand in tag page
  And I wait for 2 seconds
  And I add metadata title
  And I wait for 2 seconds
  And I click save
  And I wait for 5 seconds

  @user5 @web
Scenario: Como primer usuario inicio sesion y creo un miembro ya existente
  Given I navigate to page "http://localhost:2368/ghost"
  And I wait for 5 seconds
  When I enter email "<USERNAME1>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click next
  And I wait for 2 seconds

  And I click to member button
  And I wait for 2 seconds
  And I click new member
  And I wait for 2 seconds
  And I add a member name
  And I wait for 2 seconds
  And I add a member email
  And I wait for 2 seconds
  And I add a member note
  And I click save
  And I wait for 2 seconds

  And I click to member button
  And I wait for 2 seconds
  And I click new member
  And I wait for 2 seconds
  And I add a member email
  And I wait for 2 seconds
  And I click save
  And I wait for 2 seconds
  Then I get an error from member creation
  And I wait for 2 seconds

  And I click to member button
  And I wait for 2 seconds
  And I click leave button
  And I wait for 2 seconds
  And I click member joselito
  And I wait for 2 seconds
  And I click setting member button
  And I wait for 2 seconds
  And I click delete member button
  And I wait for 2 seconds
  And I click confirm delete member button
  And I wait for 2 seconds

  @user6 @web
Scenario: Inicio sesion y creo una pagina con publicación al instante
  Given I navigate to page "http://localhost:2368/ghost"
  And I wait for 5 seconds
  When I enter email "<USERNAME1>"
  And I enter password "<PASSWORD1>"
  And I click next
  And I wait for 2 seconds

  And I click to pages button
  And I wait for 2 seconds
  And I click new page
  And I wait for 2 seconds
  And I add a page title
  And I wait for 2 seconds
  And I add a page text
  And I wait for 2 seconds
  And I click publish button
  And I wait for 2 seconds
  And I click continue button
  And I wait for 2 seconds
  And I click publish page right now
  And I wait for 2 seconds
  And I click back to editor
  And I wait for 2 seconds
  And I click to pages button
  And I wait for 5 seconds

  @user7 @web
Scenario: Inicio sesion y creo una pagina con publicación programada
  Given I navigate to page "http://localhost:2368/ghost"
  And I wait for 5 seconds
  When I enter email "<USERNAME1>"
  And I enter password "<PASSWORD1>"
  And I click next
  And I wait for 2 seconds

  And I click to pages button
  And I wait for 2 seconds
  And I click new page
  And I wait for 2 seconds
  And I add a page title
  And I wait for 2 seconds
  And I add a page text
  And I wait for 2 seconds
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

  @user8 @web
Scenario: Inicio sesion y crear borrador de post
  Given I navigate to page "http://localhost:2368/ghost"
  And I wait for 5 seconds
  When I enter email "<USERNAME1>"
  And I enter password "<PASSWORD1>"
  And I click next
  And I wait for 2 seconds
  And I click to Post button
  And I wait for 2 seconds
  And I click New post button
  And I wait for 2 seconds
  And I add a Post title
  And I wait for 2 seconds
  And I add a Post text
  And I wait for 2 seconds
  And I click to Post button2
  And I wait for 2 seconds