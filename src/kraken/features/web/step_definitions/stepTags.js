const { Given, When, Then } = require("@cucumber/cucumber");

When("I click next", async function () {
  let element = await this.driver.$("#ember5");
  return await element.click();
});

When("I click new Tag", async function () {
  let element = await this.driver.$('a[href="#/tags/new/"]');
  return await element.click();
});

When("I click save", async function () {
  let element = await this.driver.$('button[data-test-button="save"]');
  return await element.click();
});

Then("I get error message", async function () {
  return await this.driver.$('span[data-test-task-button-state="failure"]');
});

When("I add Tag name", async function () {
  let element = await this.driver.$("#tag-name");
  return await element.setValue("Mi primer tag");
});

When("I add Tag color", async function () {
  let element = await this.driver.$('input[data-test-input="accentColor"]');
  return await element.setValue("37ff00");
});

When("I add Tag description", async function () {
  let element = await this.driver.$("#tag-description");
  return await element.setValue("Esta es la descripción de mi primer tag");
});

When("I click internal tag button", async function () {
  let element = await this.driver.$('button[data-test-tags-nav="internal"]');
  return await element.click();
});

When("I click first expand in tag page", async function () {
  var element = await this.driver.$(".gh-btn.gh-btn-expand");
  return await element.click();
});

When("I add metadata title", async function () {
  let element = await this.driver.$("#meta-title");
  return await element.setValue("Meta - titel - tag - 1");
});
