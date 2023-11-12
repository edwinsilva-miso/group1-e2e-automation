const { Given, When, Then } = require('@cucumber/cucumber');

When('I click to Post button', async function() {
    let element = await this.driver.$('a[href="#/posts/"]');
    return await element.click();
});

When('I click New post button', async function() {
    let element = await this.driver.$('//span[text()="New post"]');
    return await element.click();
});

When('I add a Post title', async function() {
    let element = await this.driver.$('textarea[placeholder="Post title"]');
    return await element.setValue("Titulo de mi primera página");
});

When('I add a Post text', async function() {
    let element = await this.driver.$('p[data-koenig-dnd-droppable="true"]');
    element.click();
    let element2 = await this.driver.$('p[data-koenig-dnd-droppable="true"]');
    return await element2.setValue(" Algun texto cool");
});

When('I click to Post button2', async function() {
    let element = await this.driver.$('a[data-test-link="posts"]');
    return await element.click();
});

When('I click leave button2', async function() {
    let element = await this.driver.$('//span[text()="Leave"]');
    return await element.click();
});

Then('I click over post picture', async function() {
    //let element = await this.driver.$('img[src="src="https://static.ghost.org/v5.0.0/images/publication-cover.jpg""]');
    let element = await this.driver.$('.gh-post-bookmark-container');
    return await element.click();
});

Then('I click back to Post', async function() {
    let element = await this.driver.$('a[href="#/posts/"]');
    return await element.click();
});