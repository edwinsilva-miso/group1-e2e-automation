const { Given, When, Then } = require('@cucumber/cucumber');

When('I click to member button', async function() {
    let element = await this.driver.$('a[href="#/members/"');
    return await element.click();
});


When('I click new member', async function() {
    let element = await this.driver.$('a[href="#/members/new/"]');
    return await element.click();
});

When('I add a member name', async function() {
    let element = await this.driver.$('#member-name');
    return await element.setValue("joselito");
});

When('I add a member email', async function() {
    let element = await this.driver.$('#member-email');
    return await element.setValue("joselito@correo.com");
});

When('I add a member note', async function() {
    let element = await this.driver.$('#member-note');
    return await element.setValue("Esta es una nota de joselito");
});

Then('I get an error from member creation', async function() {
    return  await this.driver.$('.response')[1].textContent == '\n    Member already exists. Attempting to add member with existing email address\n';
});

When('I click leave button', async function() {
    let element = await this.driver.$('//span[text()="Leave"]');
    return await element.click();
});

When('I click member joselito', async function() {
    let element = await this.driver.$('//p[text()="joselito@correo.com"]');
    return await element.click();
});

When('I click setting member button', async function() {
    let element = await this.driver.$('button[data-test-button="member-actions"]');
    return await element.click();
});

When('I click delete member button', async function() {
    let element = await this.driver.$('button[data-test-button="delete-member"]');
    return await element.click();
});

When('I click confirm delete member button', async function() {
    let element = await this.driver.$('button[data-test-button="confirm"]');
    return await element.click();
});

