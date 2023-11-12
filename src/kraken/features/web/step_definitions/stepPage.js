const { Given, When, Then } = require('@cucumber/cucumber');

When('I click to pages button', async function() {
    let element = await this.driver.$('a[href="#/pages/"');
    return await element.click();
});

When('I click new page', async function() {
    let element = await this.driver.$('a[href="#/editor/page/"]');
    return await element.click();
});

When('I add a page title', async function() {
    let element = await this.driver.$('textarea[placeholder="Page title"]');
    return await element.setValue("Titulo de mi primera página");
});

When('I add a page text', async function() {
    let element = await this.driver.$('p[data-koenig-dnd-droppable="true"]');
    element.click();
    let element2 = await this.driver.$('p[data-koenig-dnd-droppable="true"]');
    return await element2.setValue(" Algun texto cool");
});

When('I click publish button', async function() {
    let element = await this.driver.$('//span[text()="Publish"]');
    return await element.click();
});

When('I click continue button', async function() {
    let element = await this.driver.$('//span[text()="Continue, final review →"]');
    return await element.click();
});

When('I click publish page right now', async function() {
    let element = await this.driver.$('//span[text()="Publish page, right now"]');
    return await element.click();
});

When('I click back to editor', async function() {
    let element = await this.driver.$('//span[text()="Back to editor"]');
    return await element.click();
});

When('I click right now drop list', async function() {
    let element = await this.driver.$('div[data-test-setting="publish-at"]');
    return await element.click();
});

When('I click Schedule for later', async function() {
    let element = await this.driver.$('//label[text()="Schedule for later"]');
    return await element.click();
});

When('I click publish date scheduled button', async function() {
    let element = await this.driver.$('span[data-test-task-button-state="idle"]');
    return await element.click();
});

When('I click back to editor2', async function() {
    let element = await this.driver.$('//span[text()=" Editor"]');
    return await element.click();
});

When('I click back to Pages', async function() {
    let element = await this.driver.$('//span[text()="Pages"]');
    return await element.click();
});




