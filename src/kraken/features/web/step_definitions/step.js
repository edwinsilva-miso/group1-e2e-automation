const { Given, When, Then, Before } = require("@cucumber/cucumber");
const LoginPage = require('../../pageObject/loginPage');
const MainPage = require('../../pageObject/mainPage');
const ProfilePage = require('../../pageObject/profilePage');
const expect = require("chai").expect;
const fs = require("fs");
const { faker, ur } = require("@faker-js/faker");

let screenshotCount = 1;
let scenarioName;

// Define a function to take a screenshot and save it to a file
async function takeScreenshot(driver) {
  const screenshot = await driver.takeScreenshot();
  const scenarioFolder = `./screenshots/${scenarioName}`;
  if (!fs.existsSync(scenarioFolder)) {
    fs.mkdirSync(scenarioFolder, { recursive: true });
  }
  fs.writeFileSync(
    `${scenarioFolder}/ss-${screenshotCount++}.png`,
    screenshot,
    "base64"
  );
}

Before(function (scenario) {
  // This hook runs before each scenario
  scenarioName = scenario.pickle.name;
  screenshotCount[scenarioName] = 1; // Initialize screenshot count for the scenario
});

When("I enter email {kraken-string}", async function (email) {
  let element = await this.driver.$("#identification");
  return element.setValue(email).then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I enter email v4 {kraken-string}", async function (email) {
  let element = await this.driver.$('input[name="identification"]');
  return element.setValue(email).then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I enter password {kraken-string}", async function (password) {
  let element = await this.driver.$("#password");
  return element.setValue(password).then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I enter password v4 {kraken-string}", async function (password) {
  let element = await this.driver.$('input[name="password"]');
  return element.setValue(password).then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I click sign in", async function () {
  let element = await this.driver.$("#ember5");
  return element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I click sign in v4", async function () {
  let element = await this.driver.$('//span[text()="Sign in →"]');
  return element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I click members", async function () {
  let element = await this.driver.$(
    "body > div.gh-app > div > nav.gh-nav > div > section > div.gh-nav-top > ul.gh-nav-list.gh-nav-manage > li:nth-child(4)"
  );
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I enter name {kraken-string}", async function (name) {
  let element = await this.driver.$("#member-name");
  return await element.setValue(name).then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I enter member email {kraken-string}", async function (email) {
  let element = await this.driver.$("#member-email");
  return await element.setValue(email).then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I click save member", async function () {
  let element = await this.driver.$("button[data-test-button='save']");
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I click save member v4", async function () {
  let element = await this.driver.$('//span[text()="Save"]');
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I click on the user menu", async function () {
  let element = await this.driver.$("div[class='flex-auto flex items-center']");
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I click on the user menu v4", async function () {
  let element = await this.driver.$('div[class="gh-user-avatar relative" ]');
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I click on sign out", async function () {
  let element = await this.driver.$("a[href='#/signout/']");
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I click on member dropdown", async function () {
  let element = await this.driver.$(
    "body > div.gh-app > div > main > section > div.gh-canvas-header.sticky.gh-member-header > header > section > span"
  );
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I click on delete member", async function () {
  let element = await this.driver.$("button[data-test-button='delete-member']");
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I click on confirm delete", async function () {
  let element = await this.driver.$(
    "button[class='gh-btn gh-btn-red gh-btn-icon ember-view']"
  );
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

Then("I see i was redirected to the members page", async function () {
  let element = await this.driver.$(
    "body > div.gh-app > div > main > section > div > header > div > h2"
  );
  takeScreenshot(this.driver);
  expect(element).to.not.equal(null);
  let text = await element.getText();
  expect(text).to.contain("Members");
});

Then("I see that the email is mandatory", async function () {
  let element = await this.driver.$$(
    "body > div.gh-app > div > main > section > div:nth-child(2) > form > div > section > div > div:nth-child(1) > div > div.gh-cp-member-email-name > div.form-group.max-width.error > p"
  );
  takeScreenshot(this.driver);
  expect(element.length).to.equal(1);
});

Then("I see i was redirected to the dashboard", async function () {
  let element = await this.driver.$(
    "body > div.gh-app > div > main > section > div > div > header > h2"
  );
  takeScreenshot(this.driver);
  expect(element).to.not.equal(null);
});

Then("I see i was redirected to the sign in page", async function () {
  //Sing in button
  let element = await this.driver.$("#ember5");
  takeScreenshot(this.driver);
  expect(element).to.not.equal(null);
});

Then("I see i was redirected to the sign in page v4", async function () {
  //Sing in button
  let element = await this.driver.$("input[name='identification']");
  takeScreenshot(this.driver);
  expect(element).to.not.equal(null);
});

Then("I see that i havent filled out the form", async function () {
  let element = await this.driver.$(
    "body > div.gh-app > div > main > div.gh-flow > div > section > p"
  );
  let text = await element.getText();
  takeScreenshot(this.driver);
  expect(element).to.not.equal(null);
  expect(text).to.contain("Please fill out the form to sign in.");
});

Then("I see that the credentials are incorrect", async function () {
  let element = await this.driver.$(
    "body > div.gh-app > div > main > div.gh-flow > div > section > p"
  );
  let text = await element.getText();
  takeScreenshot(this.driver);
  expect(element).to.not.equal(null);
  expect(text).to.contain("Your password is incorrect.");
});

Then(
  "I see that the member was created with the name {kraken-string} and email {kraken-string}",
  async function (name, email) {
    let nameElement = await this.driver.$(
      "body > div.gh-app > div > main > section > div:nth-child(2) > form > div > section > section > div > div.gh-member-details-identity > div > h3"
    );
    let emailElement = await this.driver.$(
      "body > div.gh-app > div > main > section > div:nth-child(2) > form > div > section > section > div > div.gh-member-details-identity > div > p > a"
    );
    let text = await nameElement.getText();
    let emailText = await emailElement.getText();
    takeScreenshot(this.driver);
    expect(nameElement).to.not.equal(null);
    expect(emailElement).to.not.equal(null);
    expect(text).to.contain(name);
    expect(emailText).to.contain(email);
  }
);

When("I click to member button", async function () {
  let element = await this.driver.$('a[href="#/members/"]');
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I click new member", async function () {
  let element = await this.driver.$('a[href="#/members/new/"]');
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I add a member name {kraken-string}", async function (name) {
  let element = await this.driver.$("#member-name");
  return await element.setValue(name).then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I add a member email {kraken-string}", async function (email) {
  let element = await this.driver.$("#member-email");
  return await element.setValue(email).then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I add a member note", async function () {
  let element = await this.driver.$("#member-note");
  return await element.setValue("Esta es una nota de joselito").then(() => {
    return takeScreenshot(this.driver);
  });
});

Then("I get an error from member creation", async function () {
  takeScreenshot(this.driver);

  return (
    (await this.driver.$(".response")[1].textContent) ==
    "\n    Member already exists. Attempting to add member with existing email address\n"
  );
});

When("I click leave button", async function () {
  let element = await this.driver.$('//span[text()="Leave"]');
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I click member {kraken-string}", async function (email) {
  let element = await this.driver.$(`//p[text()="${email}"]`);
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I click setting member button", async function () {
  let element = await this.driver.$(
    'button[data-test-button="member-actions"]'
  );
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I click delete member button", async function () {
  let element = await this.driver.$('button[data-test-button="delete-member"]');
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I click confirm delete member button", async function () {
  let element = await this.driver.$('button[data-test-button="confirm"]');
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I click to pages button", async function () {
  let element = await this.driver.$('a[href="#/pages/"]');
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I click new page", async function () {
  let element = await this.driver.$('a[href="#/editor/page/"]');
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I add a page title", async function () {
  let element = await this.driver.$(
    "/html/body/div[2]/div/main/div[1]/section/div[1]/div[1]/div[2]/textarea"
  );
  return await element.setValue(faker.company.name()).then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I add a page text", async function () {
  let element = await this.driver.$(
    "/html/body/div[2]/div/main/div[1]/section/div[1]/div[1]/div[3]/div/div/div[1]/div/p"
  );
  element.click();
  let element2 = await this.driver.$(
    "/html/body/div[2]/div/main/div[1]/section/div[1]/div[1]/div[3]/div/div/div[1]/div/p"
  );
  return await element2
    .setValue(faker.company.catchPhraseDescriptor())
    .then(() => {
      return takeScreenshot(this.driver);
    });
});

When("I add a long page text", async function () {
  let element = await this.driver.$('p[data-koenig-dnd-droppable="true"]');
  element.click();
  let element2 = await this.driver.$('p[data-koenig-dnd-droppable="true"]');
  return await element2
    .setValue(
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
    )
    .then(() => {
      return takeScreenshot(this.driver);
    });
});

When("I click publish button", async function () {
  //let element = await this.driver.$('//span[text()="Publish"]');
  let element = await this.driver.$(
    "/html/body/div[2]/div/main/div[1]/section/header/section/button[2]/span"
  );
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I click publish button v4", async function () {
  let element = await this.driver.$('//span[text()="Publish"]');
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I click continue button", async function () {
  let element = await this.driver.$(
    '//span[text()="Continue, final review →"]'
  );
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I click schedule button v4", async function () {
  let element = await this.driver.$('//span[text()="Schedule"]');
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I click publish page right now", async function () {
  //let element = await this.driver.$('//span[text()="Publish page, right now"]');
  let element = await this.driver.$(
    'button[data-test-button="confirm-publish"]'
  );
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I click back to editor", async function () {
  let element = await this.driver.$('//span[text()="Back to editor"]');
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I click right now drop list", async function () {
  let element = await this.driver.$('div[data-test-setting="publish-at"]');
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I click Schedule for later", async function () {
  let element = await this.driver.$('//label[text()="Schedule for later"]');
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I click Schedule for later v4", async function () {
  let element = await this.driver.$('//div[text()="Schedule it for later"]');
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I click publish date scheduled button", async function () {
  let element = await this.driver.$('span[data-test-task-button-state="idle"]');
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I click back to editor2", async function () {
  let element = await this.driver.$('//span[text()=" Editor"]');
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I click back to Pages", async function () {
  let element = await this.driver.$('//span[text()="Pages"]');
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I click to Post button", async function () {
  let element = await this.driver.$('a[href="#/posts/"]');
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I click New post button", async function () {
  let element = await this.driver.$('//span[text()="New post"]');
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I add a Post title", async function () {
  let element = await this.driver.$('textarea[placeholder="Post title"]');
  return await element.setValue("Titulo de mi primera página").then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I add a Post text", async function () {
  let element = await this.driver.$('p[data-koenig-dnd-droppable="true"]');
  element.click();
  let element2 = await this.driver.$('p[data-koenig-dnd-droppable="true"]');
  return await element2.setValue(" Algun texto cool").then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I click to Post button2", async function () {
  let element = await this.driver.$('a[data-test-link="posts"]');
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I click leave button2", async function () {
  let element = await this.driver.$('//span[text()="Leave"]');
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

Then("I click over post picture", async function () {
  //let element = await this.driver.$('img[src="src="https://static.ghost.org/v5.0.0/images/publication-cover.jpg""]');
  let element = await this.driver.$(".gh-post-bookmark-container");
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

Then("I click back to Post", async function () {
  let element = await this.driver.$('a[href="#/posts/"]');
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I click new Tag", async function () {
  let element = await this.driver.$('a[href="#/tags/new/"]');
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I click save", async function () {
  let element = await this.driver.$('button[data-test-button="save"]');
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});
When("I click save v4", async function () {
  let element = await this.driver.$('//span[text()="Save"]');
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

Then("I get error message", async function () {
  return await this.driver
    .$('span[data-test-task-button-state="failure"]')
    .then(() => {
      return takeScreenshot(this.driver);
    });
});

When("I add Tag name", async function () {
  let element = await this.driver.$("#tag-name");
  return await element.setValue("Mi primer tag").then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I add Tag color", async function () {
  let element = await this.driver.$('input[placeholder="15171A"]');
  return await element.setValue("37ff00").then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I add Tag description", async function () {
  let element = await this.driver.$("#tag-description");
  return await element
    .setValue("Esta es la descripción de mi primer tag")
    .then(() => {
      return takeScreenshot(this.driver);
    });
});

When("I click internal tag button", async function () {
  let element = await this.driver.$('button[data-test-tags-nav="internal"]');
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I click internal tag button v4", async function () {
  let element = await this.driver.$('//span[text()="Internal tags"]');
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I click first expand in tag page", async function () {
  var element = await this.driver.$(".gh-btn.gh-btn-expand");
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I click second expand in tag page", async function () {
  let element = await this.driver.$(
    "body > div.gh-app > div > main > section > form > section > div:nth-child(2) > div.gh-expandable-header > button"
  );
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I click third expand in tag page", async function () {
  let element = await this.driver.$(
    "body > div.gh-app > div > main > section > form > section > div:nth-child(3) > div.gh-expandable-header > button"
  );
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I click fourth expand in tag page", async function () {
  let element = await this.driver.$(
    "body > div.gh-app > div > main > section > form > section > div:nth-child(4) > div.gh-expandable-header > button"
  );
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I add metadata title", async function () {
  let element = await this.driver.$("#meta-title");
  return await element.setValue("Meta - title - tag - 1").then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I add facebook title", async function () {
  let element = await this.driver.$("#og-title");
  return await element.setValue("Facebook - title - tag - 1").then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I add facebook description", async function () {
  let element = await this.driver.$("#og-description");
  return await element.setValue("Facebook - description - tag - 1").then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I add x title", async function () {
  let element = await this.driver.$("#twitter-title");
  return await element.setValue("X - title - tag - 1").then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I add x description", async function () {
  let element = await this.driver.$("#twitter-description");
  return await element.setValue("X - description - tag - 1").then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I add a tag header", async function () {
  let element = await this.driver.$(
    "#tag-setting-codeinjection-head > div > div.CodeMirror-scroll"
  );
  return await element.setValue("<p>Header de un tag</p>").then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I add a tag footer", async function () {
  let element = await this.driver.$(
    "#tag-setting-codeinjection-foot > div > div.CodeMirror-scroll"
  );
  return await element.setValue("<p>Footer de un tag</p>").then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I click to page tag button", async function () {
  let element = await this.driver.$('a[href="#/tags/"]');
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I click over notification", async function () {
  let element = await this.driver.$('//a[text()="View Post"]');
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I click uploader image", async function () {
  let element = await this.driver.$(".gh-image-uploader-unsplash");
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I click first picture", async function () {
  let element = await this.driver.$(
    "#unsplash-selector-wormhole > div.absolute.top-8.right-8.bottom-8.left-8.br4.overflow-hidden.bg-white.z-9999 > div.flex.flex-column.h-100 > div > div > section > div:nth-child(1) > a:nth-child(1) > div > div > div.gh-unsplash-photo-footer > a"
  );
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I click setting button", async function () {
  let element = await this.driver.$("body > div.gh-app > div > main > button");
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I click dropdown list page access", async function () {
  let element = await this.driver.$(
    'select[data-test-select="post-visibility"]'
  );
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I select Members only dropdown list page access", async function () {
  let element = await this.driver.$('option[value="members"]');
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I select Paid-members only", async function () {
  let element = await this.driver.$('option[value="paid"]');
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

Then("I see it was displayed 12 words in post", async function () {
  let element = await this.driver.$(
    "#ember3151 > div.gh-editor-wordcount-container > div"
  );
  takeScreenshot(this.driver);
  expect(element).to.not.equal(null);
  let text = await element.getText();
  expect(text).to.contain("12 words");
});

When("I click preview button", async function () {
  let element = await this.driver.$('//span[text()="Preview"]');
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I click mobile preview button", async function () {
  let element = await this.driver.$('svg[viewBox="0 0 16 18"]');
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I click to see my profile", async function () {
  let element = await this.driver.$('a[data-test-nav="user-profile"]');
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I click to see my profile v4", async function () {
  let element = await this.driver.$("/html/body/div[1]/div/ul/li[4]/a");
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I click cancel button", async function () {
  let element = await this.driver.$('//span[text()="Cancel"]');
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});
When("I click done button", async function () {
  let element = await this.driver.$('//span[text()="← Done"]');
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

When(/^I enter a location to my profile (.*)$/, async function (location) {
  let element = await this.driver.$(
    "/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div[1]/div/div[2]/div[2]/div[1]/div[2]/div[1]/div/input"
  );

  return await element.clearValue().then(() => {
    return element.setValue(location);
  });
});

Then(/^I see that the location is correct (.*)$/, async function (message) {
  let element = await this.driver.$(
    "/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div[1]/div/div[2]/div[2]/div[1]/div[2]/div[1]/span"
  );
  let text = await element.getText();
  expect(element).to.not.equal(null);
  expect(text).to.contain(message);
});

When("I click save & close", async function () {
  let element = await this.driver.$('//span[text()="Save & close"]');
  return element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

When(/^I enter a website to my profile (.*)$/, async function (website) {
  let element = await this.driver.$(
    "/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div[1]/div/div[2]/div[2]/div[1]/div[2]/div[2]/div/input"
  );

  const oldValue = await element.getValue();
  if (oldValue) {
    const backspaces = new Array(oldValue.length).fill("Backspace");
    await element.setValue(backspaces);
  }

  return await element.setValue(website);
});

Then(/^I see that the website is correct (.*)$/, async function (message) {
  let element = await this.driver.$(
    "/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div[1]/div/div[2]/div[2]/div[1]/div[2]/div[2]/span"
  );
  let text = await element.getText();
  expect(element).to.not.equal(null);
  expect(text).to.contain(message);
});

Then(/^I see that the website is not correct (.*)$/, async function (message) {
  let text = await this.driver.$(
    "#admin-x-settings > div:nth-child(1) > div > div"
  );

  expect(text).to.not.equal(null);
});

When(/^I enter a name to my profile (.*)$/, async function (name) {
  let element = await this.driver.$(
    "/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div[1]/div/div[2]/div[1]/div[2]/div[1]/div/input"
  );
  const oldValue = await element.getValue();
  if (oldValue) {
    const backspaces = new Array(oldValue.length).fill("Backspace");
    await element.setValue(backspaces);
  }
  return await element.setValue(name);
});

Then(/^I see that the name is correct (.*)$/, async function (message) {
  let element = await this.driver.$(
    "/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div[1]/div/div[2]/div[1]/div[2]/div[1]/span"
  );

  let text = await element.getText();
  expect(element).to.not.equal(null);
  expect(text).to.contain(message);
});

When(/^I enter a email to my profile (.*)$/, async function (email) {
  let element = await this.driver.$(
    "/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div[1]/div/div[2]/div[1]/div[2]/div[2]/div/input"
  );
  const oldValue = await element.getValue();
  if (oldValue) {
    const backspaces = new Array(oldValue.length).fill("Backspace");
    await element.setValue(backspaces);
  }
  return await element.setValue(email);
});

Then(/^I see that the email is not correct (.*)$/, async function (message) {
  let element = await this.driver.$(
    "/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div[1]/div/div[2]/div[1]/div[2]/div[2]/span"
  );

  let text = await element.getText();
  expect(element).to.not.equal(null);
  expect(text).to.contain(message);
});

When(/^I enter a url facebook to my profile (.*)$/, async function (url) {
  let element = await this.driver.$(
    "/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div[1]/div/div[2]/div[2]/div[1]/div[2]/div[3]/div/input"
  );
  const oldValue = await element.getValue();
  if (oldValue) {
    const backspaces = new Array(oldValue.length).fill("Backspace");
    await element.setValue(backspaces);
  }
  return await element.setValue(url);
});

Then(/^I see that the url facebook is correct (.*)$/, async function (message) {
  let element = await this.driver.$(
    "/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div[1]/div/div[2]/div[2]/div[1]/div[2]/div[3]/span"
  );

  let text = await element.getText();
  expect(element).to.not.equal(null);
  expect(text).to.contain(message);
});

Then(
  /^I see that the url facebook is not correct (.*)$/,
  async function (message) {
    let element = await this.driver.$(
      "/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div[1]/div/div[2]/div[2]/div[1]/div[2]/div[3]/span"
    );

    let text = await element.getText();
    expect(element).to.not.equal(null);
    expect(text).to.contain(message);
  }
);

When(/^I enter a url twitter to my profile (.*)$/, async function (url) {
  let element = await this.driver.$(
    "/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div[1]/div/div[2]/div[2]/div[1]/div[2]/div[4]/div/input"
  );
  const oldValue = await element.getValue();
  if (oldValue) {
    const backspaces = new Array(oldValue.length).fill("Backspace");
    await element.setValue(backspaces);
  }
  return await element.setValue(url);
});

Then(/^I see that the url twitter is correct (.*)$/, async function (message) {
  let element = await this.driver.$(
    "/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div[1]/div/div[2]/div[2]/div[1]/div[2]/div[4]/span"
  );

  let text = await element.getText();
  expect(element).to.not.equal(null);
  expect(text).to.contain(message);
});

Then(
  /^I see that the url twitter is not correct (.*)$/,
  async function (message) {
    let element = await this.driver.$(
      "/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div[1]/div/div[2]/div[2]/div[1]/div[2]/div[4]/span"
    );

    let text = await element.getText();
    expect(element).to.not.equal(null);
    expect(text).to.contain(message);
  }
);

When(/^I enter a bio to my profile (.*)$/, async function (bio) {
  let element = await this.driver.$(
    "/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div[1]/div/div[2]/div[2]/div[1]/div[2]/div[5]/textarea"
  );
  const oldValue = await element.getValue();
  if (oldValue) {
    const backspaces = new Array(oldValue.length).fill("Backspace");
    await element.setValue(backspaces);
  }
  return await element.setValue(bio);
});

Then(/^I see that the bio is correct (.*)$/, async function (message) {
  let element = await this.driver.$(
    "/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div[1]/div/div[2]/div[2]/div[1]/div[2]/div[5]/span"
  );

  let text = await element.getText();
  expect(element).to.not.equal(null);
  expect(text).to.contain(message);
});

Then(/^I see that the bio is not correct (.*)$/, async function (message) {
  let element = await this.driver.$(
    "/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div[1]/div/div[2]/div[2]/div[1]/div[2]/div[5]/span"
  );

  let text = await element.getText();
  expect(element).to.not.equal(null);
  expect(text).to.contain(message);
});

When(/^I enter a slug to my profile (.*)$/, async function (bio) {
  let element = await this.driver.$(
    "/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div[1]/div/div[2]/div[1]/div[2]/div[3]/div/input"
  );
  const oldValue = await element.getValue();
  if (oldValue) {
    const backspaces = new Array(oldValue.length).fill("Backspace");
    await element.setValue(backspaces);
  }
  return await element.setValue(bio);
});

Then(/^I see that the slug is correct (.*)$/, async function (message) {
  let element = await this.driver.$(
    "/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div[1]/div/div[2]/div[1]/div[2]/div[3]/span"
  );

  let text = await element.getText();
  expect(element).to.not.equal(null);
  expect(text).to.contain(message);
});

When("I click change password", async function () {
  let element = await this.driver.$(
    "/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div[1]/div/div[2]/div[4]/button/span"
  );
  return element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

When(/^I enter a old password to my profile (.*)$/, async function (password) {
  let element = await this.driver.$(
    "/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div[1]/div/div[2]/div[4]/div[2]/div/input"
  );
  return await element.setValue(password).then(() => {
    return takeScreenshot(this.driver);
  });
});
When(/^I enter a new password to my profile (.*)$/, async function (password) {
  let element = await this.driver.$(
    "/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div[1]/div/div[2]/div[4]/div[3]/div/input"
  );
  return await element.setValue(password).then(() => {
    return takeScreenshot(this.driver);
  });
});
When(
  /^I enter a verify password to my profile (.*)$/,
  async function (password) {
    let element = await this.driver.$(
      "/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div[1]/div/div[2]/div[4]/div[4]/div/input"
    );
    return await element.setValue(password).then(() => {
      return takeScreenshot(this.driver);
    });
  }
);

Then(/^I see an error 1 password message (.*)$/, async function (message) {
  let element = await this.driver.$(
    "/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div[1]/div/div[2]/div[4]/div[2]/span"
  );

  let text = await element.getText();
  expect(element).to.not.equal(null);
  expect(text).to.contain(message);
});

Then(/^I see an error 2 password message (.*)$/, async function (message) {
  let element = await this.driver.$(
    "/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div[1]/div/div[2]/div[4]/div[3]/span"
  );

  let text = await element.getText();
  expect(element).to.not.equal(null);
  expect(text).to.contain(message);
});

Then(/^I see an error 3 password message (.*)$/, async function (message) {
  let element = await this.driver.$(
    "/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div[1]/div/div[2]/div[4]/div[4]/span"
  );

  let text = await element.getText();
  expect(element).to.not.equal(null);
  expect(text).to.contain(message);
});

Then("I see a visual error password message", async function () {
  let element = await this.driver.$(
    "/html/body/div[2]/div/main/div[1]/div/div/div[1]/div/div/div"
  );

  expect(element).to.not.equal(null);
});

When("I click general setting button", async function () {
  var element = await this.driver.$('a[data-test-nav="settings"]');
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I click edit title and description", async function () {
  var element = await this.driver.$(
    "/html/body/div[2]/div/main/div[1]/div/div/div[3]/div[2]/div/div[1]/div/div[1]/div[2]/div[2]/div/button/span"
  );
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

When(/^I enter a title for general setting (.*)$/, async function (title) {
  let element = await this.driver.$(
    "/html/body/div[2]/div/main/div[1]/div/div/div[3]/div[2]/div/div[1]/div/div[1]/div[3]/div[1]/div/input"
  );
  const oldValue = await element.getValue();
  if (oldValue) {
    const backspaces = new Array(oldValue.length).fill("Backspace");
    await element.setValue(backspaces);
  }
  return await element.setValue(title);
});

When(
  /^I enter a description for general setting (.*)$/,
  async function (title) {
    let element = await this.driver.$(
      "/html/body/div[2]/div/main/div[1]/div/div/div[3]/div[2]/div/div[1]/div/div[1]/div[3]/div[2]/div/input"
    );
    const oldValue = await element.getValue();
    if (oldValue) {
      const backspaces = new Array(oldValue.length).fill("Backspace");
      await element.setValue(backspaces);
    }
    return await element.setValue(title);
  }
);

When("I click save title and description changes", async function () {
  var element = await this.driver.$(
    "/html/body/div[2]/div/main/div[1]/div/div/div[3]/div[2]/div/div[1]/div/div[1]/div[2]/div[2]/div/button[2]/span"
  );
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

Then("I see a title and description was updated", async function () {
  let titleElement = await this.driver.$(
    "/html/body/div[2]/div/main/div[1]/div/div/div[3]/div[2]/div/div[1]/div/div[1]/div[3]/div[1]/div"
  );
  let descripcionElement = await this.driver.$(
    "/html/body/div[2]/div/main/div[1]/div/div/div[3]/div[2]/div/div[1]/div/div[1]/div[3]/div[2]/div"
  );
  expect(titleElement).to.not.equal(null);
  expect(descripcionElement).to.not.equal(null);
});

Then("save button is not updated", async function () {
  let element = await this.driver.$(
    "/html/body/div[2]/div/main/div[1]/div/div/div[3]/div[2]/div/div[1]/div/div[1]/div[2]/div[2]/div/button[2]/span"
  );
  let text = await element.getText();
  expect(element).to.not.equal(null);
  expect(text).equal("Save");
});

When("I add a long page title", async function () {
  let element = await this.driver.$(
    "/html/body/div[2]/div/main/div[1]/section/div[1]/div[1]/div[2]/textarea"
  );
  return await element
    .setValue(faker.datatype.string({ length: 300 }))
    .then(() => {
      return takeScreenshot(this.driver);
    });
});

Then("I get a title error", async function () {
  let element = await this.driver.$("/html/body/div[2]/aside/article/div");
  let text = await element.getText();
  expect(element).to.not.equal(null);
  expect(text).equal(
    "Validation failed: Title cannot be longer than 255 characters."
  );
});

Then("I get a Excerpt error", async function () {
  let element = await this.driver.$("/html/body/div[2]/aside/article/div");
  let text = await element.getText();
  expect(element).to.not.equal(null);
  expect(text).equal(
    "Validation failed: Excerpt cannot be longer than 300 characters."
  );
});

When("I add text in Excerpt", async function () {
  let element = await this.driver.$(
    "/html/body/div[2]/div/main/div[1]/div/div/div/div[2]/form/section/div[5]/textarea"
  );
  return await element
    .setValue(faker.datatype.string({ length: 150 }))
    .then(() => {
      return takeScreenshot(this.driver);
    });
});

When("I add a long text in Excerpt", async function () {
  let element = await this.driver.$(
    "/html/body/div[2]/div/main/div[1]/div/div/div/div[2]/form/section/div[5]/textarea"
  );
  return await element
    .setValue(faker.datatype.string({ length: 301 }))
    .then(() => {
      return takeScreenshot(this.driver);
    });
});

When("I click code injection option", async function () {
  let element = await this.driver.$(
    "/html/body/div[2]/div/main/div[1]/div/div/div/div[2]/form/ul/li[4]/button"
  );
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I add a tag header 2", async function () {
  let element = await this.driver.$(
    "/html/body/div[2]/div/main/div[1]/div/div/div[2]/div/div[2]/form/div[1]/div/div/div[6]/div[1]/div/div/div/div[5]/div/pre"
  );
  return await element
    .setValue(faker.datatype.string({ length: 150 }))
    .then(() => {
      return takeScreenshot(this.driver);
    });
});

When("I add a tag footer 2", async function () {
  let element = await this.driver.$(
    "/html/body/div[2]/div/main/div[1]/div/div/div[2]/div/div[2]/form/div[2]/div/div/div[6]/div[1]/div/div/div/div[5]/div/pre"
  );
  return await element
    .setValue(faker.datatype.string({ length: 150 }))
    .then(() => {
      return takeScreenshot(this.driver);
    });
});

When("I click meta data option", async function () {
  let element = await this.driver.$(
    "/html/body/div[2]/div/main/div[1]/div/div/div/div[2]/form/ul/li[5]/button/span"
  );
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I add a meta title", async function () {
  let element = await this.driver.$(
    "/html/body/div[2]/div/main/div[1]/div/div/div[2]/div/div[2]/form/div[1]/input"
  );
  return await element.setValue(faker.animal.dog()).then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I add a long meta title", async function () {
  let element = await this.driver.$(
    "/html/body/div[2]/div/main/div[1]/div/div/div[2]/div/div[2]/form/div[1]/input"
  );
  return await element
    .setValue(faker.datatype.string({ length: 61 }))
    .then(() => {
      return takeScreenshot(this.driver);
    });
});

Then("I get a meta title error", async function () {
  let element = await this.driver.$(
    "/html/body/div[2]/div/main/div[1]/div/div/div[2]/div/div[2]/form/div[1]/p[1]"
  );
  let text = await element.getText();
  expect(element).to.not.equal(null);
  expect(text).equal("Recommended: 60 characters. You’ve used 61");
});

When("I add a meta description", async function () {
  let element = await this.driver.$(
    "/html/body/div[2]/div/main/div[1]/div/div/div[2]/div/div[2]/form/div[2]/textarea"
  );
  return await element
    .setValue(faker.datatype.string({ length: 61 }))
    .then(() => {
      return takeScreenshot(this.driver);
    });
});

When("I add a long meta description", async function () {
  let element = await this.driver.$(
    "/html/body/div[2]/div/main/div[1]/div/div/div[2]/div/div[2]/form/div[2]/textarea"
  );
  return await element
    .setValue(faker.datatype.string({ length: 146 }))
    .then(() => {
      return takeScreenshot(this.driver);
    });
});

Then("I see a meta description message", async function () {
  let element = await this.driver.$(
    "/html/body/div[2]/div/main/div[1]/div/div/div[2]/div/div[2]/form/div[2]/p[1]"
  );
  let numberElement = await this.driver.$(
    "/html/body/div[2]/div/main/div[1]/div/div/div[2]/div/div[2]/form/div[2]/p[1]/span"
  );
  let text = await element.getText();
  let colorProperty = await numberElement.getCSSProperty("color");
  let colorValue = colorProperty.parsed.hex;
  expect(element).to.not.equal(null);
  expect(text).equal("Recommended: 145 characters. You’ve used 61");
  expect(colorValue).equals("#e25440");
});

Then("I see a meta description message error", async function () {
  let element = await this.driver.$(
    "/html/body/div[2]/div/main/div[1]/div/div/div[2]/div/div[2]/form/div[2]/p[1]"
  );
  let numberElement = await this.driver.$(
    "/html/body/div[2]/div/main/div[1]/div/div/div[2]/div/div[2]/form/div[2]/p[1]/span"
  );
  let text = await element.getText();
  let colorProperty = await numberElement.getCSSProperty("color");
  let colorValue = colorProperty.parsed.hex;

  expect(element).to.not.equal(null);
  expect(text).equal("Recommended: 145 characters. You’ve used 146");
  expect(colorValue).equals("#30cf43");
});

When("I click x data option", async function () {
  let element = await this.driver.$(
    "#entry-controls > div > div.settings-menu-content > form > ul > li:nth-child(6) > button"
  );
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I add a x title", async function () {
  let element = await this.driver.$("//*[@id='twitter-title']");
  return await element.setValue(faker.internet.userName()).then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I add a long x title", async function () {
  let element = await this.driver.$("//*[@id='twitter-title']");
  return await element
    .setValue(faker.datatype.string({ length: 301 }))
    .then(() => {
      return takeScreenshot(this.driver);
    });
});

When("I click x description input", async function () {
  let element = await this.driver.$("#twitter-description");
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

Then("I get a x title error", async function () {
  let element = await this.driver.$(
    "#entry-controls > div.settings-menu.settings-menu-pane.settings-menu-pane-wide > div > div.settings-menu-content > form > div.form-group.error > p"
  );
  let text = await element.getText();
  expect(element).to.not.equal(null);
  expect(text).equal("Twitter Title cannot be longer than 300 characters.");
});

When("I add a x description", async function () {
  let element = await this.driver.$("#twitter-description");
  return await element.setValue(faker.lorem.paragraph()).then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I add a long x description", async function () {
  let element = await this.driver.$("#twitter-description");
  return await element
    .setValue(faker.datatype.string({ length: 501 }))
    .then(() => {
      return takeScreenshot(this.driver);
    });
});

Then("I get a x description error", async function () {
  let element = await this.driver.$(
    "#entry-controls > div.settings-menu.settings-menu-pane.settings-menu-pane-wide > div > div.settings-menu-content > form > div.form-group.error > p"
  );
  let text = await element.getText();
  expect(element).to.not.equal(null);
  expect(text).equal(
    "Twitter Description cannot be longer than 500 characters."
  );
});

When("I click facebook data option", async function () {
  let element = await this.driver.$(
    "#entry-controls > div > div.settings-menu-content > form > ul > li:nth-child(7) > button"
  );
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I add a facebook title", async function () {
  let element = await this.driver.$("//*[@id='og-title']");
  return await element.setValue(faker.internet.userName()).then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I add a long facebook title", async function () {
  let element = await this.driver.$("//*[@id='og-title']");
  return await element
    .setValue(faker.datatype.string({ length: 301 }))
    .then(() => {
      return takeScreenshot(this.driver);
    });
});

When("I click facebook description input", async function () {
  let element = await this.driver.$("#og-description");
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

Then("I get a facebook title error", async function () {
  let element = await this.driver.$(
    "#entry-controls > div.settings-menu.settings-menu-pane.settings-menu-pane-wide > div > div.settings-menu-content > form > div.form-group.error > p"
  );
  let text = await element.getText();
  expect(element).to.not.equal(null);
  expect(text).equal("Facebook Title cannot be longer than 300 characters.");
});

When("I add a facebook description", async function () {
  let element = await this.driver.$("#og-description");
  return await element.setValue(faker.lorem.paragraph()).then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I add a long facebook description", async function () {
  let element = await this.driver.$("#og-description");
  return await element
    .setValue(faker.datatype.string({ length: 501 }))
    .then(() => {
      return takeScreenshot(this.driver);
    });
});

Then("I get a facebook description error", async function () {
  let element = await this.driver.$(
    "#entry-controls > div.settings-menu.settings-menu-pane.settings-menu-pane-wide > div > div.settings-menu-content > form > div.form-group.error > p"
  );
  let text = await element.getText();
  expect(element).to.not.equal(null);
  expect(text).equal(
    "Facebook Description cannot be longer than 500 characters."
  );
});

Then("I get an author required error", async function () {
  let element = await this.driver.$(
    "#entry-controls > div > div.settings-menu-content > form > section > div.form-group.for-select.mb8.error > p"
  );
  let text = await element.getText();
  expect(element).to.not.equal(null);
  expect(text).equal("At least one author is required.");
});

When("I remove author", async function () {
  let element = await this.driver.$(
    'span[class="ember-power-select-multiple-remove-btn"]'
  );
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I click publish time option", async function () {
  let element = await this.driver.$(
    'button[class="gh-publish-setting-title "]'
  );
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I click schedule option", async function () {
  let element = await this.driver.$('div[class="gh-radio "]');
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I click publish continue button", async function () {
  let element = await this.driver.$(
    'button[class="gh-btn gh-btn-black gh-btn-large"]'
  );
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I click publish scheduled page button", async function () {
  let element = await this.driver.$(
    'button[class="gh-btn gh-btn-large gh-btn-pulse ember-view"]'
  );
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

Then("I see the page is scheduled", async function () {
  let element = await this.driver.$('span[class="green"]');
  let text = await element.getText();
  expect(element).to.not.equal(null);
  expect(text).equal("All set!");
});

When("I go back to pages", async function () {
  let element = await this.driver.$('a[href="#/pages/"]');
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I enter the last page", async function () {
  let element = await this.driver.$(
    "body > div.gh-app > div > main > section > section > div.posts-list.gh-list.feature-memberAttribution > div:nth-child(1)"
  );
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

Then("I see the page is published", async function () {
  let element = await this.driver.$('span[class="green"]');
  let text = await element.getText();
  expect(element).to.not.equal(null);
  expect(text).equal("Boom. It’s out there.");
});

When("I click delete page button", async function () {
  let element = await this.driver.$(
    "#entry-controls > div > div.settings-menu-content > div > button"
  );
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I click delete page confirm button", async function () {
  let element = await this.driver.$(
    'button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]'
  );
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

Then("I see i was redirected to pages", async function () {
  let element = await this.driver.$(
    "body > div.gh-app > div > main > section > div > header > div > h2"
  );
  let text = await element.getText();
  expect(element).to.not.equal(null);
  expect(text).equal("Pages");
});

When("I click unpublish page button", async function () {
  let element = await this.driver.$(
    'button[class="gh-btn gh-btn-editor darkgrey gh-unpublish-trigger"]'
  );
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

When("I click unpublish page confirm button", async function () {
  let element = await this.driver.$('button[class="gh-revert-to-draft"]');
  return await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
});

Then("I should get a notification of the unpublished page", async function () {
  let element = await this.driver.$(
    "body > div.gh-app > div > aside > article > div.gh-notification-content > span"
  );
  let text = await element.getText();
  expect(element).to.not.equal(null);
  expect(text).equal("Page successfully reverted to a draft.");
});

When("I filter by published pages", async function () {
  let element = await this.driver.$(
    "body > div.gh-app > div > main > section > div > header > section > div > div.gh-contentfilter-menu.gh-contentfilter-type"
  );
  await element.click().then(() => {
    return takeScreenshot(this.driver);
  });
  let element2 = await this.driver.$("li[data-option-index='2']");
  return await element2.click().then(() => {
    return takeScreenshot(this.driver);
  });
});


When("I enter email and password POM {kraken-string} {kraken-string}", async function (email, password) {

  await LoginPage.enterCredentials(this.driver, email, password);
  await LoginPage.clickSignIn(this.driver);
});

When("I enter to profile POM", async function () {

  await MainPage.clickUserMenu(this.driver);
  await MainPage.clickMyProfile(this.driver);
});

When(/^I enter a new location to my profile POM (.*)$/, async function (location) {

  await ProfilePage.enterLocation(this.driver, location);
});

Then(/^I see that the new location is correct POM (.*)$/, async function (message) {

  await ProfilePage.checkLocation(this.driver, message);
});

When("I click save & close button", async function () {

  await ProfilePage.clickSaveAndClose(this.driver)
});

When(/^I enter a new website to my profile POM (.*)$/, async function (website) {

  await ProfilePage.enterWebsite(this.driver, website);
});

Then(/^I see that the new website is correct (.*)$/, async function (message) {
  
  await ProfilePage.checkWebsite(this.driver, message)
});

Then(/^I see that the new website is not correct POM (.*)$/, async function (message) {
  
  await ProfilePage.checkWebsiteNotCorrect(this.driver, message)
});

When(/^I enter a new name to my profile POM (.*)$/, async function (name) {
  
  await ProfilePage.enterName(this.driver, name);
});

Then(/^I see that the new name is correct POM (.*)$/, async function (message) {
  
  await ProfilePage.checkName(this.driver, message);
});

When(/^I enter a new email to my profile POM (.*)$/, async function (email) {
  
  await ProfilePage.enterEmail(this.driver, email);
});

Then(/^I see that the new email is not correct POM (.*)$/, async function (message) {

  await ProfilePage.checkEmail(this.driver, message);
});

When(/^I enter a new url facebook to my profile (.*)$/, async function (url) {

  await ProfilePage.enterFaceookUrl(this.driver, url)
});

Then(/^I see that the new url facebook is correct (.*)$/, async function (message) {

  await ProfilePage.checkFacebookUrl(this.driver, message)
});

Then(/^I see that the new url facebook is not correct (.*)$/, async function (message) {

  await ProfilePage.checkFacebookUrlIsNotCorrect(this.driver, message)
});

When(/^I enter a new url twitter to my profile (.*)$/, async function (url) {
  
  await ProfilePage.enterTwitter(this.driver, url);
});

Then(/^I see that the new url twitter is correct (.*)$/, async function (message) {

  await ProfilePage.checkTwitterUrl(this.driver, message);
});

Then(/^I see that the new url twitter is not correct (.*)$/,async function (message) {

  await ProfilePage.checkTwitterUrlIsNotCorrect(this.driver, message)
});

When(/^I enter a new bio to my profile (.*)$/, async function (bio) {

  await ProfilePage.enterBio(this.driver, bio)
});

Then(/^I see that the new bio is correct (.*)$/, async function (message) {

  await ProfilePage.checkBio(this.driver, message)
});

Then(/^I see that the new bio is not correct (.*)$/, async function (message) {

  await ProfilePage.checkBioIsNotCorrect(this.driver, message)
});

When(/^I enter a new slug to my profile (.*)$/, async function (slug) {

  await ProfilePage.enterSlug(this.driver, slug)
});

Then(/^I see that the new slug is correct (.*)$/, async function (message) {
  
  await ProfilePage.slugCorrect(this.driver, message)
});

When("I click change the password", async function () {

  await ProfilePage.changePassword(this.driver);
});

When(/^I enter the old password to my profile (.*)$/, async function (password) {

  await ProfilePage.changeOldPassword(this.driver, password);
});

When(/^I enter the new password to my profile (.*)$/, async function (password) {

  await ProfilePage.newPassword(this.driver, password);
});

When(/^I enter a verify the password to my profile (.*)$/,async function (password) {

  await ProfilePage.verifyPassword(this.driver, password);
});

Then(/^I see one error 1 password message (.*)$/, async function (message) {

  await ProfilePage.getErrorMessageOne(this.driver, message)
});

Then(/^I see an error 2 password message (.*)$/, async function (message) {

  await ProfilePage.getErrorMessageTwo(this.driver, message);
});

Then(/^I see an error 3 password message (.*)$/, async function (message) {

  await ProfilePage.getErrorMessageThree(this.driver, message);
});