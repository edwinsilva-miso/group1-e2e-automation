Feature: Creación de tags

  @user1 @web
Scenario: Crear borrador de post 
  Given I navigate to page "http://localhost:2368/ghost"
  And I wait for 5 seconds
  When I enter email "<USERNAME1>"
  And I enter password "<PASSWORD1>"
  And I click next
  And I wait for 10 seconds
  And I click to Post button
  And I wait for 2 seconds
  And I click New post button
  And I wait for 2 seconds
  And I add a Post title
  And I add a Post text
  And I wait for 2 seconds
  And I click to Post button2
  And I wait for 5 seconds

  @user2 @web
Scenario: Programar publicación de post 
  Given I navigate to page "http://localhost:2368/ghost"
  And I wait for 5 seconds
  When I enter email "<USERNAME1>"
  And I enter password "<PASSWORD1>"
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

    @user3 @web
Scenario: Visualizar post 
  Given I navigate to page "http://localhost:2368/ghost"
  And I wait for 5 seconds
  When I enter email "<USERNAME1>"
  And I enter password "<PASSWORD1>"
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
  And I click continue button
  And I wait for 2 seconds
  And I click publish page right now
  And I wait for 3 seconds
  Then I click over post picture
  And I wait for 2 seconds

   @user4 @web
Scenario: Crear página con publicación al instante 
  Given I navigate to page "http://localhost:2368/ghost"
  And I wait for 5 seconds
  When I enter email "<USERNAME1>"
  And I enter password "<PASSWORD1>"
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

  @user5 @web
Scenario: Crear página con publicación programada
  Given I navigate to page "http://localhost:2368/ghost"
  And I wait for 5 seconds
  When I enter email "<USERNAME1>"
  And I enter password "<PASSWORD1>"
  And I click next
  And I wait for 12 seconds
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

  @user6 @web
Scenario: Crear miembro fallido (Correo ya existente de un miembro) 
  Given I navigate to page "http://localhost:2368/ghost"
  And I wait for 5 seconds
  When I enter email "<USERNAME1>"
  And I enter password "<PASSWORD1>"
  And I click next
  And I wait for 2 seconds

  And I click to member button
  And I wait for 2 seconds
  And I click new member
  And I wait for 2 seconds
  And I add a member name
  And I add a member email
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
  And I wait for 5 seconds

@user7 @web
Scenario: Crear un Tag fallido (No se llena el formulario)  
  Given I navigate to page "http://localhost:2368/ghost"
  And I wait for 7 seconds
  When I enter email "<USERNAME1>"
  And I enter password "<PASSWORD1>"
  And I click next
  And I wait for 2 seconds
  Then I navigate to page "<TAG_URL>"
  And I wait for 10 seconds
  And I click new Tag
  And I wait for 2 seconds
  And I click save
  And I wait for 5 seconds


@user8 @web
Scenario: Como primer usuario inicio sesion y creo un tag publico-exitoso
  Given I navigate to page "http://localhost:2368/ghost"
  And I wait for 5 seconds
  When I enter email "<USERNAME1>"
  And I enter password "<PASSWORD1>"
  And I click next
  And I wait for 2 seconds
  Then I navigate to page "<TAG_URL>"
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

@user9 @web
Scenario: Crear un Tag exitoso (interno) 
  Given I navigate to page "http://localhost:2368/ghost"
  And I wait for 5 seconds
  When I enter email "<USERNAME1>"
  And I enter password "<PASSWORD1>"
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

  @user10 @web
Scenario: Crear un Tag exitoso (Con meta-data) 
  Given I navigate to page "http://localhost:2368/ghost"
  And I wait for 5 seconds
  When I enter email "<USERNAME1>"
  And I enter password "<PASSWORD1>"
  And I click next
  And I wait for 2 seconds
  Then I navigate to page "<TAG_URL>"
  And I wait for 7 seconds
  And I click new Tag
  And I wait for 2 seconds
  And I add Tag name
  And I add Tag color
  And I add Tag description
  And I wait for 2 seconds
  And I click first expand in tag page
  And I wait for 2 seconds
  And I add metadata title
  And I wait for 2 seconds
  And I click save
  And I wait for 5 seconds